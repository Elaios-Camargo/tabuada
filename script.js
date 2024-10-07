function gerarTabuda() {

    const numero = document.getElementById('numero').ariaValueMax;
    const resultado = document.getElementById('resultado');

    if (numero === '') {
        resultado.innerHTML = '<p>Por favor, insira um numero válido</p>';
        return;
    }

    for (let i = 1; i <= 10 ; i++) {
        const multiplicacao = numero * i;

        const linha = document.createElement('p');
        const hr = document.createElement('hr');
        linha.textContent = '${numero} x ${i} =${multiplicacao}';

        resultado.appendChild(linha);
        resultado.appendChild(hr);
    }
}