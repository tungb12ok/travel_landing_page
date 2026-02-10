/**
 * Itinerary Detail Page - TaHa Travel Agency
 * Handles dynamic itinerary content loading and rendering for 17-day Vietnam package
 */

class ItineraryDetail {
    constructor() {
        this.itinerary = null;
        this.init();
    }

    async init() {
        try {
            await this.loadItineraryData();
            if (!this.itinerary) {
                this.showError('Itinerary not found');
                return;
            }

            this.renderItineraryContent();
            this.createLightbox();
            this.updateSEO();
            this.addStructuredData();
            this.initAOS();
        } catch (error) {
            console.error('Error initializing itinerary detail:', error);
            this.showError('Failed to load itinerary details');
        }
    }

    async loadItineraryData() {
        try {
            const response = await fetch('data/vietnam-17days-itinerary.json');
            if (response.ok) {
                this.itinerary = await response.json();
            }
        } catch (error) {
            console.error('Error loading itinerary data:', error);
            throw error;
        }
    }

    renderItineraryContent() {
        if (!this.itinerary) return;

        // Update hero section
        document.getElementById('tour-title').textContent = this.itinerary.name;
        document.getElementById('tour-duration').textContent = this.itinerary.duration;
        document.getElementById('tour-region').textContent = this.itinerary.region;
        document.getElementById('breadcrumb-tour').textContent = '17 Days Package';

        // Set hero background image
        const heroSection = document.getElementById('tour-hero');
        if (this.itinerary.thumbnail) {
            heroSection.style.backgroundImage = `url('${this.itinerary.thumbnail}')`;
        }

        // Update description
        if (this.itinerary.description) {
            document.getElementById('tour-description').innerHTML = `<p>${this.itinerary.description}</p>`;
        }

        // Render itinerary days
        this.renderItinerary();

        // Render included/excluded
        this.renderIncludedExcluded();

        // Render notes
        this.renderNotes();
    }

