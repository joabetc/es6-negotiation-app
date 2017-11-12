class ListaNegociacoes {

  constructor(hook) {
    this._negociacoes = [];
    this._hook = hook;
  }

  adciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._hook(this);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
    this._hook(this);
  }

}