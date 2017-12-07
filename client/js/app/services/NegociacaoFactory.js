'use strict';

System.register(['../models/NegociacaoAcao', '../models/NegociacaoOpcao'], function (_export, _context) {
  "use strict";

  var NegociacaoAcao, NegociacaoOpcao, _createClass, NegociacaoFactory;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_modelsNegociacaoAcao) {
      NegociacaoAcao = _modelsNegociacaoAcao.NegociacaoAcao;
    }, function (_modelsNegociacaoOpcao) {
      NegociacaoOpcao = _modelsNegociacaoOpcao.NegociacaoOpcao;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('NegociacaoFactory', NegociacaoFactory = function () {
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
      }());

      _export('NegociacaoFactory', NegociacaoFactory);
    }
  };
});
//# sourceMappingURL=NegociacaoFactory.js.map