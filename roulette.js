

var paper;
var arcs = []; //svg object
var texts = []; //svg object
var pieText = [
  'Perde 100',
  '200 pontos',
  'Troca ou Dobra',
  '100 pontos',
  'Ganhe metade',
  '300 pontos',
  'Duas por uma',
  '200 pontos',
  '100 pontos',
  'Overflow',
  '500 pontos',
  'Perde a vez',
  'Perde metade',
];
var center = { 'x': 270, 'y': 270 };
var diameter = 220;
var m = new MersenneTwister(); //move to global to fix the seed
var gamerTurn = 0;

//max not included, 0 to max-1
function getRandom(max) {
  var min = 0;
  //return Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.floor(m.random() * (max - min + 1)) + min;
}

function multiplyList(rawList) {
  var list = rawList;
  // Strip empty entries
  while (list.indexOf("") > 0) {
    console.log('found');
    list.splice(list.indexOf(""), 1);
  }
  // Repeat items until it has more than 8 items
  while (list.length < 8) {
    list = list.concat(list);
  }
  return list;
}

function getAngleFromID(arcId, arcsCount) { // Do we need arcsCount?
  var arcAngle = 360 / arcsCount;
  return (arcAngle * arcId + arcAngle / 2);
}

function getRandomDriftDeg(multipliedItems) {
  var arcAngle = 360 / multipliedItems.length;
  return Math.floor(0.9 * (Math.random() * arcAngle - arcAngle / 2));
}

function spinToId(id) {
  //TODO: Move these config to the top
  var time = 5000; //ms
  //var easing = '>'
  var easing = 'cubic-bezier(0,1,0.1,1)';
  var rotateAngle = 360 * 7;
  //var rotateAngle = 360 * 1; 
  rotateAngle -= getAngleFromID(id, pieText.length);
  rotateAngle += getRandomDriftDeg(pieText);
  // spinToId texts 
  texts.forEach(function (text) {
    var fromAngle = parseInt(text.transform()[0][1]);
    var toAngle = fromAngle + rotateAngle;
    text.stop().animate({ transform: "r" + toAngle + " " + center.x + " " + center.y }, time, easing);
  });
  // spinToId arcs
  var roulette = paper.set(arcs);
  roulette.stop().animate({ transform: "r" + rotateAngle + " " + center.x + " " + center.y }, time, easing);
}


function getColor(i, total) {
  var h = i / total;
  return "hsl(" + h + ", .5, 0.5)";
  //return colorArr[i % total % colorArr.length];
  //return colorArr[i];
}


function drawRouletteShadow() {
  var offset = 2;
  var c = paper.circle(center.x, center.y, diameter);
  c.attr("fill", "black");
  c.glow({ width: 15, offsetx: 2.5, offsety: 2.5 });

}

function drawArcs() {
  //TODO: cleanup this two duplicated for
  var startAngle, endAngle = 0;
  var x1, x2, y1, y2 = 0;
  //alert("O tamanho da lista é: "+multiplyList(pieText).length);
  for (var i = 0; i < pieText.length; i++) {

    startAngle = endAngle;
    endAngle = startAngle + 360 / pieText.length;

    x1 = parseInt(center.x + diameter * Math.cos(Math.PI * startAngle / 180));
    y1 = parseInt(center.y + diameter * Math.sin(Math.PI * startAngle / 180));

    x2 = parseInt(center.x + diameter * Math.cos(Math.PI * endAngle / 180));
    y2 = parseInt(center.y + diameter * Math.sin(Math.PI * endAngle / 180));

    var d = "M" + center.x + "," + center.y + "L" + x1 + "," + y1 + " A" + diameter + "," + diameter + " 0 0,1 " + x2 + "," + y2 + " z"; //1 means clockwise
    arc = paper.path(d);
    arc.attr("fill", getColor(i, pieText.length));
    arcs.push(arc);
  }
  //draw text on top of arcs
  for (var i = 0; i < pieText.length; i++) {
    startAngle = endAngle;
    endAngle = startAngle + 360 / pieText.length;
    var text = paper.text(center.x + diameter / 2, center.y, pieText[i]);
    text.attr({ "font-size": "20px" });
    text.transform('r' + (startAngle + endAngle) / 2 + ' ' + center.x + ' ' + center.y);
    //alert(d);
    texts.push(text);
  }
}

