/**
 * Services Component - TaHa Travel Agency
 */

const ServicesComponent = {
    services: [
        {
            icon: 'fas fa-route',
            title: 'Customized Tours',
            description: 'Tailor-made itineraries designed to match your preferences and travel style.'
        },
        {
            icon: 'fas fa-hotel',
            title: 'Hotel Booking',
            description: 'Premium accommodations from luxury resorts to authentic homestays.'
        },
        {
            icon: 'fas fa-plane',
            title: 'Flight Booking',
            description: 'Best deals on domestic and international flights with flexible options.'
        },
        {
            icon: 'fas fa-headset',
            title: '24/7 Support',
            description: 'Round-the-clock assistance throughout your entire journey.'
        }
    ],

    whyChoose: [
        {
            icon: 'fas fa-award',
            title: 'Expert Guides',
            description: 'Professional local guides with deep knowledge of culture and history.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Safe Travel',
            description: 'Your safety is our priority with comprehensive travel insurance.'
        },
        {
            icon: 'fas fa-dollar-sign',
            title: 'Best Price',
            description: 'Competitive pricing with no hidden costs or surprise fees.'
        },
        {
            icon: 'fas fa-heart',
            title: 'Memorable Experience',
            description: 'Creating unforgettable memories that last a lifetime.'
        }
    ],

    stats: [
        { icon: 'fas fa-map-marked-alt', number: '50+', label: 'Destinations' },
        { icon: 'fas fa-route', number: '500+', label: 'Tours' },
        { icon: 'fas fa-smile', number: '10K+', label: 'Happy Clients' },
        { icon: 'fas fa-trophy', number: '15+', label: 'Awards' }
    ],

    template() {
        return `
            <!-- Main Services Section -->
            <section class="services section" id="services">
                <div class="container">
                    <div class="services-wrapper">
                        <!-- Services Content -->
                        <div class="services-content" data-aos="fade-right">
                            <span class="services-badge">
                                <i class="fas fa-star"></i>
                                Our Services
                            </span>
                            <h2 class="services-title">We Provide Best Travel Services</h2>
                            <p class="services-description">
                                With over 10 years of experience in the travel industry, we offer comprehensive 
                                travel solutions tailored to your needs. From planning to execution, we ensure 
                                every detail is perfectly handled.
                            </p>
                            
                            <div class="services-grid">
                                ${this.services.map((service, index) => `
                                    <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                        <div class="service-card-icon">
                                            <i class="${service.icon}"></i>
                                        </div>
                                        <h4 class="service-card-title">${service.title}</h4>
                                        <p class="service-card-text">${service.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Services Visual -->
                        <div class="services-visual" data-aos="fade-left">
                            <div class="services-image-main">
                                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" 
                                     alt="Beautiful landscape" loading="lazy">
                            </div>
                            <div class="services-image-secondary">
                                <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400" 
                                     alt="Travel experience" loading="lazy">
                            </div>
                            <div class="services-experience">
                                <div class="services-experience-number">10+</div>
                                <div class="services-experience-text">Years of Excellence</div>
                            </div>
                        </div>
                    </div>

                    <!-- Stats Row -->
                    <div class="services-stats" data-aos="fade-up">
                        ${this.stats.map(stat => `
                            <div class="services-stat">
                                <i class="${stat.icon} services-stat-icon"></i>
                                <div class="services-stat-number">${stat.number}</div>
                                <div class="services-stat-label">${stat.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="services-decoration"></div>
            </section>

            <!-- Why Choose Us Section -->
            <section class="why-choose section">
                <div class="container">
                    <div class="section-header" data-aos="fade-up">
                        <span class="section-subtitle">Why Choose Us</span>
                        <h2 class="section-title">What Makes Us Different</h2>
                        <p class="section-description">
                            We go above and beyond to create exceptional travel experiences 
                            that exceed your expectations.
                        </p>
                    </div>

                    <div class="why-choose-grid">
                        ${this.whyChoose.map((item, index) => `
                            <div class="why-choose-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="why-choose-icon">
                                    <i class="${item.icon}"></i>
                                </div>
                                <h4 class="why-choose-title">${item.title}</h4>
                                <p class="why-choose-text">${item.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('services-component').innerHTML = this.template();
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ServicesComponent.init();
});
