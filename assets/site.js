var Site = {
    
    getMenuButton: function() {
        return document.getElementById("menu-button");
    },
    
    getMenu: function() {
        return document.getElementById("navigation");
    },
    
    initialize: function() {
        let menuButton = Site.getMenuButton();
        if (menuButton) {
            menuButton.addEventListener("click", Site.toggleMenu);
        }
    },
    
    toggleMenu: function() {
        Site.getMenu().classList.toggle("hidden");
    },
    
};

window.addEventListener("DOMContentLoaded", Site.initialize);
