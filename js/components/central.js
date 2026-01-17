/**
 * Central Component - TaHa Travel Agency
 * Central Vietnam Destinations
 */

const CentralComponent = {
    destinations: [
        {
            name: "4 Days : Danang - Hoi An - Bana Hill Tour",
            image: "images/destinations/central/4-hoi-an.jpeg"
        },
        {
            name: "5 Days : Danang Hoi An - Hue - Bana Hill Tour",
            image: "images/destinations/central/5-hoi-an.webp"
        },
        {
            name: "6 days : Danang - Hoi An - Hue - Saigon Cruise - Danang City Tour",
            image: "images/destinations/central/6-hoi-an.webp"
        }
    ],

    template() {
        return `
            <section class="central" id="central">
                <div class="central-container">
                    <!-- Header -->
                    <div class="central-header" data-aos="fade-up">
                        <h2 class="central-title">Central in Vietnam : Danang, Hoi An, Hue</h2>
                    </div>

                    <!-- Central Grid -->
                    <div class="central-grid">
                        ${this.destinations.map((destination, index) => `
                            <div class="central-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="central-image">
                                    <img src="${destination.image}" alt="${destination.name}">
                                    <div class="central-icon">
                                        <i class="fas fa-umbrella-beach"></i>
                                    </div>
                                </div>
                                <div class="central-content">
                                    <p class="central-package">${destination.name}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('central-component').innerHTML = this.template();
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    CentralComponent.init();
});
