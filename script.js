
        // Menu Mobile
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.addEventListener("click", () => navMenu.classList.toggle("active"));
        document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => navMenu.classList.remove("active")));
        
        // Animações de Scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

        // Lógica do Lightbox
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        // Seleciona todas as imagens do catálogo que devem abrir no lightbox
        const images = document.querySelectorAll('.catalogo-item img');

        images.forEach(image => {
            image.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = image.src;
            });
        });

        const closeLightbox = () => lightbox.classList.remove('active');
        document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        // Fecha ao clicar fora da imagem (no fundo escuro)
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                closeLightbox();
            }
        });
