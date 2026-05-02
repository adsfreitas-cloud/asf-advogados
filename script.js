// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                              target.scrollIntoView({
                                                behavior: 'smooth'
                              });
                }
      });
});

// Formulário de contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Obrigado por entrar em contato! Retornaremos em breve.');
                this.reset();
      });
}

// Efeito de scroll para navbar
window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
                navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      } else {
                navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
      }
});

// Função para animar elementos ao scroll
const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
                if (entry.isIntersecting) {
                              entry.target.style.opacity = '1';
                              entry.target.style.transform = 'translateY(0)';
                }
      });
}, observerOptions);

document.querySelectorAll('.servico-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
});
