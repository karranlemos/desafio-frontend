const htmlClassName = 'js-navbar';
const mobileButtonClassName = 'js-mobile-button';

var singleton = null;

class Navbar {
    constructor(navbar) {
        this.navbar = navbar;

        this.mobileButton = this.navbar.querySelector(`.${mobileButtonClassName}`);
        if (!this.mobileButton)
            throw 'Mobile button not found...';
        
        this.mobileButton.addEventListener('click', this.toggleMenu);
    }



    toggleMenu = () => {
        this.navbar.classList.toggle('open');
    };

    
    
    static getSingleton() {
        if (!singleton)
            Navbar._initSingleton();

        return singleton;
    }

    static _logError(message) {
        console.log(`Navbar: ${message}`);
    }

    static _initSingleton() {
        const navbarElement = document.querySelector(`.${htmlClassName}`);
        if (!navbarElement)
            return;
        
        try {
            singleton = new Navbar(navbarElement);
        }
        catch (err) {
            Navbar._logError(err);
        }
    }
}



document.addEventListener('DOMContentLoaded', () => Navbar.getSingleton());