function drawPointer() {
  var pcmd = "M" + center.x + "," + center.y + " m" + diameter + ",0" + " m-55,0 l75,0 l-20,15 10 20 -25 z 14 y";
  var p = paper.path(pcmd);
  p.attr("fill", "#F0F0F0");
  p.glow({ width: 5, offsetx: 2.5, offsety: 2.5 });
}

function reset() {
  paper.remove();
  texts.forEach(function (text) {
    text.remove();
  });
  texts = [];
  arcs = [];
}

function parseList() {
  var list = document.getElementById('items').value.split("\n");
  return list;
}


//url related
/*
//This will cause a refresh
function updateUrl(){
  var url = window.location.href;
  var baseUrl = url.split('?')[0];
  window.location.href = baseUrl + "?items=" + pieText.join(',');
}
*/

function getQueryStringByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function init() {
  paper = Raphael("holder"); //Don't know why this have to be here
  // Order decides the z-index
  drawRouletteShadow();
  drawArcs();
  drawPointer();
}

function randomSpin() {
  winnerId = getRandom(multiplyList(pieText).length - 1); //for 5 arcs, the id is 0 to 4
  spinToId(winnerId);
}

function refreshUi() {
  //Call this to reflect pieText change
  //pieText = parseList();
  document.getElementById('bookmarklink').href = "./roulette.html?items=" + pieText.join(',');

}


function getSelected() {
  if (pieText.length <= 1) { return; }
  console.log(`WinnerId ${winnerId} % ${pieText.length} = ${winnerId % pieText.length}`);
  return winnerId % pieText.length;
}



document.body.onload = function () {
  var query = getQueryStringByName('items');
  if (query !== "") {
    pieText = query.split(',');
  }
  //pieText = parseList();
  refreshUi();
  init();


  document.getElementById('genBtn').onclick = function () {
    //updateUrl();
    let i = gamerTurn % users.length;
    reset();
    init();
    randomSpin();
    refreshUi();
    //removeWinner();
    var selected = getSelected();
    Swal({
      title: 'Sorteado para '+users[i].getname(),
      html: pieText[selected],
      onClose: () => {
        chooses(i,selected);
      }
    });
    gamerTurn++;
  };

  function chooses(round,opt) {
    switch (opt) {
      case 0:
        answerQuestion(round, 100, true);
        break;
      case 1:
        answerQuestion(round, 200);
        break;
      case 2:
        answerQuestion(round, users[round].getponctuation());
        break;
      case 3:
        answerQuestion(round, 100, true);
        break;
      case 4:
        answerQuestion(round, (users[round].getponctuatio()) / 2);
        break;
      case 5:
        answerQuestion(round, 300);
        break;
      case 6:
        answerQuestion(round, 150).then(function(){
          answerQuestion(round, 150);
        });
        break;
      case 7:
        answerQuestion(round, 200);
        break;
      case 8:
        answerQuestion(round, 100);
        break;
      case 9:
        let change = (round + 1) % users.length;
        answerQuestion(round, 200);
        users[change].setponctuation(200);
        break;
      case 10:
        answerQuestion(round, 500);
        break;
      case 11:
        alert("Dando a vez");
        break;
      case 12:
        answerQuestion(round, (users[round].getponctuation()) / 2, true);
        break;
    }

  }

  /*
    'Perde 100',
  '200 pontos',
  'Passa ou Dobra',
  '100 pontos',
  'Ganhe metade',
  '300 pontos',
  'Duas por uma',
  '200 pontos',
  '100 pontos',
  'Overflow',
  '500 pontos',
  'Perde a vez'
  */

  //window.onkeydown = (function(evt){if (evt.keyCode === 32 || evt.keyCode === 13){ init();}});
  //
};
