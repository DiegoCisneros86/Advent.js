function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let arbol = "";
    const objetoArbol = {
        hoja: "*",
        barra: "_",
        tronco: "#"
    };
    const {hoja, barra, tronco} = objetoArbol;

    for (let i = 1; i <= height; i++) {
        arbol = arbol.concat(barra.repeat(height - i), hoja.repeat(i+i-1), barra.repeat(height - i), '\n');
    }
    arbol = arbol.concat(barra.repeat(height - 1), tronco, barra.repeat(height - 1), '\n')
    arbol = arbol.concat(barra.repeat(height - 1), tronco, barra.repeat(height - 1))
    return arbol;
}

console.log(createXmasTree(10));