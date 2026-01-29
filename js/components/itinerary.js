/**
 * Itinerary Component - TaHa Travel Agency
 * Vietnam Package 17 days 16 Night
 */

const ItineraryComponent = {
    days: [
        { day: 1, activity: "Hanoi Arrival" },
        { day: 2, activity: "Hanoi Tour" },
        { day: 3, activity: "Ninh Binh Tour (Hoa Lue - Tam Cốc - Mua Cave)" },
        { day: 4, activity: "Halong Bay" },
        { day: 5, activity: "Sapa 2 days 1 Night" },
        { day: 6, activity: "Sapa" },
        { day: 7, activity: "Incense village Flight Danang" },
        { day: 8, activity: "Bana Hill Tour" },
        { day: 9, activity: "Coconut Village - Hoi An" },
        { day: 10, activity: "Danang City Tour" },
        { day: 11, activity: "Hue Tour Flight to Ho Chi Minh" },
        { day: 12, activity: "Saigon city tour - Cu Chi Tunnel" },
        { day: 13, activity: "Mekong Delta" },
        { day: 14, activity: "Ho Chi Minh Flight to Phu Quoc" },
        { day: 15, activity: "4 land island" },
        { day: 16, activity: "6 Destination Tour" },
        { day: 17, activity: "Vinwonder Flight Back" }
    ],

    template() {
        return `
            <section class="itinerary" id="itinerary">
                <div class="itinerary-container">
                    <!-- Header -->
                    <div class="itinerary-header" data-aos="fade-up">
                        <h2 class="itinerary-title">Vietnam Package 17 days 16 Night</h2>
                        <p class="itinerary-subtitle">Explore the best of Vietnam from North to South</p>
                    </div>

                    <!-- Main Content -->
                    <div class="itinerary-content">
                        <!-- Timeline -->
                        <div class="itinerary-timeline" data-aos="fade-right">
                            <div class="timeline-list">
                                ${this.days.map((item, index) => `
                                    <div class="timeline-item clickable" data-aos="fade-up" data-aos-delay="${index * 50}" data-day="${item.day}">
                                        <div class="timeline-day">Day ${item.day}</div>
                                        <div class="timeline-activity">${item.activity}</div>
                                        <button class="btn-view-day" data-day="${item.day}" title="View Day ${item.day} Details">
                                            <i class="fas fa-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Map & Notes -->
                        <div class="itinerary-map" data-aos="fade-left">
                            <div class="map-image">
                                <img src="images/place_visit.webp" alt="Best Places to Visit in Vietnam">
                            </div>
                            <div class="map-notes">
                                <div class="map-notes-title">Please take noted:</div>
                                <ul class="map-notes-list">
                                    <li>From Hanoi - Need to Flight 1.5 hour to Danang</li>
                                    <li>From Danang - Need to flight 1 hour to Ho Chi Minh</li>
                                    <li>From Hanoi - Ho Chi Minh - Need to flight 2 hour</li>
                                    <li>From Ho Chi Minh to Phu Quoc - Need to flight 1 hour</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Details Section -->
                    <div class="itinerary-details">
                        <!-- Included -->
                        <div class="details-card" data-aos="fade-up">
                            <div class="details-card-header">
                                <div class="details-card-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <h3 class="details-card-title">Included</h3>
                            </div>
                            <ul class="details-list">
                                <li>Comfortable round-trip transportation as per the program</li>
                                <li>Hotel accommodation as mentioned in the itinerary</li>
                                <li>Meals provided according to the tour schedule</li>
                                <li>Services of an experienced, professional English-speaking tour guide</li>
                                <li>Dedicated 24/7 customer support hotline for your peace of mind</li>
                            </ul>
                        </div>

                        <!-- Excluded -->
                        <div class="details-card" data-aos="fade-up" data-aos-delay="100">
                            <div class="details-card-header">
                                <div class="details-card-icon">
                                    <i class="fas fa-times-circle"></i>
                                </div>
                                <h3 class="details-card-title">Excluded</h3>
                            </div>
                            <ul class="details-list excluded">
                                <li>Tips</li>
                                <li>Personal expenses</li>
                                <li>International / domestic flight tickets</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Download Button -->
                    <div class="itinerary-download" data-aos="fade-up">
                        <a href="itinerary-detail.html" class="download-btn">
                            <i class="fas fa-eye"></i>
                            View Full Itinerary
                        </a>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('itinerary-component').innerHTML = this.template();
        this.attachEventListeners();
    },

    attachEventListeners() {
        // Add click event to make the entire itinerary section clickable
        const itinerarySection = document.getElementById('itinerary');
        if (itinerarySection) {
            // Make the header clickable
            const header = itinerarySection.querySelector('.itinerary-header');
            if (header) {
                header.style.cursor = 'pointer';
                header.addEventListener('click', () => {
                    window.location.href = 'itinerary-detail.html';
                });
            }

            // Make the map clickable
            const mapImage = itinerarySection.querySelector('.map-image');
            if (mapImage) {
                mapImage.style.cursor = 'pointer';
                mapImage.addEventListener('click', () => {
                    window.location.href = 'itinerary-detail.html';
                });
            }

            // Make each timeline item clickable
            const timelineItems = itinerarySection.querySelectorAll('.timeline-item.clickable');
            timelineItems.forEach(item => {
                // Click on the entire item
                item.addEventListener('click', (e) => {
                    // Don't trigger if clicking the button
                    if (!e.target.closest('.btn-view-day')) {
                        window.location.href = 'itinerary-detail.html';
                    }
                });
            });

            // View day buttons
            const viewButtons = itinerarySection.querySelectorAll('.btn-view-day');
            viewButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    window.location.href = 'itinerary-detail.html';
                });
            });
        }
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ItineraryComponent.init();
});
