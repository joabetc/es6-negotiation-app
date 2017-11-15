class ProxyFactory {

  static create(object, props, action) {
    return new Proxy(new ListaNegociacoes(), {
      get(target, prop, receiver) {
          if (props.includes(prop) &&
                  typeof(target[prop]) == typeof(Function)) {
              return function() {
                  console.log(`interceptando ${prop}`);
                  Reflect.apply(target[prop], target, arguments);
                  return action(target);
              }
          }
  
          return Reflect.get(target, prop, receiver);
      }
    });
  }
}