function Genero() {

    var genero = document.getElementById("search-text").value

    if (genero == "Romance" || genero == "romance") {
        resultado.innerHTML = "Gremio, maior de RS!"
    }
    else {
        if (genero == "Fantasia" || genero == "fantasia") {
            resultado.innerHTML = "Gremio, maior de RS!"
        }
        else {
            if (genero == "Drama" || genero == "drama") {
                resultado.innerHTML = "Gremio, maior de RS!"
            }
            else {
                if (genero == "Terror" || genero == "terror") {
                    resultado.innerHTML = "Gremio, maior de RS!"
                }
                else {
                    if (genero == "Poema" || genero == "poema") {
                        resultado.innerHTML = "Gremio, maior de RS!"
                    }
                    else {
                        window.alert("Não temos livros com esse gênero.")
                    }
                }
            }
        }
    }
    document.getElementById("search-text").value = ""
}

function showNav() {
    var menu =document.getElementById('linha')

    if(menu.style.display=='block'){
        menu.style.display = 'none'
        document.querySelector('#barrinhas').src = "../Img/linhas.png"
    }else{
        menu.style.display = 'block'
        document.querySelector('#barrinhas').src = "../Img/close.png"
        menu.ul.style.height = '300px'
    }
}