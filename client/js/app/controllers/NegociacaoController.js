class NegociacaoController {
  
  constructor() {

    let $ = document.querySelector.bind(document);
    
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'add', 'esvazia', 'sort', 'reverseOrder');
      
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto');

    this._ordemAtual = '';

    this._init();
  }
  
  _init() {
    
    ConnectionFactory
      .getConnection()
      .then(connection => new NegociacaoDao(connection))
      .then(dao => dao.listAll())
      .then(negociacoes => 
        negociacoes.forEach(negociacao => 
          this._listaNegociacoes.add(negociacao)))
      .catch(error => {
        console.log(error);
        this._mensagem = error;
      });
  
    setInterval(() => {
      this.importaNegociacoes();
    }, 3000);
  }

  add(event) {

    event.preventDefault();

    let negociacao = this._criaNegociacao();

    new NegociacaoService()
      .add(negociacao)
      .then(message => {
        this._listaNegociacoes.add(negociacao);
        this._mensagem.texto = message;
        this._limpaFormulario();
      })
      .catch(error => this._mensagem.texto = error);
  }

  importaNegociacoes() {
    
    let service = new NegociacaoService();

    service
      .obterNegociacoes()
      .then(negociacoes => 
        negociacoes.filter(negociacao => 
          !this._listaNegociacoes.negociacoes.some(negociacaoExitente => 
            JSON.stringify(negociacao) == JSON.stringify(negociacaoExitente)))
      )
      .then(negociacoes => negociacoes.forEach(negociacao => {
          this._listaNegociacoes.add(negociacao);
          this._mensagem.texto = 'Negociações do período importadas com sucesso.';
        }))
      .catch(err => this._mensagem.texto = err);
  }

  apaga() {

    ConnectionFactory
      .getConnection()
      .then(connection => new NegociacaoDao(connection))
      .then(dao => dao.deleteAll())
      .then(mensagem => {
        this._mensagem.texto = mensagem;
        this._listaNegociacoes.esvazia();
      });

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