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
            this.createLightbox();
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
                <div class="gallery-wrapper" id="gallery-${dayIndex}">
                    <div class="gallery-main">
                        <div class="gallery-track" id="track-${dayIndex}" style="transform: translateX(0%)">
                            ${day.images.map((img, imgIndex) => `
                                <div class="gallery-slide">
                                    <div class="slide-loader"><div class="loader-ring"></div></div>
                                    <img src="${img}" alt="${day.title} - ${imgIndex + 1}" 
                                         onload="this.parentElement.classList.add('loaded')">
                                </div>
                            `).join('')}
                        </div>
                        ${day.images.length > 1 ? `
                            <button class="gallery-arrow gallery-prev" onclick="tourDetailInstance.slide(${dayIndex}, -1)">
                                <i class="fas fa-angle-left"></i>
                            </button>
                            <button class="gallery-arrow gallery-next" onclick="tourDetailInstance.slide(${dayIndex}, 1)">
                                <i class="fas fa-angle-right"></i>
                            </button>
                        ` : ''}
                        <div class="gallery-controls">
                            <span class="gallery-count" id="count-${dayIndex}">1 / ${day.images.length}</span>
                            <button class="gallery-fullscreen" onclick="tourDetailInstance.openGalleryFullscreen(${dayIndex})">
                                <i class="fas fa-expand"></i>
                            </button>
                        </div>
                    </div>
                    ${day.images.length > 1 ? `
                        <div class="gallery-thumbs" id="thumbs-${dayIndex}">
                            ${day.images.map((img, imgIndex) => `
                                <div class="thumb-item ${imgIndex === 0 ? 'active' : ''}" onclick="tourDetailInstance.goToSlide(${dayIndex}, ${imgIndex})">
                                    <img src="${img}" alt="Thumb ${imgIndex + 1}">
                                </div>
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

    slide(dayIndex, direction) {
        const state = this.sliderStates[dayIndex];
        if (!state || state.totalImages <= 1) return;
        
        const newIndex = (state.currentIndex + direction + state.totalImages) % state.totalImages;
        this.goToSlide(dayIndex, newIndex);
    }

    goToSlide(dayIndex, index) {
        const state = this.sliderStates[dayIndex];
        if (!state) return;
        
        state.currentIndex = index;
        
        // Update track position
        const track = document.getElementById(`track-${dayIndex}`);
        if (track) {
            track.style.transform = `translateX(-${index * 100}%)`;
        }
        
        // Update counter
        const count = document.getElementById(`count-${dayIndex}`);
        if (count) {
            count.textContent = `${index + 1} / ${state.totalImages}`;
        }
        
        // Update thumbnails
        const thumbs = document.querySelectorAll(`#thumbs-${dayIndex} .thumb-item`);
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
        
        // Scroll thumbnail into view
        const activeThumb = thumbs[index];
        if (activeThumb) {
            activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    openGalleryFullscreen(dayIndex) {
        const state = this.sliderStates[dayIndex];
        if (!state) return;
        
        this.currentLightboxDay = dayIndex;
        this.currentLightboxImage = state.currentIndex;
        this.updateLightboxImage();
        
        const lightbox = document.getElementById('gallery-lightbox');
        if (lightbox) {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    createLightbox() {
        // Prevent duplicate lightboxes
        if (document.getElementById('gallery-lightbox')) return;

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-modal';
        lightbox.id = 'gallery-lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close" onclick="tourDetailInstance.closeLightbox()">&times;</span>
            <div class="lightbox-content">
                <img id="lightbox-img" class="lightbox-image" src="" alt="">
                <button class="lightbox-nav prev" onclick="tourDetailInstance.changeLightboxSlide(-1)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="lightbox-nav next" onclick="tourDetailInstance.changeLightboxSlide(1)">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        // Close on click outside
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                this.closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const lightbox = document.getElementById('gallery-lightbox');
            if (!lightbox || !lightbox.classList.contains('active')) return;
            
            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.changeLightboxSlide(-1);
            if (e.key === 'ArrowRight') this.changeLightboxSlide(1);
        });
    }

    openLightbox(dayIndex, imgIndex) {
        this.currentLightboxDay = dayIndex;
        this.currentLightboxImage = imgIndex;
        
        this.updateLightboxImage();
        const lightbox = document.getElementById('gallery-lightbox');
        if (lightbox) {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeLightbox() {
        const lightbox = document.getElementById('gallery-lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    changeLightboxSlide(direction) {
        if (this.currentLightboxDay === undefined) return;
        
        const day = this.tour.itinerary[this.currentLightboxDay];
        const totalImages = day.images.length;
        
        this.currentLightboxImage = (this.currentLightboxImage + direction + totalImages) % totalImages;
        this.updateLightboxImage();
    }

    updateLightboxImage() {
        const day = this.tour.itinerary[this.currentLightboxDay];
        const imgUrl = day.images[this.currentLightboxImage];
        
        const imgElement = document.getElementById('lightbox-img');
        if (imgElement) {
            imgElement.src = imgUrl;
        }
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