    renderItinerary() {
        const container = document.getElementById('itinerary-container');
        
        container.innerHTML = this.itinerary.itinerary.map((day, dayIndex) => {
            // Render image gallery if images exist (same style as tour-detail.js)
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
                            <button class="gallery-arrow gallery-prev" onclick="itineraryDetailInstance.slide(${dayIndex}, -1)">
                                <i class="fas fa-angle-left"></i>
                            </button>
                            <button class="gallery-arrow gallery-next" onclick="itineraryDetailInstance.slide(${dayIndex}, 1)">
                                <i class="fas fa-angle-right"></i>
                            </button>
                        ` : ''}
                        <div class="gallery-controls">
                            <span class="gallery-count" id="count-${dayIndex}">1 / ${day.images.length}</span>
                            <button class="gallery-fullscreen" onclick="itineraryDetailInstance.openGalleryFullscreen(${dayIndex})">
                                <i class="fas fa-expand"></i>
                            </button>
                        </div>
                    </div>
                    ${day.images.length > 1 ? `
                        <div class="gallery-thumbs" id="thumbs-${dayIndex}">
                            ${day.images.map((img, imgIndex) => `
                                <div class="thumb-item ${imgIndex === 0 ? 'active' : ''}" onclick="itineraryDetailInstance.goToSlide(${dayIndex}, ${imgIndex})">
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
                
                // Check if line starts with bullet point
                if (trimmedLine.startsWith('•')) {
                    return `<p class="itinerary-text bullet-point">${trimmedLine}</p>`;
                }
                // Check if line is a time marker (starts with time format like "13:00" or "08:00 - 09:30")
                else if (/^\d{1,2}:\d{2}/.test(trimmedLine)) {
                    return `<p class="itinerary-time"><i class="fas fa-clock"></i> ${trimmedLine}</p>`;
                }
                // Check if line is a location/activity title (contains colon or is uppercase/bold marker)
                else if (trimmedLine.includes(':') && trimmedLine.indexOf(':') < 50) {
                    const parts = trimmedLine.split(':');
                    return `<p class="itinerary-location"><i class="fas fa-map-marker-alt"></i> <strong>${parts[0]}:</strong> ${parts.slice(1).join(':')}</p>`;
                }
                // Regular description
                else {
                    return `<p class="itinerary-text">${trimmedLine}</p>`;
                }
            }).join('');

            return `
                <div class="itinerary-day" data-aos="fade-up">
                    <div class="day-header">
                        <span class="day-number">Day ${day.day}</span>
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
        this.sliderStates = this.itinerary.itinerary.map(day => ({
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

    renderIncludedExcluded() {
        // Render included items
        const includedList = document.getElementById('included-list');
        if (this.itinerary.included && includedList) {
            includedList.innerHTML = this.itinerary.included.map(item => 
                `<li><i class="fas fa-check"></i> ${item}</li>`
            ).join('');
        }

        // Render excluded items
        const excludedList = document.getElementById('excluded-list');
        if (this.itinerary.excluded && excludedList) {
            excludedList.innerHTML = this.itinerary.excluded.map(item => 
                `<li><i class="fas fa-times"></i> ${item}</li>`
            ).join('');
        }
    }

    renderNotes() {
        const notesList = document.getElementById('notes-list');
        if (this.itinerary.notes && notesList) {
            notesList.innerHTML = this.itinerary.notes.map(note => 
                `<li><i class="fas fa-info-circle"></i> ${note}</li>`
            ).join('');
        }
    }

    createLightbox() {
        // Prevent duplicate lightboxes
        if (document.getElementById('gallery-lightbox')) return;

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-modal';
        lightbox.id = 'gallery-lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close" onclick="itineraryDetailInstance.closeLightbox()">&times;</span>
            <div class="lightbox-content">
                <img id="lightbox-img" class="lightbox-image" src="" alt="">
                <button class="lightbox-nav prev" onclick="itineraryDetailInstance.changeLightboxSlide(-1)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="lightbox-nav next" onclick="itineraryDetailInstance.changeLightboxSlide(1)">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="lightbox-counter" id="lightbox-caption"></div>
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
        
        const day = this.itinerary.itinerary[this.currentLightboxDay];
        const totalImages = day.images.length;
        
        this.currentLightboxImage = (this.currentLightboxImage + direction + totalImages) % totalImages;
        this.updateLightboxImage();
    }

    updateLightboxImage() {
        const day = this.itinerary.itinerary[this.currentLightboxDay];
        const imgUrl = day.images[this.currentLightboxImage];
        const caption = `Day ${day.day}: ${day.title} - Image ${this.currentLightboxImage + 1} of ${day.images.length}`;
        
        const imgElement = document.getElementById('lightbox-img');
        if (imgElement) {
            imgElement.src = imgUrl;
            const captionEl = document.getElementById('lightbox-caption');
            if (captionEl) captionEl.textContent = caption;
        }
    }

    updateSEO() {
        const title = `${this.itinerary.name} | TaHa Travel Agency`;
        const description = this.itinerary.description;
        
        // Update page title
        document.getElementById('page-title').textContent = title;
        document.getElementById('meta-title').setAttribute('content', title);

        // Update meta description
        document.getElementById('meta-description').setAttribute('content', description);

        // Update canonical URL
        const currentUrl = window.location.href;
        document.getElementById('canonical-url').setAttribute('href', currentUrl);

        // Update Open Graph tags
        document.getElementById('og-url').setAttribute('content', currentUrl);
        document.getElementById('og-title').setAttribute('content', title);
        document.getElementById('og-description').setAttribute('content', description);
        
        if (this.itinerary.thumbnail) {
            const imageUrl = window.location.origin + '/' + this.itinerary.thumbnail;
            document.getElementById('og-image').setAttribute('content', imageUrl);
            document.getElementById('twitter-image').setAttribute('content', imageUrl);
        }

        // Update Twitter Card tags
        document.getElementById('twitter-url').setAttribute('content', currentUrl);
        document.getElementById('twitter-title').setAttribute('content', title);
        document.getElementById('twitter-description').setAttribute('content', description);
    }

    addStructuredData() {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": this.itinerary.name,
            "description": this.itinerary.description,
            "duration": this.itinerary.duration,
            "touristType": "International and Domestic Travelers",
            "itinerary": this.itinerary.itinerary.map(day => ({
                "@type": "ItemList",
                "name": `Day ${day.day}: ${day.title}`,
                "description": day.content.substring(0, 200) + '...'
            })),
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
let itineraryDetailInstance;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    itineraryDetailInstance = new ItineraryDetail();
});
