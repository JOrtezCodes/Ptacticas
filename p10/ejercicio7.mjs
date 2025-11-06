import { stdin, stdout } from 'process';
import readline from 'readline';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

function crearCalculadoraAvanzada(operacion) {
  console.log(`Nivel 1 (Scope externo) - Operación: ${operacion}`);
  
  return function(primerNumero) {
    console.log(`Nivel 2 (Scope intermedio) - Primer número: ${primerNumero}`);
    
    return function(segundoNumero) {
      console.log(`Nivel 3 (Scope interno) - Segundo número: ${segundoNumero}`);
      
      let resultado;
      
      if (operacion === 'suma') {
        resultado = primerNumero + segundoNumero;
      } else if (operacion === 'resta') {
        resultado = primerNumero - segundoNumero;
      } else if (operacion === 'multiplicacion') {
        resultado = primerNumero * segundoNumero;
      } else if (operacion === 'division') {
        resultado = primerNumero / segundoNumero;
      }
      
      console.log(`\nResultado de ${operacion}: ${resultado}\n`);
      return resultado;
    };
  };
}

rl.question('Operación (suma/resta/multiplicacion/division): ', (op) => {
  rl.question('Primer número: ', (num1) => {
    rl.question('Segundo número: ', (num2) => {
      
      let calculadora = crearCalculadoraAvanzada(op);
      let conPrimerNum = calculadora(parseFloat(num1));
      conPrimerNum(parseFloat(num2));
      
      rl.close();
    });
  });
});