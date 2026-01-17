/**
 * Phu Quoc Component - TaHa Travel Agency
 * Phu Quoc Island Tours
 */

const PhuQuocComponent = {
    tours: [
        {
            name: "4 Days Phu Quoc",
            image: "images/destinations/4-phu-quoc/width_550.webp"
        },
        {
            name: "5 Days Phu Quoc",
            image: "images/destinations/4-phu-quoc/5-phu-quoc.webp"
        },
        {
            name: "6 Days Phu Qyoc",
            image: "images/destinations/4-phu-quoc/6-phu-quoc.webp"
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
                            <div class="phuquoc-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="phuquoc-image">
                                    <img src="${tour.image}" alt="${tour.name}">
                                    <div class="phuquoc-icon">
                                        <i class="fas fa-island-tropical"></i>
                                    </div>
                                </div>
                                <div class="phuquoc-content">
                                    <p class="phuquoc-package">${tour.name}</p>
                                </div>
                            </div>
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
