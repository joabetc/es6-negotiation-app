class Conta {
  
      constructor(titular, conta) {
          this.titular = titular;
          this.conta = conta;
          this.saldo = 0.0
      }
  
      deposita(valor) {
          console.log('Valor depositado: ' + valor);
          this.saldo+=valor; 
      }
  }