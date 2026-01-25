/**
 * Central Component - TaHa Travel Agency
 * Central Vietnam Destinations
 */

const CentralComponent = {
    destinations: [
        {
            name: "4 Days Da Nang - Bana Hill - Coconut Village - Hoi An",
            image: "images/destinations/central/4-hoi-an.jpeg",
            slug: "danang-bana-hill-coconut-village-hoi-an-4-days"
        },
        {
            name: "5 Days Da Nang - Bana Hill - Hoi An - Hue Imperial City",
            image: "images/destinations/central/5-hoi-an.webp",
            slug: "danang-bana-hill-hoi-an-hue-imperial-city-5-days"
        },
        {
            name: "6 Days Da Nang - Bana Hill - Hoi An - Hue - Da Nang City Tour",
            image: "images/destinations/central/6-hoi-an.webp",
            slug: "danang-bana-hill-hoi-an-hue-danang-city-tour-6-days"
        }
    ],

    template() {
        return `
            <section class="central" id="central">
                <div class="central-container">
                    <!-- Header -->
                    <div class="central-header" data-aos="fade-up">
                        <h2 class="central-title">Central in Vietnam : Danang - Hoi An - Hue</h2>
                    </div>

                    <!-- Central Grid -->
                    <div class="central-grid">
                        ${this.destinations.map((destination, index) => `
                            <a href="tour-detail.html?tour=${destination.slug}" class="central-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="central-image">
                                    <img src="${destination.image}" alt="${destination.name}">
                                    <div class="central-icon">
                                        <i class="fas fa-umbrella-beach"></i>
                                    </div>
                                    <div class="central-overlay">
                                        <span class="view-details">
                                            <i class="fas fa-arrow-right"></i>
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div class="central-content">
                                    <p class="central-package">${destination.name}</p>
                                </div>
                            </a>
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
