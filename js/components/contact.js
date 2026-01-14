/**
 * Contact Component - TaHa Travel Agency
 * Beautiful & Modern Design
 */

const ContactComponent = {
    template() {
        return `
            <!-- Contact & About Section -->
            <section class="contact-about-section" id="contact">
                <div class="contact-about-overlay"></div>
                <div class="container">
                    <div class="contact-about-wrapper">
                        <!-- Left Side - Contact Form -->
                        <div class="contact-side" data-aos="fade-right">
                            <span class="section-badge">Contact Us</span>
                            <h2 class="section-title">Get In Touch</h2>
                            <p class="section-desc">Have questions about your next adventure? Our travel experts are here to help you plan the perfect trip.</p>
                            
                            <div class="form-card">
                                <div class="form-header">
                                    <div class="form-icon">
                                        <i class="fas fa-paper-plane"></i>
                                    </div>
                                    <div>
                                        <h3>Send Us a Message</h3>
                                        <p>We'll respond within 24 hours</p>
                                    </div>
                                </div>
                                
                                <form class="contact-form" id="contact-form">
                                    <div class="form-grid">
                                        <div class="form-field">
                                            <i class="fas fa-user"></i>
                                            <input type="text" name="name" placeholder="Full Name *" required>
                                        </div>
                                        <div class="form-field">
                                            <i class="fas fa-envelope"></i>
                                            <input type="email" name="email" placeholder="Email Address *" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-grid">
                                        <div class="form-field">
                                            <i class="fab fa-whatsapp"></i>
                                            <input type="tel" name="phone" placeholder="Phone / WhatsApp">
                                        </div>
                                        <div class="form-field">
                                            <i class="fas fa-list"></i>
                                            <select name="subject" required>
                                                <option value="">Select Subject *</option>
                                                <option value="booking">Tour Booking</option>
                                                <option value="inquiry">General Inquiry</option>
                                                <option value="custom">Custom Tour</option>
                                                <option value="feedback">Feedback</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-field full">
                                        <i class="fas fa-comment-dots"></i>
                                        <textarea name="message" rows="4" placeholder="Your Message *" required></textarea>
                                    </div>
                                    
                                    <button type="submit" class="btn-submit">
                                        <span>Send Message</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <!-- Right Side - About Us -->
                        <div class="about-side" data-aos="fade-left" id="about">
                            <h2 class="about-title">TaHa Travel Agency</h2>
                            <div class="about-text">
                                <p>With a team of experienced and passionate staff, Taha Travel organizes all-inclusive tours, teambuilding activities, conferences, and various other services, ensuring the diverse needs of customers are met.</p>
                                <p>Taha Travel takes pride in being a professional travel company with many years of experience in the tourism industry. Adhering to the motto <strong>"Quality makes the difference,"</strong> Taha Travel strives to deliver unforgettable journeys, combining cultural exploration, natural beauty, and the essence of Vietnam's people.</p>
                                <p>Notably, the company focuses on designing customized travel programs tailored to the individual preferences and specific needs of each customer.</p>
                                <p>With the vision of becoming a pioneering enterprise in creative design training and AI applications in business, Taha Travel continuously learns and adopts advanced training and coaching methods to enhance service quality and provide the best value to its clients.</p>
                            </div>
                            <div class="about-features">
                                <div class="about-feature">
                                    <i class="fas fa-award"></i>
                                    <span>Quality Service</span>
                                </div>
                                <div class="about-feature">
                                    <i class="fas fa-users"></i>
                                    <span>Expert Team</span>
                                </div>
                                <div class="about-feature">
                                    <i class="fas fa-heart"></i>
                                    <span>Customer First</span>
                                </div>
                                <div class="about-feature">
                                    <i class="fas fa-globe-asia"></i>
                                    <span>Local Expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Newsletter Section -->
            <section class="newsletter-section">
                <div class="container">
                    <div class="newsletter-wrapper" data-aos="fade-up">
                        <div class="newsletter-content">
                            <div class="newsletter-icon">
                                <i class="fas fa-gift"></i>
                            </div>
                            <div class="newsletter-text">
                                <h3>Subscribe for Special Offers</h3>
                                <p>Get 10% off your first booking!</p>
                            </div>
                        </div>
                        <form class="newsletter-form" id="newsletter-form">
                            <div class="newsletter-input-group">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Enter your email..." required>
                                <button type="submit">
                                    <span>Subscribe</span>
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('contact-component').innerHTML = this.template();
        this.initForm();
        this.initNewsletter();
    },

    initForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.showToast('Thank you! We will contact you soon.', 'success');
            form.reset();
        });
    },

    initNewsletter() {
        const form = document.getElementById('newsletter-form');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.showToast('Thank you for subscribing!', 'success');
            form.reset();
        });
    },

    showToast(message, type) {
        const existing = document.querySelector('.toast-msg');
        if (existing) existing.remove();
        
        const toast = document.createElement('div');
        toast.className = `toast-msg ${type}`;
        toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

document.addEventListener('DOMContentLoaded', () => ContactComponent.init());
