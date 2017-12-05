class NegociacaoService {

  constructor() {
    this._http = new HttpService();
  }

  obterNegociacoesDaSemana() {

    return this._http
      .get('negociacoes/semana')
      .then(negociacoes => {
        console.log(negociacoes);
        return negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
      })
      .catch(err => {
        console.log(err);
        throw new Error('Não foi possível obter as negociações da semana.');
      });
  }

  obterNegociacoesDaSemanaAnterior() {

    return this._http
      .get('negociacoes/anterior')
      .then(negociacoes => {
        console.log(negociacoes);
        return negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
      })
      .catch(err => {
        console.log(err);
        throw new Error('Não foi possível obter as negociações da semana anterior.');
      });
  }

  obterNegociacoesDaSemanaRetrasada() {

    return this._http
      .get('negociacoes/retrasada')
      .then(negociacoes => {
        console.log(negociacoes);
        return negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
      })
      .catch(err => {
        console.log(err);
        throw new Error('Não foi possível obter as negociações da semana retrasada.');
      });
  }

  obterNegociacoes() {
    return Promise.all([
      this.obterNegociacoesDaSemana(),
      this.obterNegociacoesDaSemanaAnterior(),
      this.obterNegociacoesDaSemanaRetrasada()
    ]).then(periodos => {
      let negociacoes = periodos.reduce(
        (dados, periodo) => dados.concat(periodo), []);
        return negociacoes;
    }).catch(err => {
      throw new Error(err);
    });
  }

  add(negociacao) {
    return ConnectionFactory
    .getConnection()
    .then(connection => new NegociacaoDao(connection))
    .then(dao => dao.add(negociacao))
    .then(() => 'Negociação adicionada com sucesso')
    .catch(() => {
      throw new Error('Não foi possível adicionar a negociação');
    });
  }

}