/**
 * Header Component - TaHa Travel Agency
 */

const HeaderComponent = {
    template: `
        <header class="header" id="main-header">
            <!-- Top Bar -->
            <div class="top-bar">
                <div class="container">
                    <div class="top-bar-content">
                        <div class="top-bar-left">
                            <div class="social-links">
                                <a href="https://www.facebook.com/TahaTravelAgency" target="_blank" aria-label="Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/tahatravel.2024/" target="_blank" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.tiktok.com/@vietnambesttour?_r=1&_t=ZS-939PaC3zpCC" target="_blank" aria-label="TikTok">
                                    <i class="fab fa-tiktok"></i>
                                </a>
                                <a href="https://www.youtube.com/@TaHaTravel-2024" target="_blank" aria-label="YouTube">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div class="top-bar-right">
                            <span class="whatsapp-info">Taha Travel Agency - Whatsapp number : +84 84 950 8358</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Header -->
            <div class="header-main">
                <div class="container">
                    <div class="header-content">
                        <!-- Logo -->
                        <a href="index.html" class="logo">
                            <div class="logo-icon">
                                <img src="https://tahatravelagency.com/wp-content/uploads/2025/06/Taha-1-800x800.png" alt="TaHa Travel Logo" class="logo-img">
                            </div>
                            <div class="logo-text">
                                <span class="logo-name">TaHa Travel</span>
                            </div>
                        </a>

                        <!-- Navigation -->
                        <nav class="nav" id="main-nav">
                            <div class="nav-item">
                                <a href="#" class="nav-link active">Home</a>
                            </div>
                            
                            <div class="nav-item">
                                <a href="#destinations" class="nav-link">
                                    Destinations
                                    <i class="fas fa-chevron-down"></i>
                                </a>
                                <div class="mega-menu">
                                    <div class="mega-menu-grid">
                                        <div class="mega-menu-column">
                                            <h4>Southeast Asia</h4>
                                            <a href="#" class="mega-menu-item">
                                                <i class="fas fa-map-marker-alt"></i>
                                                Vietnam
                                            </a>
                                            <a href="#" class="mega-menu-item">
                                                <i class="fas fa-map-marker-alt"></i>
                                                Thailand
                                            </a>
                                            <a href="#" class="mega-menu-item">
                                                <i class="fas fa-map-marker-alt"></i>
                                                Cambodia
                                            </a>
                                            <a href="#" class="mega-menu-item">
                                                <i class="fas fa-map-marker-alt"></i>
                                                Laos
                                            </a>
                                            <a href="#" class="mega-menu-item">
                                                <i class="fas fa-map-marker-alt"></i>
                                                Indonesia
                                            </a>
                                        </div>
                                        <div class="mega-menu-column">
                                            <h4>Vietnam Regions</h4>
                                            <a href="#" class="mega-menu-item">
                                                <i class="fas fa-mountain"></i>
                                                Northern Vietnam
                                            </a>
                                            <a href="#" class="mega-menu-item">
                                                <i class="fas fa-landmark"></i>
                                                Central Vietnam
                                            </a>
                                            <a href="#" class="mega-menu-item">
                                                <i class="fas fa-umbrella-beach"></i>
                                                Southern Vietnam
                                            </a>
                                        </div>
                                        <div class="mega-menu-column">
                                            <h4>Featured</h4>
                                            <div class="mega-menu-featured">
                                                <a href="#" class="featured-card">
                                                    <img src="https://images.unsplash.com/photo-1528127269322-539801943592?w=300" alt="Ha Long Bay">
                                                    <div class="featured-card-overlay">
                                                        <span class="featured-card-title">Ha Long Bay</span>
                                                    </div>
                                                </a>
                                                <a href="#" class="featured-card">
                                                    <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=300" alt="Angkor Wat">
                                                    <div class="featured-card-overlay">
                                                        <span class="featured-card-title">Angkor Wat</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="nav-item">
                                <a href="#tours" class="nav-link">
                                    Holiday Styles
                                    <i class="fas fa-chevron-down"></i>
                                </a>
                                <div class="dropdown">
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-users"></i>
                                        Family Tours
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-heart"></i>
                                        Honeymoon
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-umbrella-beach"></i>
                                        Beach Vacation
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-hiking"></i>
                                        Adventure Tour
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-spa"></i>
                                        Wellness Tours
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-calendar-day"></i>
                                        Daily Tour
                                    </a>
                                </div>
                            </div>

                            <div class="nav-item">
                                <a href="#about" class="nav-link">About Us</a>
                            </div>

                            <div class="nav-item">
                                <a href="#consultant" class="nav-link">Contact</a>
                            </div>
                        </nav>

                        <!-- Header Actions -->
                        <div class="header-actions">
                            <button class="search-btn" id="search-toggle" aria-label="Search">
                                <i class="fas fa-search"></i>
                            </button>
                            <a href="#contact" class="btn btn-primary btn-sm">Book Now</a>
                            <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Mobile Navigation -->
        <nav class="mobile-nav" id="mobile-nav">
            <div class="mobile-nav-item">
                <a href="#" class="mobile-nav-link">Home</a>
            </div>
            <div class="mobile-nav-item">
                <a href="#destinations" class="mobile-nav-link" data-toggle="dropdown">
                    Destinations
                    <i class="fas fa-chevron-down"></i>
                </a>
                <div class="mobile-dropdown">
                    <a href="#" class="mobile-dropdown-item">Vietnam</a>
                    <a href="#" class="mobile-dropdown-item">Thailand</a>
                    <a href="#" class="mobile-dropdown-item">Cambodia</a>
                    <a href="#" class="mobile-dropdown-item">Laos</a>
                    <a href="#" class="mobile-dropdown-item">Indonesia</a>
                </div>
            </div>
            <div class="mobile-nav-item">
                <a href="#tours" class="mobile-nav-link" data-toggle="dropdown">
                    Holiday Styles
                    <i class="fas fa-chevron-down"></i>
                </a>
                <div class="mobile-dropdown">
                    <a href="#" class="mobile-dropdown-item">Family Tours</a>
                    <a href="#" class="mobile-dropdown-item">Honeymoon</a>
                    <a href="#" class="mobile-dropdown-item">Beach Vacation</a>
                    <a href="#" class="mobile-dropdown-item">Adventure Tour</a>
                    <a href="#" class="mobile-dropdown-item">Wellness Tours</a>
                </div>
            </div>
            <div class="mobile-nav-item">
                <a href="#services" class="mobile-nav-link">About Us</a>
            </div>
            <div class="mobile-nav-item">
                <a href="#contact" class="mobile-nav-link">Contact</a>
            </div>
        </nav>

        <!-- Search Modal -->
        <div class="search-modal" id="search-modal">
            <button class="search-modal-close" id="search-close">
                <i class="fas fa-times"></i>
            </button>
            <div class="search-modal-content">
                <div class="search-input-wrapper">
                    <input type="text" placeholder="Search destinations, tours...">
                    <button type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    `,

    init() {
        // Render component
        document.getElementById('header-component').innerHTML = this.template;
        
        // Initialize functionality
        this.initScrollEffect();
        this.initMobileMenu();
        this.initSearchModal();
        this.initSmoothScroll();
    },

    initScrollEffect() {
        const header = document.getElementById('main-header');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    },

    initMobileMenu() {
        const toggle = document.getElementById('mobile-menu-toggle');
        const mobileNav = document.getElementById('mobile-nav');
        const dropdownToggles = document.querySelectorAll('.mobile-nav-link[data-toggle="dropdown"]');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        dropdownToggles.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdown = link.nextElementSibling;
                dropdown.classList.toggle('active');
                link.querySelector('i').style.transform = 
                    dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
            });
        });

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-nav-link:not([data-toggle])').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    },

    initSearchModal() {
        const searchToggle = document.getElementById('search-toggle');
        const searchModal = document.getElementById('search-modal');
        const searchClose = document.getElementById('search-close');

        searchToggle.addEventListener('click', () => {
            searchModal.classList.add('active');
            document.body.classList.add('no-scroll');
        });

        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });

        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    HeaderComponent.init();
});
