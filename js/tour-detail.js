/**
 * Tour Detail Page - TaHa Travel Agency
 * Handles dynamic tour content loading and rendering
 */

class TourDetail {
    constructor() {
        this.tour = null;
        this.init();
    }

    async init() {
        try {
            const slug = this.getTourSlug();
            if (!slug) {
                this.showError('No tour specified');
                return;
            }

            await this.loadTourData(slug);
            if (!this.tour) {
                this.showError('Tour not found');
                return;
            }

            this.renderTourContent();
            this.updateSEO();
            this.addStructuredData();
            this.initAOS();
        } catch (error) {
            console.error('Error initializing tour detail:', error);
            this.showError('Failed to load tour details');
        }
    }

    getTourSlug() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('tour');
    }

    async loadTourData(slug) {
        try {
            // Try loading from all tour data files
            const tourFiles = [
                'data/tours.json',
                'data/central-tours.json',
                'data/south-tours.json',
                'data/phu-quoc-tours.json'
            ];

            for (const file of tourFiles) {
                try {
                    const response = await fetch(file);
                    if (response.ok) {
                        const data = await response.json();
                        const tour = data.tours.find(tour => tour.slug === slug);
                        if (tour) {
                            this.tour = tour;
                            return;
                        }
                    }
                } catch (err) {
                    // Continue to next file if this one fails
                    console.warn(`Could not load ${file}:`, err);
                }
            }
        } catch (error) {
            console.error('Error loading tour data:', error);
            throw error;
        }
    }

    renderTourContent() {
        if (!this.tour) return;

        // Update hero section
        document.getElementById('tour-title').textContent = this.tour.name;
        document.getElementById('tour-duration').textContent = this.tour.duration;
        document.getElementById('tour-region').textContent = this.tour.region;
        document.getElementById('tour-price').textContent = this.tour.price;
        document.getElementById('breadcrumb-tour').textContent = this.tour.name;
        document.getElementById('breadcrumb-region').textContent = this.tour.region;

        // Set hero background image
        const heroSection = document.getElementById('tour-hero');
        if (this.tour.thumbnail) {
            heroSection.style.backgroundImage = `url('${this.tour.thumbnail}')`;
        } else if (this.tour.images && this.tour.images.length > 0) {
            heroSection.style.backgroundImage = `url('${this.tour.images[0]}')`;
        }

        // Render video
        if (this.tour.videoUrl) {
            this.renderVideo();
        } else {
            document.getElementById('video-section').style.display = 'none';
        }

        // Render itinerary with new format
        this.renderItinerary();
    }

    renderVideo() {
        const videoContainer = document.getElementById('video-container');
        const videoId = this.extractYouTubeId(this.tour.videoUrl);
        
        if (videoId) {
            videoContainer.innerHTML = `
                <iframe 
                    width="100%" 
                    height="500" 
                    src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            `;
        }
    }

    extractYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    renderItinerary() {
        const container = document.getElementById('itinerary-container');
        
        container.innerHTML = this.tour.itinerary.map((day, dayIndex) => {
            // Render image gallery if images exist
            const imageGalleryHTML = day.images && day.images.length > 0 ? `
                <div class="day-gallery">
                    <div class="day-slider" id="day-slider-${dayIndex}">
                        ${day.images.map((img, imgIndex) => `
                            <div class="slider-item ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}">
                                <img src="${img}" alt="${day.title} - Photo ${imgIndex + 1}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                    ${day.images.length > 1 ? `
                        <button class="slider-nav prev" onclick="tourDetailInstance.changeSlide(${dayIndex}, -1)">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="slider-nav next" onclick="tourDetailInstance.changeSlide(${dayIndex}, 1)">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <div class="slider-dots">
                            ${day.images.map((_, imgIndex) => `
                                <span class="dot ${imgIndex === 0 ? 'active' : ''}" onclick="tourDetailInstance.goToSlide(${dayIndex}, ${imgIndex})"></span>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            ` : '';

            // Split content by newline and format each line
            const lines = day.content.split('\n').filter(line => line.trim());
            
            const formattedContent = lines.map(line => {
                const trimmedLine = line.trim();
                
                // Check if line is a time marker (starts with time format like "13:00" or "08:00 - 09:30")
                if (/^\d{1,2}:\d{2}/.test(trimmedLine)) {
                    return `<p class="itinerary-time"><i class="fas fa-clock"></i> ${trimmedLine}</p>`;
                }
                // Check if line is a location/activity title (short line without time)
                else if (trimmedLine.length < 50 && !trimmedLine.includes(':')) {
                    return `<p class="itinerary-location"><i class="fas fa-map-marker-alt"></i> <strong>${trimmedLine}</strong></p>`;
                }
                // Regular description
                else {
                    return `<p class="itinerary-text">${trimmedLine}</p>`;
                }
            }).join('');

            return `
                <div class="itinerary-day" data-aos="fade-up">
                    <div class="day-header">
                        <span class="day-number">Day ${day.day}:</span>
                        <h3 class="day-title">${day.title}</h3>
                    </div>
                    ${imageGalleryHTML}
                    <div class="day-content">
                        ${formattedContent}
                    </div>
                </div>
            `;
        }).join('');

        // Store slider states
        this.sliderStates = this.tour.itinerary.map(day => ({
            currentIndex: 0,
            totalImages: day.images ? day.images.length : 0
        }));
    }

    changeSlide(dayIndex, direction) {
        const state = this.sliderStates[dayIndex];
        if (!state || state.totalImages <= 1) return;

        const slider = document.getElementById(`day-slider-${dayIndex}`);
        const items = slider.querySelectorAll('.slider-item');
        const dots = slider.parentElement.querySelectorAll('.dot');

        // Remove active class
        items[state.currentIndex].classList.remove('active');
        dots[state.currentIndex].classList.remove('active');

        // Update index
        state.currentIndex = (state.currentIndex + direction + state.totalImages) % state.totalImages;

        // Add active class
        items[state.currentIndex].classList.add('active');
        dots[state.currentIndex].classList.add('active');
    }

    goToSlide(dayIndex, slideIndex) {
        const state = this.sliderStates[dayIndex];
        if (!state || state.totalImages <= 1) return;

        const slider = document.getElementById(`day-slider-${dayIndex}`);
        const items = slider.querySelectorAll('.slider-item');
        const dots = slider.parentElement.querySelectorAll('.dot');

        // Remove active class
        items[state.currentIndex].classList.remove('active');
        dots[state.currentIndex].classList.remove('active');

        // Update index
        state.currentIndex = slideIndex;

        // Add active class
        items[state.currentIndex].classList.add('active');
        dots[state.currentIndex].classList.add('active');
    }

    updateSEO() {
        if (!this.tour.seo) return;

        // Update page title
        document.getElementById('page-title').textContent = this.tour.seo.title;
        document.getElementById('meta-title').setAttribute('content', this.tour.seo.title);

        // Update meta description
        document.getElementById('meta-description').setAttribute('content', this.tour.seo.description);

        // Update meta keywords
        document.getElementById('meta-keywords').setAttribute('content', this.tour.seo.keywords);

        // Update canonical URL
        const currentUrl = window.location.href;
        document.getElementById('canonical-url').setAttribute('href', currentUrl);

        // Update Open Graph tags
        document.getElementById('og-url').setAttribute('content', currentUrl);
        document.getElementById('og-title').setAttribute('content', this.tour.seo.title);
        document.getElementById('og-description').setAttribute('content', this.tour.seo.description);
        
        if (this.tour.thumbnail) {
            const imageUrl = window.location.origin + '/' + this.tour.thumbnail;
            document.getElementById('og-image').setAttribute('content', imageUrl);
            document.getElementById('twitter-image').setAttribute('content', imageUrl);
        }

        // Update Twitter Card tags
        document.getElementById('twitter-url').setAttribute('content', currentUrl);
        document.getElementById('twitter-title').setAttribute('content', this.tour.seo.title);
        document.getElementById('twitter-description').setAttribute('content', this.tour.seo.description);
    }

    addStructuredData() {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": this.tour.name,
            "description": this.tour.description,
            "touristType": "International and Domestic Travelers",
            "itinerary": this.tour.itinerary.map(day => ({
                "@type": "ItemList",
                "name": `Day ${day.day}: ${day.title}`,
                "description": day.content.substring(0, 200) + '...'
            })),
            "offers": {
                "@type": "Offer",
                "price": this.tour.price,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
            },
            "provider": {
                "@type": "TravelAgency",
                "name": "TaHa Travel Agency",
                "url": "https://tahatravelagency.com"
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }

    initAOS() {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    showError(message) {
        const main = document.querySelector('.tour-detail-main');
        if (main) {
            main.innerHTML = `
                <div class="error-container" style="text-align: center; padding: 100px 20px;">
                    <i class="fas fa-exclamation-circle" style="font-size: 64px; color: var(--secondary-color); margin-bottom: 20px;"></i>
                    <h2>${message}</h2>
                    <p style="margin-top: 20px;">
                        <a href="index.html" class="btn-primary">Return to Home</a>
                    </p>
                </div>
            `;
        }
    }
}

// Store instance globally for slider controls
let tourDetailInstance;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    tourDetailInstance = new TourDetail();
});
