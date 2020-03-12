const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
    
    changeActive(blockID)
    closeMenu()
  })
}

function closeMenu() {
    const burger = document.getElementById("IBurger");
    const menu = document.getElementById("menu");
    const Wburger = document.getElementById('WBurger');

    burger.className = 'burgerA';
    menu.className = 'menu';   
    Wburger.className = 'wrapBurger wrapBurgerA'
}

function changeActive(currentLi) {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        if (anchor.getAttribute('href').substr(1) == currentLi) {
            console.log( anchor )
            anchor.className = 'active'
        }
        else{
            anchor.className = ''
        }
    }
}

function burger() {
    const burger = document.getElementById("IBurger");
    const menu = document.getElementById("menu");
    const Wburger = document.getElementById('WBurger');
    if ( burger.className == 'burgerA' ) {
        burger.className = 'burgerD';
        menu.className = "menuA";
        Wburger.className = 'wrapBurger wrapBurgerF'
    }
    else {
        burger.className = 'burgerA';
        menu.className = 'menu';   
        Wburger.className = 'wrapBurger wrapBurgerA'
    }
}


