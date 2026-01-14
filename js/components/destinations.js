/**
 * Destinations Component - TaHa Travel Agency
 */

const DestinationsComponent = {
    destinations: [
        {
            name: 'Vietnam',
            location: 'Southeast Asia',
            image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
            tours: '120+ Tours',
            featured: true
        },
        {
            name: 'Thailand',
            location: 'Southeast Asia',
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
            tours: '85+ Tours',
            featured: true
        },
        {
            name: 'Cambodia',
            location: 'Southeast Asia',
            image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
            tours: '45+ Tours',
            featured: true
        },
        {
            name: 'Laos',
            location: 'Southeast Asia',
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
            tours: '30+ Tours',
            featured: false
        },
        {
            name: 'Indonesia',
            location: 'Southeast Asia',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
            tours: '65+ Tours',
            featured: false
        },
        {
            name: 'ASEAN',
            location: 'Multi-Country',
            image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800',
            tours: '25+ Tours',
            featured: false
        }
    ],

    template() {
        return `
            <section class="destinations section" id="destinations">
                <div class="container">
                    <!-- Section Header -->
                    <div class="section-header" data-aos="fade-up">
                        <span class="section-subtitle">Popular Destinations</span>
                        <h2 class="section-title">Explore Our Top Destinations</h2>
                        <p class="section-description">
                            Discover the most beautiful places in Southeast Asia. From pristine beaches 
                            to ancient temples, we have the perfect destination for you.
                        </p>
                    </div>

                    <!-- Destinations Grid -->
                    <div class="destinations-grid">
                        ${this.destinations.map((dest, index) => `
                            <div class="destination-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                ${dest.featured ? '<span class="destination-card-badge">Featured</span>' : ''}
                                <div class="destination-card-image">
                                    <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                                </div>
                                <div class="destination-card-overlay"></div>
                                <div class="destination-card-content">
                                    <span class="destination-card-location">
                                        <i class="fas fa-map-marker-alt"></i>
                                        ${dest.location}
                                    </span>
                                    <h3 class="destination-card-title">${dest.name}</h3>
                                    <span class="destination-card-tours">${dest.tours}</span>
                                </div>
                                <div class="destination-card-arrow">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- CTA Button -->
                    <div class="destinations-cta" data-aos="fade-up">
                        <a href="#" class="btn btn-outline">
                            View All Destinations
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Decorative Pattern -->
                <div class="destinations-pattern"></div>
            </section>
        `;
    },

    init() {
        document.getElementById('destinations-component').innerHTML = this.template();
        this.initHoverEffects();
    },

    initHoverEffects() {
        const cards = document.querySelectorAll('.destination-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.destination-card-image img').style.transform = 'scale(1.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.destination-card-image img').style.transform = 'scale(1)';
            });
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    DestinationsComponent.init();
});
