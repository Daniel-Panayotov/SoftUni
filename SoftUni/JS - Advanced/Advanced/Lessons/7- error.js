let { expect } = require('chai');

function sum(a, b) {
    return a + b;
}

describe('Main', function () {
    it('works ', () => {
        expect(sum(5, 3)).to.equal(8);
    });
});
