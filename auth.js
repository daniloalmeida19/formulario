(function() {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    const path = window.location.pathname;
    const pagina = path.split("/").pop();

    // Verifica se é a página de login
    const isLoginPage = pagina === 'login.html';

    // Se não estiver logado e não for a página de login, redireciona para login
    if (!usuarioLogado && !isLoginPage) {
        window.location.href = 'login.html';
    } 
    // Se já estiver logado e tentar acessar a página de login, manda para o início
    else if (usuarioLogado && isLoginPage) {
        window.location.href = 'index.html';
    }

    // Adiciona o botão de "Sair" no menu se estiver logado
    if (usuarioLogado) {
        window.addEventListener('DOMContentLoaded', function() {
            const navUl = document.querySelector('nav ul');
            if (navUl) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = 'Sair 🚪';
                a.className = 'btn-logout';
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (confirm('Deseja realmente sair do sistema?')) {
                        sessionStorage.removeItem('usuarioLogado');
                        window.location.href = 'login.html';
                    }
                });
                li.appendChild(a);
                navUl.appendChild(li);
            }
        });
    }
})();