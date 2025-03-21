// 滚动动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 移动端菜单切换
const navbar = document.querySelector('.navbar ul');
const menuToggle = document.createElement('li');
menuToggle.innerHTML = '☰';
menuToggle.classList.add('menu-toggle');

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        navbar.prepend(menuToggle);
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});

// 窗口大小变化监听
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
        if (document.querySelector('.menu-toggle')) {
            menuToggle.remove();
        }
    } else {
        if (!document.querySelector('.menu-toggle')) {
            navbar.prepend(menuToggle);
        }
    }
});
