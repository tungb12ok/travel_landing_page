/**
 * Booking Form Component - TaHa Travel Agency
 * Contact and Booking Form
 */

const BookingFormComponent = {
    template() {
        return `
            <section class="booking-form" id="contact">
                <div class="booking-form-container">
                    <div class="booking-form-wrapper" data-aos="fade-up">
                        <!-- Form Introduction -->
                        <div class="booking-form-intro">
                            <h2>Plan Your Perfect Trip</h2>
                            <p>Using the form below, and we will contact you with full details and personalized consultation.</p>
                        </div>

                        <!-- Booking Form -->
                        <form class="booking-form-content" id="bookingForm">
                            <div class="form-grid">
                                <!-- Full Name -->
                                <div class="form-field">
                                    <label class="form-label">
                                        Full Name
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" class="form-input" name="fullName" placeholder="Enter your full name" required>
                                </div>

                                <!-- Email -->
                                <div class="form-field">
                                    <label class="form-label">
                                        Email
                                        <span class="required">*</span>
                                    </label>
                                    <input type="email" class="form-input" name="email" placeholder="your.email@example.com" required>
                                </div>

                                <!-- Phone Number -->
                                <div class="form-field">
                                    <label class="form-label">
                                        Phone number
                                        <span class="required">*</span>
                                    </label>
                                    <div class="phone-input-wrapper">
                                        <select class="form-select country-code" name="countryCode">
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+84" selected>🇻🇳 +84</option>
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+86">🇨🇳 +86</option>
                                            <option value="+81">🇯🇵 +81</option>
                                            <option value="+82">🇰🇷 +82</option>
                                            <option value="+65">🇸🇬 +65</option>
                                            <option value="+66">🇹🇭 +66</option>
                                        </select>
                                        <input type="tel" class="form-input phone-number" name="phone" placeholder="123 456 7890" required>
                                    </div>
                                </div>

                                <!-- Number of Travelers -->
                                <div class="form-field">
                                    <label class="form-label">
                                        How many people will be traveling?
                                        <span class="required">*</span>
                                    </label>
                                    <input type="number" class="form-input" name="travelers" min="1" placeholder="Number of travelers" required>
                                </div>

                                <!-- Hotel Stars -->
                                <div class="form-field">
                                    <label class="form-label">
                                        How many star hotel
                                    </label>
                                    <div class="star-rating">
                                        <input type="radio" id="star1" name="hotelStars" value="1">
                                        <label for="star1" class="star-item" data-rating="1">
                                            <i class="fas fa-star"></i>
                                        </label>
                                        
                                        <input type="radio" id="star2" name="hotelStars" value="2">
                                        <label for="star2" class="star-item" data-rating="2">
                                            <i class="fas fa-star"></i>
                                        </label>
                                        
                                        <input type="radio" id="star3" name="hotelStars" value="3">
                                        <label for="star3" class="star-item" data-rating="3">
                                            <i class="fas fa-star"></i>
                                        </label>
                                        
                                        <input type="radio" id="star4" name="hotelStars" value="4">
                                        <label for="star4" class="star-item" data-rating="4">
                                            <i class="fas fa-star"></i>
                                        </label>
                                        
                                        <input type="radio" id="star5" name="hotelStars" value="5">
                                        <label for="star5" class="star-item" data-rating="5">
                                            <i class="fas fa-star"></i>
                                        </label>
                                    </div>
                                </div>

                                <!-- Travel Month -->
                                <div class="form-field">
                                    <label class="form-label">
                                        What month do you plan to travel
                                    </label>
                                    <select class="form-select" name="travelMonth">
                                        <option value="">Select month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>

                                <!-- Travel Date -->
                                <div class="form-field">
                                    <label class="form-label">
                                        Travel day
                                        <span class="required">*</span>
                                    </label>
                                    <input type="date" class="form-input" name="travelDate" required>
                                </div>

                                <!-- Questions -->
                                <div class="form-field full-width">
                                    <label class="form-label">
                                        Your questions about anything...
                                    </label>
                                    <textarea class="form-textarea" name="questions" placeholder="Tell us about your travel preferences, special requests, or any questions you have..."></textarea>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" class="form-submit">
                                <i class="fas fa-paper-plane"></i>
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        document.getElementById('contact-component').innerHTML = this.template();
        this.attachEventListeners();
        this.initStarRating();
    },

    initStarRating() {
        const starInputs = document.querySelectorAll('.star-rating input[type="radio"]');
        const starLabels = document.querySelectorAll('.star-item');

        starInputs.forEach((input, index) => {
            input.addEventListener('change', () => {
                // Reset all stars
                starLabels.forEach(label => {
                    label.classList.remove('active');
                });

                // Highlight stars up to selected rating
                for (let i = 0; i <= index; i++) {
                    starLabels[i].classList.add('active');
                }
            });
        });

        // Add hover effect
        starLabels.forEach((label, index) => {
            label.addEventListener('mouseenter', () => {
                // Highlight stars up to hovered star
                for (let i = 0; i <= index; i++) {
                    starLabels[i].classList.add('hover');
                }
            });

            label.addEventListener('mouseleave', () => {
                // Remove hover effect from all stars
                starLabels.forEach(l => l.classList.remove('hover'));
            });
        });
    },

    attachEventListeners() {
        const form = document.getElementById('bookingForm');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    },

    handleSubmit(e) {
        e.preventDefault();

        // Clear previous errors
        this.clearErrors();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        // Validation
        let isValid = true;

        // Full Name validation
        if (!data.fullName || data.fullName.trim().length < 2) {
            this.showError('fullName', 'Please enter your full name (at least 2 characters)');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            this.showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Phone validation
        if (!data.phone || data.phone.trim().length < 6) {
            this.showError('phone', 'Please enter a valid phone number');
            isValid = false;
        }

        // Number of travelers validation
        if (!data.travelers || parseInt(data.travelers) < 1) {
            this.showError('travelers', 'Please enter number of travelers (minimum 1)');
            isValid = false;
        }

        // Travel date validation
        if (!data.travelDate) {
            this.showError('travelDate', 'Please select your travel date');
            isValid = false;
        } else {
            const selectedDate = new Date(data.travelDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                this.showError('travelDate', 'Travel date must be in the future');
                isValid = false;
            }
        }

        if (!isValid) {
            // Scroll to first error
            const firstError = document.querySelector('.form-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        console.log('Form submitted:', data);

        // Show success message
        this.showSuccessMessage();

        // Reset form
        e.target.reset();

        // Reset star rating
        const starLabels = document.querySelectorAll('.star-item');
        starLabels.forEach(label => label.classList.remove('active'));
    },

    showError(fieldName, message) {
        const input = document.querySelector(`[name="${fieldName}"]`);
        if (!input) return;

        const formField = input.closest('.form-field');
        if (!formField) return;

        // Add error class to input
        input.classList.add('error');

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;

        formField.appendChild(errorDiv);
    },

    clearErrors() {
        // Remove error classes
        document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
            input.classList.remove('error');
        });

        // Remove error messages
        document.querySelectorAll('.form-error').forEach(error => {
            error.remove();
        });
    },

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your inquiry!</p>
            <p>We will contact you soon with full details and personalized consultation.</p>
        `;

        document.body.appendChild(message);

        setTimeout(() => {
            message.classList.add('show');
        }, 100);

        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => message.remove(), 300);
        }, 4000);
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    BookingFormComponent.init();
});
