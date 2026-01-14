/**
 * Tours Component - TaHa Travel Agency
 */

const ToursComponent = {
    tours: [
        {
            id: 1,
            title: 'Ha Long Bay Luxury Cruise - 3 Days',
            location: 'Northern Vietnam',
            image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
            duration: '3 Days 2 Nights',
            price: 450,
            originalPrice: 550,
            rating: 4.9,
            reviews: 128,
            badge: 'featured',
            category: 'popular'
        },
        {
            id: 2,
            title: 'Angkor Wat Sunrise Tour - Cambodia',
            location: 'Siem Reap, Cambodia',
            image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
            duration: '4 Days 3 Nights',
            price: 380,
            originalPrice: null,
            rating: 4.8,
            reviews: 95,
            badge: 'new',
            category: 'popular'
        },
        {
            id: 3,
            title: 'Phuket Island Hopping Adventure',
            location: 'Phuket, Thailand',
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
            duration: '5 Days 4 Nights',
            price: 520,
            originalPrice: 650,
            rating: 4.7,
            reviews: 156,
            badge: 'sale',
            category: 'beach'
        },
        {
            id: 4,
            title: 'Bali Honeymoon Package',
            location: 'Bali, Indonesia',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
            duration: '6 Days 5 Nights',
            price: 890,
            originalPrice: null,
            rating: 5.0,
            reviews: 89,
            badge: 'featured',
            category: 'honeymoon'
        },
        {
            id: 5,
            title: 'Sapa Trekking & Homestay',
            location: 'Northern Vietnam',
            image: 'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=800',
            duration: '3 Days 2 Nights',
            price: 280,
            originalPrice: 320,
            rating: 4.6,
            reviews: 74,
            badge: null,
            category: 'adventure'
        },
        {
            id: 6,
            title: 'Luang Prabang Cultural Experience',
            location: 'Luang Prabang, Laos',
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
            duration: '4 Days 3 Nights',
            price: 350,
            originalPrice: null,
            rating: 4.8,
            reviews: 62,
            badge: 'new',
            category: 'popular'
        }
    ],

    tabs: [
        { id: 'all', label: 'All Tours' },
        { id: 'popular', label: 'Popular' },
        { id: 'beach', label: 'Beach' },
        { id: 'adventure', label: 'Adventure' },
        { id: 'honeymoon', label: 'Honeymoon' }
    ],

    currentTab: 'all',

    template() {
        return `
            <section class="tours section" id="tours">
                <div class="container">
                    <!-- Tours Header -->
                    <div class="tours-header">
                        <div class="tours-header-content" data-aos="fade-right">
                            <span class="section-subtitle">Our Tours</span>
                            <h2 class="section-title">Featured Tour Packages</h2>
                            <p class="section-description">
                                Explore our carefully curated tour packages designed to give you 
                                the best travel experiences.
                            </p>
                        </div>
                        
                        <!-- Tours Tabs -->
                        <div class="tours-tabs" data-aos="fade-left">
                            ${this.tabs.map(tab => `
                                <button class="tours-tab ${tab.id === 'all' ? 'active' : ''}" 
                                        data-tab="${tab.id}">
                                    ${tab.label}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Tours Grid -->
                    <div class="tours-grid" id="tours-grid">
                        ${this.renderTours(this.tours)}
                    </div>

                    <!-- Tours CTA -->
                    <div class="tours-cta" data-aos="fade-up">
                        <a href="#" class="btn btn-primary btn-lg">
                            View All Tours
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>

                    <!-- Featured Tour -->
                    <div class="tour-featured" data-aos="fade-up">
                        <div class="tour-featured-image">
                            <img src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200" 
                                 alt="Featured Tour" loading="lazy">
                        </div>
                        <div class="tour-featured-content">
                            <span class="tour-featured-badge">
                                <i class="fas fa-fire"></i>
                                Best Seller
                            </span>
                            <h3 class="tour-featured-title">Vietnam & Cambodia Explorer</h3>
                            <p class="tour-featured-description">
                                Experience the best of Vietnam and Cambodia in this comprehensive 
                                14-day adventure. From the bustling streets of Hanoi to the ancient 
                                temples of Angkor Wat, this tour covers it all.
                            </p>
                            <div class="tour-featured-details">
                                <div class="tour-featured-detail">
                                    <i class="fas fa-clock"></i>
                                    <div class="tour-featured-detail-text">
                                        <span class="tour-featured-detail-label">Duration</span>
                                        <span class="tour-featured-detail-value">14 Days 13 Nights</span>
                                    </div>
                                </div>
                                <div class="tour-featured-detail">
                                    <i class="fas fa-users"></i>
                                    <div class="tour-featured-detail-text">
                                        <span class="tour-featured-detail-label">Group Size</span>
                                        <span class="tour-featured-detail-value">Max 12 People</span>
                                    </div>
                                </div>
                                <div class="tour-featured-detail">
                                    <i class="fas fa-utensils"></i>
                                    <div class="tour-featured-detail-text">
                                        <span class="tour-featured-detail-label">Meals</span>
                                        <span class="tour-featured-detail-value">All Included</span>
                                    </div>
                                </div>
                                <div class="tour-featured-detail">
                                    <i class="fas fa-language"></i>
                                    <div class="tour-featured-detail-text">
                                        <span class="tour-featured-detail-label">Language</span>
                                        <span class="tour-featured-detail-value">English Guide</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tour-featured-price">
                                $1,299 <span>/ person</span>
                            </div>
                            <a href="#contact" class="btn btn-primary btn-lg">
                                Book This Tour
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    renderTours(tours) {
        return tours.map((tour, index) => `
            <div class="tour-card" data-aos="fade-up" data-aos-delay="${index * 100}" data-category="${tour.category}">
                <div class="tour-card-image">
                    <img src="${tour.image}" alt="${tour.title}" loading="lazy">
                    <div class="tour-card-badges">
                        ${tour.badge ? `
                            <span class="tour-badge tour-badge-${tour.badge}">
                                ${tour.badge === 'featured' ? 'Featured' : tour.badge === 'new' ? 'New' : 'Sale'}
                            </span>
                        ` : ''}
                    </div>
                    <button class="tour-card-wishlist" aria-label="Add to wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                    <div class="tour-card-duration">
                        <i class="far fa-clock"></i>
                        ${tour.duration}
                    </div>
                </div>
                <div class="tour-card-content">
                    <span class="tour-card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${tour.location}
                    </span>
                    <h4 class="tour-card-title">${tour.title}</h4>
                    <div class="tour-card-rating">
                        <div class="tour-card-stars">
                            ${this.renderStars(tour.rating)}
                        </div>
                        <span class="tour-card-reviews">(${tour.reviews} reviews)</span>
                    </div>
                    <div class="tour-card-divider"></div>
                    <div class="tour-card-footer">
                        <div class="tour-card-price">
                            <span class="tour-card-price-label">From</span>
                            <span class="tour-card-price-value">
                                $${tour.price}
                                ${tour.originalPrice ? `<span>$${tour.originalPrice}</span>` : ''}
                            </span>
                        </div>
                        <a href="#contact" class="tour-card-btn">Book Now</a>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    },

    init() {
        document.getElementById('tours-component').innerHTML = this.template();
        this.initTabs();
        this.initWishlist();
    },

    initTabs() {
        const tabs = document.querySelectorAll('.tours-tab');
        const grid = document.getElementById('tours-grid');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Filter tours
                const category = tab.dataset.tab;
                this.currentTab = category;
                
                let filteredTours = this.tours;
                if (category !== 'all') {
                    filteredTours = this.tours.filter(tour => tour.category === category);
                }

                // Animate out and in
                grid.style.opacity = '0';
                setTimeout(() => {
                    grid.innerHTML = this.renderTours(filteredTours);
                    grid.style.opacity = '1';
                    this.initWishlist();
                    
                    // Reinitialize AOS for new elements
                    if (typeof AOS !== 'undefined') {
                        AOS.refresh();
                    }
                }, 300);
            });
        });
    },

    initWishlist() {
        const wishlistBtns = document.querySelectorAll('.tour-card-wishlist');
        
        wishlistBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('active');
                const icon = this.querySelector('i');
                if (this.classList.contains('active')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            });
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ToursComponent.init();
});
