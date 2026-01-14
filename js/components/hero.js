/**
 * Hero Component - TaHa Travel Agency
 */

const HeroComponent = {
    slides: [
        {
            image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920',
            title: 'Discover',
            highlight: 'Vietnam',
            description: 'Experience the breathtaking beauty of Ha Long Bay, ancient temples, and vibrant culture.',
            badge: 'Most Popular Destination'
        },
        {
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920',
            title: 'Explore',
            highlight: 'Thailand',
            description: 'From pristine beaches to ancient temples, discover the Land of Smiles.',
            badge: 'Best Beach Destinations'
        },
        {
            image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920',
            title: 'Adventure in',
            highlight: 'Cambodia',
            description: 'Uncover the mysteries of Angkor Wat and experience rich Khmer culture.',
            badge: 'UNESCO World Heritage'
        }
    ],

    currentSlide: 0,
    slideInterval: null,

    template() {
        return `
            <section class="hero" id="home">
                <!-- Hero Slider -->
                <div class="hero-slider">
                    ${this.slides.map((slide, index) => `
                        <div class="hero-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <div class="hero-slide-bg" style="background-image: url('${slide.image}')"></div>
                            <div class="hero-overlay"></div>
                        </div>
                    `).join('')}
                </div>

                <!-- Hero Content -->
                <div class="hero-content">
                    <div class="hero-badge" data-aos="fade-down">
                        <i class="fas fa-star"></i>
                        <span id="hero-badge-text">${this.slides[0].badge}</span>
                    </div>
                    <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
                        <span id="hero-title-main">${this.slides[0].title}</span>
                        <span id="hero-title-highlight">${this.slides[0].highlight}</span>
                    </h1>
                    <p class="hero-description" data-aos="fade-up" data-aos-delay="400" id="hero-description">
                        ${this.slides[0].description}
                    </p>
                    <div class="hero-buttons" data-aos="fade-up" data-aos-delay="600">
                        <a href="#tours" class="hero-btn hero-btn-primary">
                            <i class="fas fa-compass"></i>
                            Explore Tours
                        </a>
                        <a href="#contact" class="hero-btn hero-btn-outline">
                            <i class="fas fa-play-circle"></i>
                            Watch Video
                        </a>
                    </div>
                </div>

                <!-- Hero Stats -->
                <div class="hero-stats">
                    <div class="container">
                        <div class="hero-stat" data-aos="fade-up" data-aos-delay="800">
                            <div class="hero-stat-number">
                                <span class="counter" data-target="500">0</span>+
                            </div>
                            <div class="hero-stat-label">Tours Completed</div>
                        </div>
                        <div class="hero-stat" data-aos="fade-up" data-aos-delay="900">
                            <div class="hero-stat-number">
                                <span class="counter" data-target="10000">0</span>+
                            </div>
                            <div class="hero-stat-label">Happy Travelers</div>
                        </div>
                        <div class="hero-stat" data-aos="fade-up" data-aos-delay="1000">
                            <div class="hero-stat-number">
                                <span class="counter" data-target="50">0</span>+
                            </div>
                            <div class="hero-stat-label">Destinations</div>
                        </div>
                        <div class="hero-stat" data-aos="fade-up" data-aos-delay="1100">
                            <div class="hero-stat-number">
                                <span class="counter" data-target="10">0</span>+
                            </div>
                            <div class="hero-stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>

                <!-- Slider Navigation -->
                <div class="hero-slider-nav">
                    ${this.slides.map((_, index) => `
                        <div class="hero-slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
                    `).join('')}
                </div>

                <!-- Slider Arrows -->
                <button class="hero-arrow hero-arrow-prev" aria-label="Previous slide">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="hero-arrow hero-arrow-next" aria-label="Next slide">
                    <i class="fas fa-chevron-right"></i>
                </button>

                <!-- Scroll Indicator -->
                <div class="hero-scroll">
                    <span>Scroll</span>
                </div>

                <!-- Decorative Elements -->
                <div class="hero-decoration hero-decoration-1"></div>
                <div class="hero-decoration hero-decoration-2"></div>
            </section>
        `;
    },

    init() {
        document.getElementById('hero-component').innerHTML = this.template();
        this.initSlider();
        this.initCounter();
    },

    initSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-slider-dot');
        const prevBtn = document.querySelector('.hero-arrow-prev');
        const nextBtn = document.querySelector('.hero-arrow-next');

        // Auto slide
        this.slideInterval = setInterval(() => this.nextSlide(), 6000);

        // Dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                this.goToSlide(index);
                this.resetInterval();
            });
        });

        // Arrow navigation
        prevBtn.addEventListener('click', () => {
            this.prevSlide();
            this.resetInterval();
        });

        nextBtn.addEventListener('click', () => {
            this.nextSlide();
            this.resetInterval();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
                this.resetInterval();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.resetInterval();
            }
        });
    },

    goToSlide(index) {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-slider-dot');
        const slide = this.slides[index];

        // Update slides
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');

        // Update dots
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');

        // Update content with animation
        const badge = document.getElementById('hero-badge-text');
        const titleMain = document.getElementById('hero-title-main');
        const titleHighlight = document.getElementById('hero-title-highlight');
        const description = document.getElementById('hero-description');

        // Fade out
        [badge, titleMain, titleHighlight, description].forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
        });

        // Update content and fade in
        setTimeout(() => {
            badge.textContent = slide.badge;
            titleMain.textContent = slide.title;
            titleHighlight.textContent = slide.highlight;
            description.textContent = slide.description;

            [badge, titleMain, titleHighlight, description].forEach((el, i) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, i * 100);
            });
        }, 300);

        this.currentSlide = index;
    },

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    },

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    },

    resetInterval() {
        clearInterval(this.slideInterval);
        this.slideInterval = setInterval(() => this.nextSlide(), 6000);
    },

    initCounter() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        const animateCounter = (counter) => {
            const target = parseInt(counter.dataset.target);
            const increment = target / speed;
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        };

        // Use Intersection Observer for counter animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    HeroComponent.init();
});
