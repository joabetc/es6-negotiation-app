class NegociacaoController {
  
  constructor() {

    let $ = document.querySelector.bind(document);
    
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona', 'esvazia', 'sort', 'reverseOrder');
      
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto');

    this._ordemAtual = '';
  }

  adiciona(event) {

    event.preventDefault();

    ConnectionFactory
      .getConnection()
      .then(connection => {
        
        let negociacao = this._criaNegociacao();
        
        new NegociacaoDao(connection)
          .add(negociacao)
          .then(() => {
            this._listaNegociacoes.adiciona(negociacao);
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            this._limpaFormulario();
          })
      })
      .catch(err => this._mensagem.texto = err);

  }

  importaNegociacoes() {
    
    let service = new NegociacaoService();

    service
      .obterNegociacoes()
      .then(negociacoes => {
        negociacoes.forEach(negociacao => {
          this._listaNegociacoes.adiciona(negociacao);
          this._mensagem.texto = 'Negociações do período importadas com sucesso.';
        })
      })
      .catch(err => this._mensagem.texto = err);
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas com sucesso';
  }

  _criaNegociacao() {
    return NegociacaoFactory.create(
      'opcao', 
      new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        parseInt(this._inputQuantidade.value),
        parseFloat(this._inputValor.value)
      )
    );
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }

  sort(column) {
    if (this._ordemAtual == column) {
      this._listaNegociacoes.reverseOrder();
    } else {
      this._listaNegociacoes.sort((a, b) => a[column] - b[column]);
    }
    this._ordemAtual = column;
  }
}