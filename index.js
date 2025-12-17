// 1. Seleciona TODOS os botões que têm a classe .activate
const buttons = document.querySelectorAll('.activate');

// Função de espera
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 2. O "forEach" é um loop. Ele executa o código para CADA botão encontrado.
buttons.forEach((button) => {
  
  // Dentro deste loop, a variável 'button' refere-se ao botão específico da vez
  const textSpan = button.querySelector('.btn-text');
  
  // IMPORTANTE: Guardamos o texto original ("Socio" ou "Modalidade")
  // para poder restaurar ele depois que a animação acabar.
  const originalText = textSpan.textContent;

  button.addEventListener('click', async () => {
    
    // Verifica apenas este botão específico
    if (button.classList.contains('loading') || button.classList.contains('done')) return;

    // --- Início da Animação ---
    button.classList.add('loading');
    
    await wait(3200); // Espera carregamento

    button.classList.add('done');
    textSpan.textContent = "Activated"; // Ou "Salvo", "Confirmado"...

    await wait(1600); // Espera conclusão

    // --- Reset ---
    button.classList.remove('loading', 'done');
    // Restaura o texto original ("Socio" volta a ser "Socio", não "Activate")
    textSpan.textContent = originalText;
  });

});
