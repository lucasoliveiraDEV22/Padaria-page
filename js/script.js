// Função para alternar entre light e dark mode
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Aplicar tema salvo ao carregar a página
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

document.addEventListener('DOMContentLoaded', function() {
    applySavedTheme();
    
    // Adicionar evento ao botão de toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    // Smooth scroll para links do menu
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors) {
        anchors.forEach(anchor => {
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
    }

    // Validação do formulário
    const form = document.querySelector('.contato-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso!');
            this.reset();
        });
    }

    // Animação de scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    const elements = document.querySelectorAll('.produto-card, .sobre-container, .contato-container');
    if (elements) {
        elements.forEach((el) => observer.observe(el));
    }
});