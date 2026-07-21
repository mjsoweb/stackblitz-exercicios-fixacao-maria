// projeto/conversor.js

class Conversor {
    // 1. Conversão de Temperatura (Celsius para Fahrenheit)
    celsiusParaFahrenheit(celsius) {
        return (9 / 5) * celsius + 32;
    }

    // 2. Conversão de Distância (Quilômetros para Milhas)
    quilometrosParaMilhas(km) {
        return km * 0.621371;
    }

    // 3. Conversão de Tempo (Minutos para Horas)
    minutosParaHoras(minutos) {
        return minutos / 60;
    }
}

// Exportando a classe para que outros arquivos possam usá-la
export { Conversor };
