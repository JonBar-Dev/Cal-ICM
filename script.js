document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculate-btn');
    const resultElement = document.getElementById('result');
    const classificationElement = document.getElementById('classification');
    const resultBox = document.getElementById('result-box');

    // Adiciona evento de clique ao botão
    calculateButton.addEventListener('click', calculateIMC);

    // Função para calcular o IMC
    function calculateIMC() {
        // Obtem os valores de peso e altura
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        // Validação de entrada
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultElement.textContent = 'Por favor, insira valores válidos para peso e altura.';
            classificationElement.textContent = '';
            resultBox.style.borderColor = '#ff6b6b';
            return;
        }

        // Cálculo do IMC
        const imc = weight / (height * height);
        const imcRounded = imc.toFixed(1);

        // Exibir resultado
        resultElement.textContent = `Seu IMC é: ${imcRounded}`;

        // Definir a classificação
        let classification = '';
        let color = '';

        if (imc < 18.5) {
            classification = 'Abaixo do peso';
            color = '#3498db'; // Azul
        } else if (imc < 25) {
            classification = 'Peso normal';
            color = '#2ecc71'; // Verde
        } else if (imc < 30) {
            classification = 'Sobrepeso';
            color = '#f39c12'; // Laranja
        } else if (imc < 35) {
            classification = 'Obesidade grau 1';
            color = '#e67e22'; // Laranja escuro
        } else if (imc < 40) {
            classification = 'Obesidade grau 2';
            color = '#e74c3c'; // Vermelho
        } else {
            classification = 'Obesidade grau 3';
            color = '#c0392b'; // Vermelho escuro
        }

        // Exibir classificação
        classificationElement.textContent = classification;
        classificationElement.style.color = color;
        resultBox.style.borderLeft = `5px solid ${color}`;
    }

    // Permitir cálculo ao pressionar a tecla Enter
    weightInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            calculateIMC();
        }
    });

    heightInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            calculateIMC();
        }
    });
});