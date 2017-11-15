class NegociacaoService {

  obterNegociacoesDaSemana(cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/semana');
    
    xhr.onreadystatechange = () => {

      /*
        0: requisição não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição concluida e a resposta esta pronta
      */
      
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          cb(null, JSON.parse(xhr.responseText)
            .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
          );
            
        } else {
          console.log(xhr.responseText);
          cb('Não foi possível obter as negociações.');
        }
      }
    };

    xhr.send();
  }
}