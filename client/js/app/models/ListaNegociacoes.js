class ListaNegociacoes {

  constructor(context, armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
    this._context = context;
  }

  adciona(negociacao) {
    this._negociacoes.push(negociacao);
    // this._armadilha(this);
    Reflect.apply(this._armadilha, this._context, [this]);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
    // this._armadilha(this);
    Reflect.apply(this._armadilha, this._context, [this]);
  }

}