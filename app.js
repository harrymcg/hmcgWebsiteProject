//Testing whether I've created as a new branch
'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Make it dark?";
    }
    else {
        this.textContent = "Make it light?";
    }
    console.log('current class name: ' + className)
});