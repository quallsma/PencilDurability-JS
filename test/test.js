import { expect } from 'chai';
import sinon from 'sinon';
import { Pencil, Paper } from '../src/main';

describe('Pencil', () => {
    let pencil;
    describe('Writes', () => {
        it('should write text on paper', () => {
            pencil = new Pencil(new Paper());

            pencil.write('She sells sea shells');
            expect(pencil.getPaperText(), 'First Test').to.equal('She sells sea shells');

            pencil.write(' down by the sea shore')
            expect(pencil.getPaperText(), 'Second Test').to.equal('She sells sea shells down by the sea shore');
        });
    });
    

    describe('Point Durability', () => {
        beforeEach(() =>  {
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

        it('should be fully degraded before writing is completed', () => {
            pencil.write('Text');

            expect(pencil.getPointDurability(), 'Case 1').to.equal(0);
            expect(pencil.getPaperText(), 'Caes 2').to.equal("Tex");
        });
    });

    describe('Sharpen', () => {
        beforeEach(() =>  {
            pencil = new Pencil(new Paper(), 0, 1);
            pencil.sharpen();
        });

        it('should restore point durabilty to maximum', () => {
            expect(pencil.getPointDurability()).to.equal(40000);
        });

        it('should decrease length of pencil', () => {
            expect(pencil.getLength()).to.equal(0);
        });

        it('should not restore point durability when pencil is too short', () => {
            pencil.write('Text');
            pencil.sharpen();

            expect(pencil.getPointDurability()).to.equal(39995);
        });
    });

    describe('Erase', () => {
        beforeEach(() =>  {
            pencil = new Pencil(new Paper(), 40000, 100);
            pencil.write('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
        });

        it('should erase last occurance of the text, and replace with whitespaces', () => {
            pencil.erase('chuck');
            expect(pencil.getPaperText()).to.equal('How much wood would a woodchuck chuck if a woodchuck could       wood?');

            pencil.erase('chuck');
            expect(pencil.getPaperText()).to.equal('How much wood would a woodchuck chuck if a wood      could       wood?');
        });
    });

    describe('Eraser Durability', () => {
        it('should decrease by one per character', () => {
            pencil = new Pencil(new Paper(), 40000, 100, 10);
            pencil.write('I sat');
            pencil.erase('sat');
            expect(pencil.getEraserDurability()).to.equal(7);
        });

        it('should not be affected by whitespaces', () => {
            pencil = new Pencil(new Paper(), 40000, 100, 10);
            pencil.write('I sat');
            pencil.erase(' sat');
            expect(pencil.getEraserDurability()).to.equal(7);
        });

    });

    describe('Editing', () => {

    });
});