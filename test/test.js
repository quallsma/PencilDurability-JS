import { expect } from 'chai';
import sinon from 'sinon';
import { Pencil, Paper } from '../src/main';

describe('Pencil', () => {
    describe('Write Method', () => {
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
        it('should not be affected by white spaces', () => {
            var pencil = new Pencil(new Paper(), 4);

            pencil.write(' ');

            expect(pencil.getPointDurability(), 'White spaces').to.equal(4);
        });
    });
});