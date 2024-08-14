function codificarTexto() {
    const inputText = document.getElementById('inputText').value;
    try {
        const encodedText = btoa(inputText);
        document.getElementById('resultado').textContent = encodedText;
    } catch (error) {
        const contemMaiusculas = /[A-Z]/.test(inputText);
        const contemEspeciais = /[^a-zA-Z0-9]/.test(inputText);

        if (contemMaiusculas || contemEspeciais) {
            alert.error("Erro: O texto contém letras maiúsculas ou caracteres especiais.");
        } else {
            alert.error("Erro:", error.message);
        }
    
    }
}

function decodificarTexto() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decodedText = atob(inputText);
        document.getElementById('resultado').textContent = decodedText;
    } catch (error) {
        document.getElementById('resultado').textContent = 'Erro ao decodificar o texto: ' + error.message;
    }
}

function copiarTexto() {
    const resultado = document.getElementById('resultado').textContent;
    if (resultado) {
        const textoACopiar = resultado.replace(/^(Texto codificado|Texto decodificado):\s*/, '');
        navigator.clipboard.writeText(textoACopiar).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            alert('Erro ao copiar texto: ' + err);
        });
    }
}