/**
 * Phu Quoc Component - TaHa Travel Agency
 * Phu Quoc Island Tours
 */

const PhuQuocComponent = {
    tours: [
        {
            name: "4 Days Phu Quoc - Hon Thom - 6 Destinations",
            image: "images/destinations/4-phu-quoc/width_550.webp",
            slug: "phu-quoc-hon-thom-6-destinations-4-days"
        },
        {
            name: "5 Days Phu Quoc - Hon Thom - VinWonders - Grand World",
            image: "images/destinations/4-phu-quoc/5-phu-quoc.webp",
            slug: "phu-quoc-hon-thom-6-destinations-vinwonders-grand-world-5-days"
        },
        {
            name: "6 Days Phu Quoc - VinWonders - Grand World - Southern Tour",
            image: "images/destinations/4-phu-quoc/6-phu-quoc.webp",
            slug: "phu-quoc-hon-thom-vinwonders-grand-world-southern-tour-6-days"
        }
    ],

    template() {
        return `
            <section class="phuquoc" id="phuquoc">
                <div class="phuquoc-container">
                    <!-- Header -->
                    <div class="phuquoc-header" data-aos="fade-up">
                        <h2 class="phuquoc-title">Phu Quoc Tour</h2>
                    </div>

                    <!-- Phu Quoc Grid -->
                    <div class="phuquoc-grid">
                        ${this.tours.map((tour, index) => `
                            <a href="tour-detail.html?tour=${tour.slug}" class="phuquoc-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="phuquoc-image">
                                    <img src="${tour.image}" alt="${tour.name}">
                                    <div class="phuquoc-icon">
                                        <i class="fas fa-island-tropical"></i>
                                    </div>
                                    <div class="phuquoc-overlay">
                                        <span class="view-details">
                                            <i class="fas fa-arrow-right"></i>
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div class="phuquoc-content">
                                    <p class="phuquoc-package">${tour.name}</p>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('phuquoc-component').innerHTML = this.template();
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    PhuQuocComponent.init();
});
