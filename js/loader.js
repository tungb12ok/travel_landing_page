/**
 * Loader Component - TaHa Travel Agency
 * Handles preloader animation and hiding
 */

const LoaderComponent = {
    init() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoader();
            }, 1500); // Show loading for at least 1.5s for smooth experience
        });
        
        // Fallback: hide loader after 5 seconds even if load event doesn't fire
        setTimeout(() => {
            this.hideLoader();
        }, 5000);
    },

    hideLoader() {
        const loader = document.querySelector('.preloader');
        
        if (loader) {
            // Add hidden class for fade out animation
            loader.classList.add('hidden');
            
            // Remove from DOM after animation
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.add('loaded');
            }, 600);
        }
    },

    showLoader() {
        const loader = document.querySelector('.preloader');
        
        if (loader) {
            loader.classList.remove('hidden');
            loader.style.display = 'flex';
            document.body.classList.remove('loaded');
        }
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    LoaderComponent.init();
});
