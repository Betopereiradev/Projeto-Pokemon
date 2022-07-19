var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {
  // Bloqueia o refresh da página
  e.preventDefault()

  // URL da pesquisa
  let urlForm = "https://pokeapi.co/api/v2/pokemon/"

  // Valor do input Name
  let name = document.getElementById('name')

  // Concatena a url com o input name
  urlForm = urlForm + name.value



  // ID Content
  let resposta = document.getElementById('content')

  // ID Imagem Pokemon
  let imagem = document.getElementById('imgPokemon')

  // Resposta em HTML
  let html = ''

  fetch(urlForm)
  .then(resposta => resposta.json())
  .then(function(data){
    console.log(data)
    html = "Pokemon: " + data.name + '<br>'
    html = html + "Tipo: " + data.types[0].type.name
    resposta.innerHTML = html

    imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"

  })
  .catch(function (err){
    if (err == 'SyntaxError: Unexpected token N in JSON at position 0'){
      html = "Pokemon não encontrado."
    } else {
      html = err
    }
    resposta.innerHTML = html
  })
  

});
