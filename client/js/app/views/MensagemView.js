class MensagemView {

  constructor(element) {
    this._element = element;
  }

  _template(model) {
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
  }

  update(model) {
    this._element.innerHTML = this._template(model);
  }

}