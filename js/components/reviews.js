/**
 * Reviews Component - TaHa Travel Agency
 * Customer Reviews from TripAdvisor
 */

const ReviewsComponent = {
    reviews: [
        {
            author: "Tatenda_05",
            avatar: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
            contributions: "1 contribution",
            rating: 5,
            date: "December 25, 2025",
            visited: "December 2025",
            tripType: "solo",
            text: "After dealing with so many overpriced and confusing tour agents in Da Nang and Hanoi, I stumbled upon Taha Tour Services on Facebook—and it was a game-changer! Ms. Heyli was incredibly helpful, providing clear, straightforward info and quotes for Da Nang, Hanoi, Saigon, and Sapa. To my delight, their prices were significantly lower than everyone else's! I booked a 5-day/4-night package in Da Nang, complete with meals and an English-speaking guide. From the moment they picked me up at the airport, everything was flawless. They checked me into a spotless, outstanding hotel with delicious food and prime location—easy walk to the beach and attractions. The itinerary was pure magic: Ba Na Hills: Loved the French Village, Golden Bridge, rose garden, and even a free token for French beer! Marble Mountains, thrilling basket boat ride in the coconut forest. Hoi An: I fell completely in love with the ancient town, lantern boats, and enchanting atmosphere. Hue: Rich in history and culture, with an absolutely superb lunch. Highlight: The spectacular dragon show on the bridge during our boat cruise! Everything was perfectly organized, and the team at Taha Tour Services treated me like a king. Huge thanks to Ms. Heyli for making it all so seamless and memorable. If you're planning Vietnam, go with Taha—you won't regret it! I'll definitely be back for more tours with them. Highly recommend!"
        },
        {
            author: "Ramneek D",
            avatar: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=100&h=100&fit=crop",
            contributions: "2 contributions",
            rating: 5,
            date: "November 28, 2025",
            visited: "November 2025",
            tripType: "friends",
            text: "We would like to extend our heartfelt thanks to Lily, who stayed in constant contact with us throughout the trip. She was always available to answer our questions, provided timely updates, and carefully guided us at every step—from booking tickets and arranging transfers to selecting hotels and organizing airport pickups. Her professionalism and attention to detail made the entire journey smooth and stress-free."
        },
        {
            author: "Ashley Y",
            avatar: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=100&h=100&fit=crop",
            contributions: "1 contribution",
            rating: 5,
            date: "December 11, 2025",
            visited: "December 2025",
            tripType: "friends",
            text: "My experience with TAHA Travel Agency was truly exceptional. Everything was carefully arranged, and the staff went above and beyond to ensure my trip was smooth and enjoyable. I felt completely supported from start to finish."
        },
        {
            author: "Gracelyn F",
            avatar: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop",
            contributions: "1 contribution",
            rating: 5,
            date: "December 20, 2025",
            visited: "December 2025",
            tripType: "friends",
            text: "TAHA Travel Agency handled every detail of my trip perfectly. From the initial consultation to the final day, everything was smooth and well-organized. I didn't have to worry about anything and could fully enjoy my vacation."
        }
    ],

    getTripTypeIcon(tripType) {
        const icons = {
            'solo': 'fa-user',
            'friends': 'fa-user-friends',
            'family': 'fa-users',
            'couple': 'fa-heart'
        };
        return icons[tripType] || 'fa-user';
    },

    getTripTypeText(tripType) {
        const texts = {
            'solo': 'Solo Travel',
            'friends': 'With Friends',
            'family': 'Family Trip',
            'couple': 'Couple'
        };
        return texts[tripType] || 'Travel';
    },

    getInitials(name) {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    },

    currentSlide: 0,
    slidesPerView: 3,

    template() {
        return `
            <section class="reviews" id="reviews">
                <div class="reviews-container">
                    <!-- Header -->
                    <div class="reviews-header" data-aos="fade-up">
                        <h2 class="reviews-title">What Our Travelers Say</h2>
                        <p class="reviews-subtitle">Real reviews from real travelers on TripAdvisor</p>
                    </div>

                    <!-- Reviews Slider -->
                    <div class="reviews-slider-wrapper" data-aos="fade-up">
                        <button class="reviews-nav reviews-nav-prev" onclick="ReviewsComponent.prevSlide()">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        
                        <div class="reviews-slider">
                            <div class="reviews-track">
                                ${this.reviews.map((review, index) => `
                                    <div class="review-card">
                                        <!-- Review Header -->
                                        <div class="review-header">
                                            <img src="${review.avatar}" alt="${review.author}" class="review-avatar-img">
                                            <div class="review-author-info">
                                                <div class="review-author">${review.author}</div>
                                                <div class="review-meta">${review.contributions}</div>
                                            </div>
                                        </div>

                                        <!-- Rating -->
                                        <div class="review-rating">
                                            ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
                                        </div>

                                        <!-- Review Text -->
                                        <div class="review-text ${review.text.length > 300 ? 'collapsed' : ''}" id="review-text-${index}">
                                            ${review.text}
                                        </div>
                                        ${review.text.length > 300 ? `
                                            <button class="review-read-more" onclick="ReviewsComponent.toggleReview(${index})">
                                                Read more
                                            </button>
                                        ` : ''}

                                        <!-- Review Footer -->
                                        <div class="review-footer">
                                            <div class="review-trip-type">
                                                <i class="fas ${this.getTripTypeIcon(review.tripType)}"></i>
                                                <span>${this.getTripTypeText(review.tripType)}</span>
                                            </div>
                                            <div class="review-date">Visited ${review.visited}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <button class="reviews-nav reviews-nav-next" onclick="ReviewsComponent.nextSlide()">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <!-- Slider Dots -->
                    <div class="reviews-dots" data-aos="fade-up">
                        ${this.reviews.map((_, index) => `
                            <button class="reviews-dot ${index === 0 ? 'active' : ''}" onclick="ReviewsComponent.goToSlide(${index})"></button>
                        `).join('')}
                    </div>

                    <!-- TripAdvisor Link -->
                    <div style="text-align: center; margin-top: var(--space-8);" data-aos="fade-up">
                        <a href="https://www.tripadvisor.com/Attraction_Review-g293924-d34033692-Reviews-Taha_Travel_Agency_Vietnam_Adventure-Hanoi.html" 
                           target="_blank" 
                           class="hero-btn hero-btn-outline"
                           style="display: inline-flex; align-items: center; gap: var(--space-2);">
                            <i class="fab fa-tripadvisor"></i>
                            View All Reviews on TripAdvisor
                        </a>
                    </div>
                </div>
            </section>
        `;
    },

    toggleReview(index) {
        const reviewText = document.getElementById(`review-text-${index}`);
        const button = reviewText.nextElementSibling;

        if (reviewText.classList.contains('collapsed')) {
            reviewText.classList.remove('collapsed');
            button.textContent = 'Read less';
        } else {
            reviewText.classList.add('collapsed');
            button.textContent = 'Read more';
        }
    },

    updateSlidesPerView() {
        if (window.innerWidth < 768) {
            this.slidesPerView = 1;
        } else if (window.innerWidth < 1024) {
            this.slidesPerView = 2;
        } else {
            this.slidesPerView = 3;
        }
    },

    getMaxSlide() {
        return Math.max(0, this.reviews.length - this.slidesPerView);
    },

    updateSlider() {
        const track = document.querySelector('.reviews-track');
        const cards = document.querySelectorAll('.review-card');
        const dots = document.querySelectorAll('.reviews-dot');
        
        if (!track || cards.length === 0) return;

        const cardWidth = cards[0].offsetWidth;
        const gap = 24; // var(--space-6)
        const offset = this.currentSlide * (cardWidth + gap);
        
        track.style.transform = `translateX(-${offset}px)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // Update nav buttons visibility
        const prevBtn = document.querySelector('.reviews-nav-prev');
        const nextBtn = document.querySelector('.reviews-nav-next');
        
        if (prevBtn) prevBtn.style.opacity = this.currentSlide === 0 ? '0.5' : '1';
        if (nextBtn) nextBtn.style.opacity = this.currentSlide >= this.getMaxSlide() ? '0.5' : '1';
    },

    nextSlide() {
        if (this.currentSlide < this.getMaxSlide()) {
            this.currentSlide++;
            this.updateSlider();
        }
    },

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlider();
        }
    },

    goToSlide(index) {
        this.currentSlide = Math.min(index, this.getMaxSlide());
        this.updateSlider();
    },

    init() {
        document.getElementById('reviews-component').innerHTML = this.template();
        
        // Initialize slider
        this.updateSlidesPerView();
        this.updateSlider();

        // Update on resize
        window.addEventListener('resize', () => {
            this.updateSlidesPerView();
            this.currentSlide = Math.min(this.currentSlide, this.getMaxSlide());
            this.updateSlider();
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ReviewsComponent.init();
});
