

var users = [];

Swal({
    title: 'Número de participantes',
    html: `<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="number" id="qtd" pattern="-?[0-9]*(\.[0-9]+)?">
        <label class="mdl-textfield__label" for="sample3">Quantidade de jogadores</label>
    </div>`,
    onClose: () => {

        var qtd = document.querySelector("#qtd").value;
        console.log(qtd);
        addUser(qtd);
        
    },
    showCancelButton: true,
})




async function pushUser() {
    const { value: name } = await Swal({
        title: 'Nome do time',
        input: 'text',
        showCancelButton: true,
        inputValidator: (value) => {
            return !value && 'You need to write something!'
        }
    });

    if (name) {
        console.log(name);
        var player = new HeroPlayer(name);
        users.push(player);
        return 1;
    }
}

async function addUser(qtd) {
    var i =0;
    while(i < qtd){
        i += await pushUser();
    }
    console.log(users)
    for(i=0; i < users.length; i++){
        if(i == 0){
            var name = document.querySelector('.presenter-person');
            name.innerHTML = users[0].getname();
            let textCard = document.querySelector(".mdl-card__supporting-text");
            textCard.innerHTML = users[0].getponctuation() + " pontos";
            console.log(name);
        }
        else
        producesCards(i);
    }
}

function producesCards(position){
    var elem = document.querySelector("#aproves");
    elem.style.display = "block";
    var cln = elem.cloneNode(true);
    cln.style.top += 300;
    var box = document.querySelector(".box");
    box.appendChild(cln);
    let textCard = cln.querySelectorAll(".mdl-card__supporting-text");
    let name =  document.querySelectorAll('.presenter-person')[position];
    name.innerHTML = users[position].getname();
    textCard.innerHTML = users[position].getponctuation() + " pontos";
    console.log("Inserted\n"+name);
}

console.log(questions);