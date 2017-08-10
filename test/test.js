import { expect } from 'chai';
import sinon from 'sinon';
import { Pencil, Paper } from '../src/main';

describe('Pencil', () => {
    it('should write text on paper', () => {
        var PaperStub = sinon.createStubInstance(Paper);
        var pencil = new Pencil(PaperStub);

        pencil.write("She sells sea shells");
        pencil.write(" down by the sea shore");

        expect(pencil.getPaperText()).to.equal('She sells sea shells down by the sea shore');
    });
});