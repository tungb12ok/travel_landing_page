/**
 * South Component - TaHa Travel Agency
 * South Vietnam Destinations
 */

const SouthComponent = {
    destinations: [
        {
            name: "4 Days Ho Chi Minh - Cu Chi Tunnel - Mekong Delta",
            image: "images/destinations/south/4-south.webp",
            slug: "ho-chi-minh-cu-chi-tunnel-mekong-delta-4-days"
        },
        {
            name: "5 Days Ho Chi Minh - Cu Chi - Mekong - Saigon River Cruise",
            image: "images/destinations/south/5-south.webp",
            slug: "ho-chi-minh-cu-chi-mekong-saigon-river-cruise-5-days"
        },
        {
            name: "6 Days Ho Chi Minh - Cu Chi - Mekong - Saigon Cruise - Vung Tau",
            image: "images/destinations/south/6-south.webp",
            slug: "ho-chi-minh-cu-chi-mekong-saigon-cruise-vung-tau-6-days"
        }
    ],

    template() {
        return `
            <section class="south" id="south">
                <div class="south-container">
                    <!-- Header -->
                    <div class="south-header" data-aos="fade-up">
                        <h2 class="south-title">South in Vietnam : Ho Chi Minh - Cu Chi Tunnel - Mekong Delta</h2>
                    </div>

                    <!-- South Grid -->
                    <div class="south-grid">
                        ${this.destinations.map((destination, index) => `
                            <a href="tour-detail.html?tour=${destination.slug}" class="south-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="south-image">
                                    <img src="${destination.image}" alt="${destination.name}">
                                    <div class="south-icon">
                                        <i class="fas fa-water"></i>
                                    </div>
                                    <div class="south-overlay">
                                        <span class="view-details">
                                            <i class="fas fa-arrow-right"></i>
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div class="south-content">
                                    <p class="south-package">${destination.name}</p>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('south-component').innerHTML = this.template();
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    SouthComponent.init();
});
