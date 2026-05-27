   // 1. Mostra data e hora atual no footer
    const dateLabel = document.querySelector('footer .label:last-child');
    function updateClock() {
      const now = new Date();
      const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      dateLabel.textContent = now.toLocaleString('pt-BR', options);
    }
    updateClock();
    setInterval(updateClock, 1000);

    // 2. Efeito de digitação na frase DevOps
    const quote = document.querySelector('.quote-block blockquote');
    const fullText = quote.textContent.trim();
    quote.textContent = '';
    quote.style.opacity = '1';
    let i = 0;
    function typeWriter() {
      if (i < fullText.length) {
        quote.textContent += fullText[i];
        i++;
        setTimeout(typeWriter, 22);
      }
    }
    setTimeout(typeWriter, 900);