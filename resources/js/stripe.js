const menuItems = document.querySelectorAll('nav ul li');

menuItems.forEach(menuItem => menuItem.addEventListener('mouseenter', handleEnter));
menuItems.forEach(menuItem => menuItem.addEventListener('mouseleave', handleLeave));

function handleEnter() {
    const menu = this.querySelector('.menu');

    menu.classList.add('menu-enter');
}

function handleLeave() {
    const menu = this.querySelector('.menu');

    menu.classList.remove('menu-enter');
}
