// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de envio ao formulário de contato
    const form = document.getElementById('form-contato');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Exibe o pop-up de confirmação
        popup.style.display = 'block';
        
        // Fecha o pop-up automaticamente após 3 segundos
        setTimeout(function() {
            fecharPopup();
        }, 3000);
    });
    
    // Função para fechar o pop-up manualmente
    function fecharPopup() {
        popup.style.display = 'none';
    }
});
