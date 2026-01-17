/**
 * Footer Component - TaHa Travel Agency
 * Matching the reference design exactly
 */

const FooterComponent = {
    destinations: [
        { text: 'Vietnam', href: '#' },
        { text: 'Thailand', href: '#' },
        { text: 'Cambodia', href: '#' },
        { text: 'Laos', href: '#' },
        { text: 'Indonesia', href: '#' }
    ],

    socialLinks: [
        { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/TahaTravelAgency/', color: '#1877f2' },
        { icon: 'fab fa-instagram', href: 'https://www.instagram.com/tahatravel.2024', color: '#e4405f' },
        { icon: 'fab fa-youtube', href: 'https://www.youtube.com/@TaHaTravel-2024', color: '#ff0000' },
        { icon: 'fab fa-tiktok', href: 'https://www.tiktok.com/@vietnambesttour?_r=1&_t=ZS-939PaC3zpCC', color: '#000000' }
    ],

    template() {
        return `
            <!-- Footer Top Bar -->
            <div class="footer-top-bar">
                <div class="container">
                    <div class="footer-top-links">
                        <a href="#">Taha Travel Agency</a>
                        <span class="sep">|</span>
                        <a href="#">FAQs</a>
                        <span class="sep">|</span>
                        <a href="#">Privacy Statement</a>
                        <span class="sep">|</span>
                        <a href="#">Term & Conditions</a>
                        <span class="sep">|</span>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>

            <footer class="site-footer">
                <div class="container">
                    <div class="footer-grid">
                        <!-- Information Column -->
                        <div class="footer-col">
                            <h4 class="footer-heading">Information</h4>
                            <ul class="footer-info">
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Address in Vietnam: 8 Trang Thi, Hoan Kiem District, Ha Noi, Vietnam</span>
                                </li>
                                <li>
                                    <i class="fas fa-envelope"></i>
                                    <span>Email: <a href="mailto:Salestahatravel@gmail.com">Salestahatravel@gmail.com</a></span>
                                </li>
                                <li>
                                    <i class="fab fa-whatsapp"></i>
                                    <span>Whatsapp Number: <a href="https://wa.me/84886401048">+84 886 401 048</a></span>
                                </li>
                                <li>
                                    <i class="fas fa-clock"></i>
                                    <span>Work time: 7:30 - 21:00</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Destinations Column -->
                        <div class="footer-col">
                            <h4 class="footer-heading">Destinations</h4>
                            <ul class="footer-list">
                                ${this.destinations.map(d => `
                                    <li><a href="${d.href}">${d.text}</a></li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Follow us on social Column -->
                        <div class="footer-col">
                            <h4 class="footer-heading">Follow us on social</h4>
                            <div class="social-icons">
                                ${this.socialLinks.map(s => `
                                    <a href="${s.href}" class="social-btn" style="background: ${s.color}">
                                        <i class="${s.icon}"></i>
                                    </a>
                                `).join('')}
                            </div>
                            <ul class="footer-contact">
                                <li><i class="fas fa-phone-alt"></i> Tel: <a href="tel:+84849508358">+84 84 950 8358</a></li>
                                <li><i class="fab fa-whatsapp"></i> Whatsapp: <a href="https://wa.me/84849508358">+84 84 950 8358</a></li>
                                <li><i class="fab fa-line"></i> Line: <a href="#">+84 84 950 8358</a></li>
                                <li><i class="fab fa-viber"></i> Viber: <a href="#">+84 84 950 8358</a></li>
                            </ul>
                        </div>

                        <!-- Find us on map Column -->
                        <div class="footer-col">
                            <h4 class="footer-heading">Find us on map</h4>
                            <div class="footer-map">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096272159498!2d105.84772807508098!3d21.028825080620476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x1babf6bb474f35c6!2zVHLDoG5nIFRo4buLLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1704000000000!5m2!1svi!2s"
                                    width="100%" 
                                    height="200" 
                                    style="border:0; border-radius: 8px;" 
                                    allowfullscreen="" 
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    },

    init() {
        document.getElementById('footer-component').innerHTML = this.template();
    }
};

document.addEventListener('DOMContentLoaded', () => FooterComponent.init());
