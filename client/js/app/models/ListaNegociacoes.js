class ListaNegociacoes {

  constructor(armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  adciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
    this._armadilha(this);
  }

}