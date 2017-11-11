class ListaNegociacoes {

  constructor() {
    this._negociacoes = [];
  }

  adciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return this._negociacoes;
  }

}