/**
 * Testimonials Component - TaHa Travel Agency
 */

const TestimonialsComponent = {
    testimonials: [
        {
            id: 1,
            name: 'Sarah Johnson',
            location: 'United States',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
            text: 'Our trip to Vietnam was absolutely incredible! TaHa Travel arranged everything perfectly - from the luxurious Ha Long Bay cruise to the street food tours in Hanoi. The local guides were knowledgeable and friendly. Highly recommend!',
            trip: 'Vietnam Explorer - 10 Days',
            rating: 5
        },
        {
            id: 2,
            name: 'Michael Chen',
            location: 'Australia',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
            text: 'We booked a family tour to Thailand and Cambodia. The attention to detail was amazing - kid-friendly activities, comfortable transportation, and excellent hotels. Our children still talk about the elephant sanctuary visit!',
            trip: 'Thailand & Cambodia Family Tour',
            rating: 5
        },
        {
            id: 3,
            name: 'Emma Wilson',
            location: 'United Kingdom',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
            text: 'My honeymoon in Bali was a dream come true! TaHa Travel created the most romantic itinerary with private villa stays, sunset dinners, and couple spa treatments. Every moment was magical.',
            trip: 'Bali Honeymoon Package',
            rating: 5
        },
        {
            id: 4,
            name: 'David Martinez',
            location: 'Spain',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
            text: 'The trekking tour in Sapa was challenging but rewarding. Our guide was experienced and ensured our safety throughout. The homestay experience with local families was authentic and heartwarming.',
            trip: 'Sapa Adventure Trek',
            rating: 4
        },
        {
            id: 5,
            name: 'Lisa Anderson',
            location: 'Canada',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
            text: 'I traveled solo through Southeast Asia with TaHa Travel. They made sure I felt safe and connected me with other travelers. The 24/7 support was reassuring. Best decision I ever made!',
            trip: 'Southeast Asia Solo Adventure',
            rating: 5
        }
    ],

    currentSlide: 0,

    template() {
        return `
            <section class="testimonials section" id="testimonials">
                <div class="container">
                    <!-- Section Header -->
                    <div class="section-header" data-aos="fade-up">
                        <span class="section-subtitle">Testimonials</span>
                        <h2 class="section-title">What Our Travelers Say</h2>
                        <p class="section-description">
                            Real stories from real travelers who have experienced 
                            unforgettable journeys with us.
                        </p>
                    </div>

                    <!-- Testimonials Slider -->
                    <div class="testimonials-slider" data-aos="fade-up">
                        <div class="testimonial-slide">
                            <div class="testimonial-card" id="testimonial-card">
                                <div class="testimonial-quote-icon">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <p class="testimonial-text" id="testimonial-text">
                                    ${this.testimonials[0].text}
                                </p>
                                <div class="testimonial-author">
                                    <div class="testimonial-author-image">
                                        <img src="${this.testimonials[0].image}" 
                                             alt="${this.testimonials[0].name}" 
                                             id="testimonial-image">
                                    </div>
                                    <div class="testimonial-author-info">
                                        <h4 class="testimonial-author-name" id="testimonial-name">
                                            ${this.testimonials[0].name}
                                        </h4>
                                        <span class="testimonial-author-trip" id="testimonial-trip">
                                            ${this.testimonials[0].trip}
                                        </span>
                                        <div class="testimonial-rating" id="testimonial-rating">
                                            ${this.renderStars(this.testimonials[0].rating)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation -->
                    <div class="testimonials-nav">
                        <button class="testimonials-arrow testimonials-arrow-prev" aria-label="Previous">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="testimonials-dots">
                            ${this.testimonials.map((_, index) => `
                                <div class="testimonials-dot ${index === 0 ? 'active' : ''}" 
                                     data-index="${index}"></div>
                            `).join('')}
                        </div>
                        <button class="testimonials-arrow testimonials-arrow-next" aria-label="Next">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <!-- Happy Travelers -->
                    <div class="testimonials-avatars" data-aos="fade-up">
                        ${this.testimonials.slice(0, 4).map(t => `
                            <div class="testimonials-avatar">
                                <img src="${t.image}" alt="${t.name}">
                            </div>
                        `).join('')}
                        <div class="testimonials-count">+${this.testimonials.length - 4}</div>
                        <div class="testimonials-text">
                            <strong>10,000+ Happy Travelers</strong>
                            Trust us for their journeys
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    renderStars(rating) {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        for (let i = rating; i < 5; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        return stars;
    },

    init() {
        document.getElementById('testimonials-component').innerHTML = this.template();
        this.initSlider();
    },

    initSlider() {
        const prevBtn = document.querySelector('.testimonials-arrow-prev');
        const nextBtn = document.querySelector('.testimonials-arrow-next');
        const dots = document.querySelectorAll('.testimonials-dot');

        prevBtn.addEventListener('click', () => this.prevSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                this.goToSlide(index);
            });
        });

        // Auto slide
        setInterval(() => this.nextSlide(), 7000);
    },

    goToSlide(index) {
        const testimonial = this.testimonials[index];
        const card = document.getElementById('testimonial-card');
        const dots = document.querySelectorAll('.testimonials-dot');

        // Animate out
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            // Update content
            document.getElementById('testimonial-text').textContent = testimonial.text;
            document.getElementById('testimonial-image').src = testimonial.image;
            document.getElementById('testimonial-image').alt = testimonial.name;
            document.getElementById('testimonial-name').textContent = testimonial.name;
            document.getElementById('testimonial-trip').textContent = testimonial.trip;
            document.getElementById('testimonial-rating').innerHTML = this.renderStars(testimonial.rating);

            // Animate in
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300);

        // Update dots
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');

        this.currentSlide = index;
    },

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.testimonials.length;
        this.goToSlide(nextIndex);
    },

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
        this.goToSlide(prevIndex);
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    TestimonialsComponent.init();
});
