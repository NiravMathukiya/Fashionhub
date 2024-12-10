const menuToggle = document.getElementById("menu-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  mobileDrawer.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileDrawer.classList.add("hidden");
});

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add hover effect to app store buttons
    const storeButtons = document.querySelectorAll('a img');
    storeButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});

function handleShopNow() {
    // Add your shop now functionality here
    console.log('Shop Now clicked!');
}

// Add parallax effect to stars on mouse move
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    stars.forEach(star => {
        const speed = parseFloat(star.getAttribute('data-speed') || '2');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        star.style.transform = `translate(${x}px, ${y}px) scale(${mouseX > 0.5 ? mouseX : 1-mouseX})`;
    });
});

// Initialize random speeds for stars
document.querySelectorAll('.star').forEach(star => {
    star.setAttribute('data-speed', (Math.random() * 4 + 1).toString());
});
