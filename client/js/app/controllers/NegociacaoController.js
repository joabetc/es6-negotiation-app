'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoController = function () {
  function NegociacaoController() {
    _classCallCheck(this, NegociacaoController);

    var $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'add', 'esvazia', 'sort', 'reverseOrder');

    this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');

    this._ordemAtual = '';

    this._service = new NegociacaoService();

    this._init();
  }

  _createClass(NegociacaoController, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      this._service.list().then(function (negociacoes) {
        return negociacoes.forEach(function (negociacao) {
          return _this._listaNegociacoes.add(negociacao);
        });
      }).catch(function (error) {
        return _this._mensagem.texto = error;
      });

      setInterval(function () {
        _this.importaNegociacoes();
      }, 3000);
    }
  }, {
    key: 'add',
    value: function add(event) {
      var _this2 = this;

      event.preventDefault();

      var negociacao = this._criaNegociacao();

      this._service.add(negociacao).then(function (message) {
        _this2._listaNegociacoes.add(negociacao);
        _this2._mensagem.texto = message;
        _this2._limpaFormulario();
      }).catch(function (error) {
        return _this2._mensagem.texto = error;
      });
    }
  }, {
    key: 'importaNegociacoes',
    value: function importaNegociacoes() {
      var _this3 = this;

      this._service.import(this._listaNegociacoes.negociacoes).then(function (negociacoes) {
        return negociacoes.forEach(function (negociacao) {
          _this3._listaNegociacoes.add(negociacao);
          _this3._mensagem.texto = 'Negociações do período importadas com sucesso.';
        });
      }).catch(function (err) {
        return _this3._mensagem.texto = err;
      });
    }
  }, {
    key: 'apaga',
    value: function apaga() {
      var _this4 = this;

      this._service.delete().then(function (message) {
        _this4._mensagem.texto = message;
        _this4._listaNegociacoes.esvazia();
      }).catch(function (error) {
        return _this4._mensagem.texto = mensagem;
      });
    }
  }, {
    key: '_criaNegociacao',
    value: function _criaNegociacao() {
      return NegociacaoFactory.create('opcao', new Negociacao(DateHelper.textoParaData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value)));
    }
  }, {
    key: '_limpaFormulario',
    value: function _limpaFormulario() {
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;

      this._inputData.focus();
    }
  }, {
    key: 'sort',
    value: function sort(column) {
      if (this._ordemAtual == column) {
        this._listaNegociacoes.reverseOrder();
      } else {
        this._listaNegociacoes.sort(function (a, b) {
          return a[column] - b[column];
        });
      }
      this._ordemAtual = column;
    }
  }]);

  return NegociacaoController;
}();
//# sourceMappingURL=NegociacaoController.js.map