import { NegociacaoController } from './controllers/NegociacaoController';
import {} from './polyfill/fetch';

let negociacaoController = new NegociacaoController();

document.querySelector('.form').onsubmit = negociacaoController.add.bind(negociacaoController);
document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController);