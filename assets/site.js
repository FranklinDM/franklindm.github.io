var Site = {
    
    getMenuButton: function() {
        return document.getElementById("menu-button");
    },
    
    getMenu: function() {
        return document.getElementById("navigation");
    },
    
    getTimer: function() {
        return document.getElementById("timer");
    },
    
    initialize: function() {
        let menuButton = Site.getMenuButton();
        if (menuButton) {
            menuButton.addEventListener("click", Site.toggleMenu);
            Site.getMenu().setAttribute("hide-menu", "true");
        }
        if (Site.getTimer()) {
            Site.updateTime();
            window.setInterval(Site.updateTime, 1000);
        }
    },
    
    toggleMenu: function() {
        if (Site.getMenu().getAttribute("state") == "hidden") {
            Site.getMenu().setAttribute("state", "active");
        } else {
            Site.getMenu().setAttribute("state", "hidden");
        }
    },
    
    updateTime: function() {
        let date = new Date(Date.now());
        let options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
        };
        Site.getTimer().innerText = date.toLocaleString('en-US', options);
    },
};

window.addEventListener("DOMContentLoaded", Site.initialize);
