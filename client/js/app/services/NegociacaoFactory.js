'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoFactory = function () {
  function NegociacaoFactory() {
    _classCallCheck(this, NegociacaoFactory);
  }

  _createClass(NegociacaoFactory, null, [{
    key: 'create',
    value: function create(tipoNegociacao, dados) {
      if (tipoNegociacao == 'opcao') {
        return new NegociacaoOpcao(dados.data, dados.quantidade, dados.valor);
      }

      return new NegociacaoAcao(dados.data, dados.quantidade, dados.valor);
    }
  }]);

  return NegociacaoFactory;
}();
//# sourceMappingURL=NegociacaoFactory.js.map