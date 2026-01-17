/**
 * About Component - TaHa Travel Agency
 */

const AboutComponent = {
    template() {
        return `
            <section class="about" id="about">
                <div class="about-container">
                    <div class="about-content">
                        <!-- About Image -->
                        <div class="about-image" data-aos="fade-right">
                            <img src="images/ta_ha_brand.jpeg" alt="TaHa Travel Agency">
                        </div>

                        <!-- About Text -->
                        <div class="about-text" data-aos="fade-left">
                            <div class="about-text-wrapper">
                                <h2 class="about-title">TaHa Travel - Connecting Your Travel Dreams</h2>
                                <p class="about-description">
                                    TaHa Travel proudly serves as your ideal companion for exploring Southeast 
                                    Asia and China. We take you to journey the most stunning destinations in Vietnam, 
                                    indulge in the exquisite cuisine of Thailand, immerse in the ancient heritage of 
                                    Laos and Cambodia, and marvel at the grandeur of China's nature and culture. 
                                    With professional service and dedicated care, TaHa Travel promises a journey 
                                    that is not only memorable but also perfect in every moment.
                                </p>
                                <div class="about-cta-wrapper">
                                    <a href="#contact" class="about-cta">
                                        <i class="fas fa-paper-plane"></i>
                                        Book Tour Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('about-component').innerHTML = this.template();
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    AboutComponent.init();
});
