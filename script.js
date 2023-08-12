function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    /*
    What is the use of classList property and toggle() method?
    classList property is use to interact with the class attributes of HTML elements.
    It provide an interface to manipulate class attributes of an HTML elements.
    
    Toggle() method is use to toggle the presence of particular class in HTML element.
    If element not have target class than it add that class, if it is present than it
    remove that class from element.
    */
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}