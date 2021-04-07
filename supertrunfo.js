var cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem: "https://i.pinimg.com/originals/b5/32/b6/b532b6c93b7c45a1fb3bc0a607ec813a.gif",
  atributos: {
      ataque: 80,
      defesa: 60,
      magia: 90
  }
}

var cartaRafa = {
  nome: "Bulbasauro",
  imagem: "https://media1.tenor.com/images/1aad31663c3542e8dceec290bd72e296/tenor.gif?itemid=5634774",
  atributos: {
      ataque: 30,
      defesa: 40,
      magia: 20
  }
}

var cartaGui = {
  nome: "Lorde Darth Vader",
  imagem: "https://thumbs.gfycat.com/BruisedGrimyGalago-max-14mb.gif",
  atributos: {
      ataque: 50,
      defesa: 30,
      magia: 70
  }
}

var cartaGojo = {
  nome: "Gojo Satoro",
  imagem: "https://64.media.tumblr.com/3dae123ff7719183110d4286d52386a2/d701cb43c1eb46e0-ef/s640x960/0a2005b661c15b1464180cdb9110e59b5b619c12.gif",
  atributos: {
      ataque: 82,
      defesa: 80,
      magia: 95
  }
}

var cartaLuffy = {
  nome: "Monkey D. Luffy",
  imagem: "https://64.media.tumblr.com/ef973e0fdd953e5474520a8f6d066eee/93f204cb63a05a72-8d/s540x810/f1aa107468aadb6eaa967bd294d94cc0d0adfaa1.gifv",
  atributos: {
      ataque: 92,
      defesa: 90,
      magia: 85
  }
}

var cartaNaruto = {
  nome: "Naruto Uzumaki",
  imagem: "https://i.pinimg.com/originals/00/aa/34/00aa34b9ae1fcf98d439d25ff6e3b978.gif",
  atributos: {
      ataque: 85,
      defesa: 90,
      magia: 100
  }
}

var cartaZoro = {
  nome: "Roronoa Zoro",
  imagem: "https://i.pinimg.com/originals/db/a5/89/dba58916159f9d5f0d2fd18fd6285095.gif",
  atributos: {
      ataque: 90,
      defesa: 88,
      magia: 70
  }
}

var cartaSasuke = {
  nome: "Sasuke Uchiha",
  imagem: "https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif",
  atributos: {
      ataque: 82,
      defesa: 90,
      magia: 90
  }
}

var cartaAsta = {
  nome: "Asta",
  imagem: "https://i.pinimg.com/originals/30/2f/64/302f646d2dc6d6a06e621bdec6c42306.gif",
  atributos: {
      ataque: 98,
      defesa: 90,
      magia: 0
  }
}

var cartaSanji = {
  nome: "Vinsmoke Sanji",
  imagem: "https://i.pinimg.com/originals/68/4e/c4/684ec444c4b1f599862ef0606514589f.gif",
  atributos: {
      ataque: 85,
      defesa: 80,
      magia: 75
  }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaGojo, cartaLuffy, cartaNaruto, cartaZoro, cartaSasuke, cartaAsta, cartaSanji]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
     
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
        pontosMaquina && pontosJogador--
    }
  if (cartas.length == 0) {
    alert("Fim de jogo")
    if (pontosJogador > pontosMaquina) {
      htmlResultado = '<p class="resultado-final">Venceu</p>'
      } else if (pontosMaquina > pontosJogador) {
         htmlResultado = '<p class="resultado-final">Perdeu</p>'
      } else {
         htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
   }else {
     document.getElementById('btnProximaRodada').disabled = false
  }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id='carta-jogador' class='carta'></div> <div id='carta-maquina' class='carta'></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}