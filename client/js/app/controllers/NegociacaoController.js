class NegociacaoController {
  
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    let data = new Date(this._inputData.value.split('-'));
    // or
    // let data = new Date(this._inputData.replace(/-/, ','));

    console.log(typeof(this._inputData.value));

    console.log(this._inputData.value);

    let negociacao = new Negociacao(
      this._inputData.value,
      this._inputQuantidade,
      this._inputValor
    );

    console.log(negociacao);
  }

}