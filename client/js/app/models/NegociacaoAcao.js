'use strict';

System.register(['./Negociacao'], function (_export, _context) {
  "use strict";

  var Negociacao, NegociacaoAcao;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_Negociacao2) {
      Negociacao = _Negociacao2.Negociacao;
    }],
    execute: function () {
      _export('NegociacaoAcao', NegociacaoAcao = function (_Negociacao) {
        _inherits(NegociacaoAcao, _Negociacao);

        function NegociacaoAcao() {
          _classCallCheck(this, NegociacaoAcao);

          return _possibleConstructorReturn(this, (NegociacaoAcao.__proto__ || Object.getPrototypeOf(NegociacaoAcao)).apply(this, arguments));
        }

        return NegociacaoAcao;
      }(Negociacao));

      _export('NegociacaoAcao', NegociacaoAcao);
    }
  };
});
//# sourceMappingURL=NegociacaoAcao.js.map