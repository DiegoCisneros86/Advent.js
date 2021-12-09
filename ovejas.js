const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
    // aquí tu magia
    return ovejas.filter((oveja) => {
        const a = /a/i;
        const n = /n/i;
        let inlcudeA = a.test(oveja.name);
        let inlcudeN = n.test(oveja.name);
        return oveja.color === 'rojo' && inlcudeA && inlcudeN;
    })
  }

console.log(contarOvejas(ovejas))
