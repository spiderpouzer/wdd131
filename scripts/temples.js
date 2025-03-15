// temples.js - Comprehensive Implementation
(function() {
    // Initialize on DOM Load
    document.addEventListener('DOMContentLoaded', initApp);

    function initApp() {
        // Set Footer Dynamic Content
        setFooterData();
        
        // Initialize Hamburger Menu
        setupMobileMenu();
    }

    // ======================
    // FOOTER FUNCTIONALITY
    // ======================
    function setFooterData() {
        // Set Copyright Year
        const yearElement = document.getElementById('currentyear');
        if(yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }

        // Set Last Modified Date
        const modifiedElement = document.getElementById('lastModified');
        if(modifiedElement) {
            modifiedElement.textContent = formatLastModifiedDate();
        }
    }

    function formatLastModifiedDate() {
        const lastModified = new Date(document.lastModified);
        return lastModified.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).replace(/,/g, '');
    }

    // ======================
    // MOBILE MENU FUNCTIONALITY
    // ======================
    function setupMobileMenu() {
        const nav = document.querySelector('nav ul');
        const hamburgerBtn = createHamburgerButton();

        // Menu State Management
        let isMenuOpen = false;

        // Toggle Menu Function
        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            nav.classList.toggle('show');
            hamburgerBtn.innerHTML = isMenuOpen ? '&times;' : '&#9776;';
            hamburgerBtn.setAttribute('aria-expanded', isMenuOpen);
        }

        // Event Listeners
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        document.addEventListener('click', function(e) {
            if(isMenuOpen && !e.target.closest('nav')) {
                toggleMenu();
            }
        });

        window.addEventListener('resize', function() {
            if(window.innerWidth > 768 && isMenuOpen) {
                toggleMenu();
            }
        });
    }

    function createHamburgerButton() {
        const btn = document.createElement('button');
        btn.innerHTML = '&#9776;';
        btn.classList.add('hamburger');
        btn.setAttribute('aria-label', 'Toggle navigation menu');
        btn.setAttribute('aria-expanded', 'false');
        
        const nav = document.querySelector('nav');
        nav.insertBefore(btn, nav.firstChild);
        
        return btn;
    }

})();