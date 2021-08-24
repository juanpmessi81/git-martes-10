/*Navigation*/
    menuBtn = document.querySelector('nav .btn')
    menuLst = document.querySelector('nav .menu')

    menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = '&times;' : menuBtn.innerHTML = '&equiv;'

/*Contact Map*/
    mapBtn = document.querySelector('footer .btn')
    mapFrm = document.querySelector('footer .map')

    mapBtn.addEventListener( 'click', () => {
        if( mapFrm.classList.toggle('active') ){
            mapBtn.innerHTML = '-'
        } else {
            mapBtn.innerHTML = '+'
        }
    }   )
