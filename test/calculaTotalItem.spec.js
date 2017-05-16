const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { calculaTotalItem } = require('../app/calculaTotalItem');

lab.test('verificar retorno maça', (done) => {
    expect(calculaTotalItem(2, 4)).to.equal({ produto: 'Maça', valor: 18});
    done();
});

lab.test('verificar retorno pera', (done) => {
    expect(calculaTotalItem(3, 1)).to.equal({ produto: 'Pera', valor: 3});
    done();
});

lab.test('verificar retorno maça com desconto', (done) => {
    expect(calculaTotalItem(2, 4, 2)).to.equal({ produto: 'Maça', valor: 16});
    done();
});

