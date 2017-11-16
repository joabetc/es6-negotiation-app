class NegociacaoService {

  constructor() {
    this._http = new HttpService();
  }

  obterNegociacoesDaSemana() {

    return new Promise((resolve, reject) => {
      
      this._http
        .get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
        })
        .catch(err => {
          console.log(err);
          reject('Não foi possível obter as negociações da semana.');
        })
    });
  }

  obterNegociacoesDaSemanaAnterior() {

    return new Promise((resolve, reject) => {

      this._http
      .get('negociacoes/anterior')
      .then(negociacoes => {
        resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
      })
      .catch(err => {
        console.log(err);
        reject('Não foi possível obter as negociações da semana anterior.');
      })
    });
  }

  obterNegociacoesDaSemanaRetrasada() {

    return new Promise((resolve, reject) => {
      
            this._http
            .get('negociacoes/retrasada')
            .then(negociacoes => {
              resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
            })
            .catch(err => {
              console.log(err);
              reject('Não foi possível obter as negociações da semana retrasada.');
            })
    });
  }

}