
function addPoints(num, userNum) {
  users[userNum].setponctuation(num)
  var obj = document.querySelectorAll(".putText")
  obj[userNum].innerHTML = users[userNum].getponctuation() + " pontos"
  console.log(obj + "\nUser = "+users[userNum].getname())
}



async function answerQuestion(user, value, negative = false) {
  
  var random = Math.floor(Math.random()* (Object.keys(questions).length));
  console.log(random);
  var inputOptions = questions[random].options;
  
  let timerInterval;
  var header = questions[random].head;
  var gabarito = questions[random].gabarito;
  var rightMatch = gabarito-1;
  if(isNaN(value)) value = 0;

  /*const {value: color} = */
  Swal({
    title: 'Pergunta!',
    position: 'top-end',
    html: `Você tem <strong></strong> segundos <br>
    ${header} <br> ESTA PERGUNTA VALE ${value} pontos
    `,
    input: 'radio',
    width: 600,
    timer: 45000,
    inputOptions: inputOptions,
    inputValidator: (value) => {
      return !value && 'Você precisa escolher algo'
    },

    onBeforeOpen: () => {

      timerInterval = setInterval(() => {
        Swal.getContent().querySelector('strong')
          .textContent = (Swal.getTimerLeft() / 1000)
            .toFixed(0)
      }, 100)
    },

    onClose: () => {
      Swal.stopTimer()
      clearInterval(timerInterval)
      
      var elem = document.querySelector("input:checked")
      if (elem == null) {
        
        if(negative == true) addPoints((-1)*value, user)
        clearInterval(timerInterval)
        Swal.close()
        return;
      }
      
      console.log(elem.value + " "+rightMatch)
      if (elem.value == rightMatch) {
        Swal({ html: 'Você selecionou: ' + elem.value + " e está certíssimo" })
        console.log("Acertô")
        
        if(negative == false){
        addPoints(value, user);
        console.log("Bolacha")
        }
      }
      else {
        Swal({ html: 'EROW ' })
        if(negative == true){
        addPoints((-1)*value, user)
        }
      }

      console.log("TST")
      Swal.close() 
    },
    onAfterClose: ()=>{
      clearInterval(timerInterval)
    }
  })

  questions.splice(random,1)

}
