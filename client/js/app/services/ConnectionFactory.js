var stores = ['negociacoes'];
var version = 1;
var dbName = 'negociacao';

class ConnectionFactory {
  
  constructor() {
    throw new Error('Não é possível criar instâncias de ConnectionFactory');
  }

  static getConnection() {
    return new Promise((resolve, reject) => {
      let openRequest = window.indexedDB.open('negociacao', 1);

      openRequest.onupgradeneeded = e => {

      };

      openRequest.onsuccess = e => {

      };

      openRequest.onerror = e => {

      };
    });
  }

}