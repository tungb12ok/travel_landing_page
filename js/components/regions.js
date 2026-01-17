/**
 * Regions Component - TaHa Travel Agency
 * North Vietnam Destinations
 */

const RegionsComponent = {
    regions: [
        {
            name: "5 Days Hanoi - Ninh Binh - Halong - Quang Phu Cau",
            image: "images/destinations/hn-ninh-binh.webp"
        },
        {
            name: "5 Days : Hanoi - 2 days 1 night Sapa - Halong Bay",
            image: "images/destinations/hn-ha-long.jpeg"
        },
        {
            name: "6 days : Hanoi 2 days Sapa - 2 days Halong",
            image: "images/destinations/hn-sapa.webp"
        },
        {
            name: "5 Days : Hanoi - Sapa",
            image: "images/destinations/hn-sapa-2.webp"
        }
    ],

    template() {
        return `
            <section class="regions" id="regions">
                <div class="regions-container">
                    <!-- Header -->
                    <div class="regions-header" data-aos="fade-up">
                        <h2 class="regions-title">North in Vietnam : Hanoi - Sapa Halong Bay - Ninh Binh</h2>
                    </div>

                    <!-- Regions Grid -->
                    <div class="regions-grid">
                        ${this.regions.map((region, index) => `
                            <div class="region-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="region-image">
                                    <img src="${region.image}" alt="${region.name}">
                                    <div class="region-icon">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </div>
                                </div>
                                <div class="region-content">
                                    <p class="region-package">${region.name}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('regions-component').innerHTML = this.template();
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    RegionsComponent.init();
});
