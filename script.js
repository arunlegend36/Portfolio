// Fade in elements on page load
document.addEventListener('DOMContentLoaded', () => {
    const profileSection = document.querySelector('.profile-section');
    const socialLinks = document.querySelectorAll('.social-item');
    
    // Fade in profile section
    profileSection.style.opacity = 0;
    setTimeout(() => {
        profileSection.style.opacity = 1;
        profileSection.style.transform = 'translateY(0)';
    }, 300);

    // Fade in social links one by one
    socialLinks.forEach((link, index) => {
        link.style.opacity = 0;
        setTimeout(() => {
            link.style.opacity = 1;
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });

    // Add typing effect to the name
    const nameElement = document.querySelector('.profile-section h1');
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    let charIndex = 0;

    function typeText() {
        if (charIndex < originalText.length) {
            nameElement.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }
    
    setTimeout(typeText, 800);

    // Updated particles configuration for Aquarius constellation
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: ['#4facfe', '#00f2fe', '#ffffff']
            },
            shape: {
                type: "star"
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00f2fe',
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.8
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Create Aquarius constellation pattern
    const canvas = document.querySelector('#particles-js canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        function drawConstellation() {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 242, 254, 0.2)';
            ctx.lineWidth = 1;
            
            // Aquarius constellation coordinates (simplified)
            const points = [
                {x: canvas.width * 0.3, y: canvas.height * 0.3},
                {x: canvas.width * 0.35, y: canvas.height * 0.35},
                {x: canvas.width * 0.4, y: canvas.height * 0.4},
                {x: canvas.width * 0.45, y: canvas.height * 0.45},
                {x: canvas.width * 0.5, y: canvas.height * 0.5},
                {x: canvas.width * 0.55, y: canvas.height * 0.55},
                {x: canvas.width * 0.6, y: canvas.height * 0.5},
                {x: canvas.width * 0.65, y: canvas.height * 0.45},
                {x: canvas.width * 0.7, y: canvas.height * 0.4}
            ];
            
            // Draw the constellation lines
            ctx.moveTo(points[0].x, points[0].y);
            points.forEach(point => {
                ctx.lineTo(point.x, point.y);
            });
            
            ctx.stroke();
        }

        // Draw constellation periodically
        setInterval(drawConstellation, 100);
    }
}); 