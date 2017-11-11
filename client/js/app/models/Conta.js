class Conta {
  
      constructor(titular, conta) {
          this.titular = titular;
          this.conta = conta;
          this._saldo = 0.0
      }
  
      deposita(valor) {
          console.log('Valor depositado: ' + valor);
          this._saldo+=valor; 
      }
  
      getSaldo() {
          return this._saldo;
      }
  }