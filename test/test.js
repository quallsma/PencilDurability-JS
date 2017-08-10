import { expect } from 'chai';
import sinon from 'sinon';
import { Pencil } from '../src/main';

describe('Pencil', () => {
    it('should write text on paper', () => {
        var pencil = new Pencil();

        pencil.write('She sells sea shells');
        expect(pencil.getPaperText(), 'First Test').to.equal('She sells sea shells');

        pencil.write(' down by the sea shore')
        expect(pencil.getPaperText(), 'Second Test').to.equal('She sells sea shells down by the sea shore');
    });
});