/**
 * Hero Component - TaHa Travel Agency
 * Static Banner Version - Image Only
 */

const HeroComponent = {
    template() {
        return `
            <section class="hero" id="home">
                <!-- Hero Background -->
                <div class="hero-slider">
                    <div class="hero-slide active">
                        <div class="hero-slide-bg">
                            <img src="images/banner.webp" alt="TaHa Travel Agency Banner">
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('hero-component').innerHTML = this.template();
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    HeroComponent.init();
});
