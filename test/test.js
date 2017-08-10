import { expect } from 'chai';
import sinon from 'sinon';
import { Pencil, Paper } from '../src/main';

describe('Pencil', () => {
    describe('Writes', () => {
        it('should write text on paper', () => {
            var paper = new Paper();
            var pencil = new Pencil(paper);

            pencil.write('She sells sea shells');
            expect(pencil.getPaperText(), 'First Test').to.equal('She sells sea shells');

            pencil.write(' down by the sea shore')
            expect(pencil.getPaperText(), 'Second Test').to.equal('She sells sea shells down by the sea shore');
        });
    });
    

    describe('Point Durability', () => {
        let pencil;
        beforeEach(function() {
            pencil = new Pencil(new Paper(), 4);
        });

        it('should decrease by one with lowercase letters', () => {
            pencil.write('t');

            expect(pencil.getPointDurability(), 'lower case').to.equal(3);
        });

        it('should decrease by two with capital letters', () => {
            pencil.write('T');

            expect(pencil.getPointDurability(), 'upper case').to.equal(2);
        });

        it('should not be affected by white spaces', () => {
            pencil.write(' ');

            expect(pencil.getPointDurability(), 'White spaces').to.equal(4);
        });

        it('should not be affected by new line', () => {
            pencil.write('\n');

            expect(pencil.getPointDurability(), 'New Line').to.equal(4);
        });
    });
});