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