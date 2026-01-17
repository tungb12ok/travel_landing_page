/**
 * Consultant Component - TaHa Travel Agency
 * Sales Consultant Introduction
 */

const ConsultantComponent = {
    template() {
        return `
            <section class="consultant" id="consultant">
                <div class="consultant-container">
                    <div class="consultant-content">
                        <!-- Image Section -->
                        <div class="consultant-image" data-aos="fade-right">
                            <img src="images/heli_tran.jpg" alt="Ms. Heyli Tran - Sales Consultant">
                        </div>

                        <!-- Text Section -->
                        <div class="consultant-text" data-aos="fade-left">
                            <h2 class="consultant-name">Ms. Heyli Tran</h2>
                            
                            <div class="consultant-contact">
                                <i class="fas fa-phone-alt"></i>
                                <div class="consultant-contact-text">
                                    <div class="consultant-contact-label">Tel / WhatsApp / Viber:</div>
                                    <div class="consultant-contact-number">+84 84 950 8358</div>
                                </div>
                            </div>

                            <div class="consultant-description">
                                <p>My name is Heyli, and I'm a Sales Consultant at TAHA Travel Agency. However, I see my role as more than just sales — I strive to be your trusted travel companion throughout your journey in Vietnam.</p>
                                
                                <p>From the very first message, I take time to listen, understand your travel preferences, and design personalized itineraries that truly match your expectations. I believe travel is not just about visiting places, but about creating meaningful experiences and lasting memories.</p>
                                
                                <p>My goal is to make your trip authentic, enjoyable, and completely stress-free. I'll be there to guide you, support you, and ensure every detail is handled smoothly — so you can simply relax and enjoy the journey.</p>
                            </div>

                            <div class="consultant-highlight">
                                ✨ Let's create an unforgettable trip together in Vietnam. ✨
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('consultant-component').innerHTML = this.template();
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ConsultantComponent.init();
});
