/**
 * South Component - TaHa Travel Agency
 * South Vietnam Destinations
 */

const SouthComponent = {
    destinations: [
        {
            name: "4 Days : Ho Chi Minh - Cu Chi Tunnel - Mekong Delta",
            image: "images/destinations/south/4-south.webp"
        },
        {
            name: "5 Days : Ho Chi Minh - Cu Chi Tunnel - Mekong Delta - Can Tho",
            image: "images/destinations/south/5-south.webp"
        },
        {
            name: "6 Days : Ho Chi Minh - Cu Chi Tunnel - Mekong Delta - Phu Quoc Island",
            image: "images/destinations/south/6-south.webp"
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
                            <div class="south-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="south-image">
                                    <img src="${destination.image}" alt="${destination.name}">
                                    <div class="south-icon">
                                        <i class="fas fa-water"></i>
                                    </div>
                                </div>
                                <div class="south-content">
                                    <p class="south-package">${destination.name}</p>
                                </div>
                            </div>
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
