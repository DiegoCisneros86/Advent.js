const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

function recursion(obj) {
  let item = [];
  for (let prop in obj) {
    const child = obj[prop];
    if (typeof child === 'object') {
      item = [...item, ...recursion(child)]
    }
    item.push(child);
  }
  return item;
}

function contains(store, product) {
  return recursion(store).some((item) => item === product)
}


console.log(contains(almacen, 'camiseta')) // true
console.log(contains(otroAlmacen, 'gameboy')) // false
