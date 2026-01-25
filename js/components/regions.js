/**
 * Regions Component - TaHa Travel Agency
 * North Vietnam Destinations
 */

const RegionsComponent = {
    regions: [
        {
            name: "5 Days Hanoi - Ninh Binh - Halong - Quang Phu Cau",
            image: "images/destinations/hn-ninh-binh.webp",
            slug: "hanoi-ninh-binh-halong-quang-phu-cau-5-days"
        },
        {
            name: "5 Days Hanoi - Sapa Cat Cat - Fansipan - Halong",
            image: "images/destinations/hn-ha-long.jpeg",
            slug: "hanoi-sapa-cat-cat-fansipan-halong-5-days"
        },
        {
            name: "6 Days Hanoi - Sapa - Fansipan - Halong Overnight",
            image: "images/destinations/hn-sapa.webp",
            slug: "hanoi-sapa-fansipan-halong-overnight-6-days"
        },
        {
            name: "6 Days Hanoi - Sapa Fansipan - Moana - Glass Bridge - Alpine Coaster",
            image: "images/destinations/hn-sapa-2.webp",
            slug: "hanoi-sapa-fansipan-moana-glass-bridge-alpine-coaster-6-days"
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
                            <a href="tour-detail.html?tour=${region.slug}" class="region-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="region-image">
                                    <img src="${region.image}" alt="${region.name}">
                                    <div class="region-icon">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div class="region-overlay">
                                        <span class="view-details">
                                            <i class="fas fa-arrow-right"></i>
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div class="region-content">
                                    <p class="region-package">${region.name}</p>
                                </div>
                            </a>
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
