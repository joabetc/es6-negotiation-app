import { ListaNegociacoes } from '../models/ListaNegociacoes';
import { Mensagem } from '../models/Mensagem';
import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { NegociacaoService } from '../services/NegociacaoService';
import { DateHelper } from '../helpers/DateHelper';
import { Bind } from '../helpers/Bind';
import { Negociacao } from '../models/Negociacao';

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

    this._service = new NegociacaoService();

    this._init();
  }
  
  _init() {
    
    this._service
      .list()
      .then(negociacoes => 
        negociacoes.forEach(negociacao => 
          this._listaNegociacoes.add(negociacao)))
      .catch(error => this._mensagem.texto = error);
  
    setInterval(() => {
      this.importaNegociacoes();
    }, 3000);
  }

  add(event) {

    event.preventDefault();

    let negociacao = this._criaNegociacao();

    this._service
      .add(negociacao)
      .then(message => {
        this._listaNegociacoes.add(negociacao);
        this._mensagem.texto = message;
        this._limpaFormulario();
      })
      .catch(error => this._mensagem.texto = error);
  }

  importaNegociacoes() {

    this._service
      .import(this._listaNegociacoes.negociacoes)
      .then(negociacoes => negociacoes.forEach(negociacao => {
          this._listaNegociacoes.add(negociacao);
          this._mensagem.texto = 'Negociações do período importadas com sucesso.';
        }))
      .catch(err => this._mensagem.texto = err);
  }

  apaga() {

    this._service
      .delete()
      .then(message => {
        this._mensagem.texto = message;
        this._listaNegociacoes.esvazia();
      })
      .catch(error => this._mensagem.texto = mensagem);
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