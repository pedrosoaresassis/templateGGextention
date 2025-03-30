const replaceTitle = () => {
  // Seleciona todos os títulos de vídeo com a classe 'yt-simple-endpoint' e o ID 'video-title'
  const titles = document.querySelectorAll('.yt-simple-endpoint#video-title');

  // Itera sobre todos os elementos de título encontrados e altera o conteúdo
  titles.forEach((title) => {
    title.textContent = 'asndjdms'; // Altera o conteúdo do título
  });
};

// Configura o intervalo para rodar a cada 1 segundo
setInterval(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Executa o script na aba ativa, chamando a função replaceTitle
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replaceTitle
  });
}, 1000);  // 1000ms = 1 segundo
