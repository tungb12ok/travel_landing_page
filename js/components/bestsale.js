/**
 * Best Sale Component - TaHa Travel Agency
 * Featured tour packages
 */

const BestSaleComponent = {
    packages: [
        {
            title: "5 Days Hanoi - Sapa Cat Cat - Fansipan - Halong",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1D3yvvaN0DEiJWFqHtRO3KtGoDrNdyLgcag&s",
            duration: "5 Days 4 Nights",
            region: "North Vietnam",
            description: "Discover North Vietnam's highlights: trek Sapa's Cat Cat Village, conquer Fansipan Peak, and cruise magnificent Halong Bay.",
            slug: "hanoi-sapa-cat-cat-fansipan-halong-5-days",
            label: "BEST SELLER"
        },
        {
            title: "4 Days Da Nang - Bana Hill - Coconut Village - Hoi An",
            image: "images/destinations/central/4-hoi-an.jpeg",
            duration: "4 Days 3 Nights",
            region: "Central Vietnam",
            description: "Experience Central Vietnam's best: Golden Bridge at Bana Hills, ancient Hoi An town, and traditional Coconut Village.",
            slug: "danang-bana-hill-coconut-village-hoi-an-4-days",
            label: "HOT DEAL"
        },
        {
            title: "4 Days Phu Quoc - Hon Thom - 6 Destinations",
            image: "https://phuquocexpress.com/wp-content/uploads/2023/09/phu-quoc-express-kham-pha-7-cai-nhat-o-phu-quoc-9-1024x614.jpg.webp",
            duration: "4 Days 3 Nights",
            region: "Phu Quoc",
            description: "Paradise island escape: Cable car to Hon Thom, Aquatopia Water Park, and explore 6 iconic destinations.",
            slug: "phu-quoc-hon-thom-6-destinations-4-days",
            label: "TRENDING"
        }
    ],

    template() {
        return `
            <section class="bestsale" id="bestsale">
                <div class="bestsale-container">
                    <!-- Header -->
                    <div class="bestsale-header" data-aos="fade-up">
                        <h2 class="bestsale-title">Best Seller Tour Package</h2>
                    </div>

                    <!-- Best Sale Grid -->
                    <div class="bestsale-grid">
                        ${this.packages.map((pkg, index) => `
                            <a href="tour-detail.html?tour=${pkg.slug}" class="bestsale-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="bestsale-image-wrapper">
                                    <img src="${pkg.image}" alt="${pkg.title}" class="bestsale-image">
                                    <span class="bestsale-label">${pkg.label}</span>
                                </div>
                                <div class="bestsale-content">
                                    <h3 class="bestsale-package-title">${pkg.title}</h3>
                                    <div class="bestsale-meta">
                                        <div class="bestsale-meta-item">
                                            <i class="fas fa-clock"></i>
                                            <span>${pkg.duration}</span>
                                        </div>
                                        <div class="bestsale-meta-item">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>${pkg.region}</span>
                                        </div>
                                    </div>
                                    <p class="bestsale-description">${pkg.description}</p>
                                    <div class="bestsale-footer">
                                        <span class="bestsale-cta">
                                            View Details
                                            <i class="fas fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        const container = document.getElementById('bestsale-component');
        if (container) {
            container.innerHTML = this.template();
        }
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    BestSaleComponent.init();
});
