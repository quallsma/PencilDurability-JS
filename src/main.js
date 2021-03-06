import { Paper } from './Paper';

export class Pencil {
    constructor(paper, pointDurability, pencilLength, eraserDurability){
        this.paper = paper;
        this.MAXIMUM_POINT_DURABILITY = 40000;
        this.pointDurability = pointDurability != undefined ? pointDurability : this.MAXIMUM_POINT_DURABILITY;
        this.MINIMUM_PENCIL_LENGTH = 0;
        this.length = pencilLength;
        this.eraserDurability = eraserDurability;
    }

    write(text) {
        this.paper.addText(this.getTextToWrite(text));
    }

    sharpen(){
        if(this.isPencilTooShort())
            return;

        this.pointDurability = this.MAXIMUM_POINT_DURABILITY;
        this.length--;
    }

    erase(text){
        let wordsArray = this.paper.text.split(' ');

        if(this.isEraserDurabilityNotEnough(text)){
            text = this.getTextToErase(text);
            this.paper.text = this.findAndReplaceWithSpaces(text, wordsArray).join(' ');
            this.eraserDurability = 0;
        } else {
            this.eraserDurability -= text.trim().length;
            this.paper.text = this.findAndReplaceWithSpaces(text, wordsArray).join(' ');
        }
    }

    edit(text){
        let index = this.paper.text.indexOf('  ');
        for(let x = 0; x < text.length ; x++)
            this.paper.text = this.replaceCharAtIndex(index + 1 + x, text.charAt(x));
    }

    replaceCharAtIndex(letterIndex, replacement){
        return this.paper.text.substr(0, letterIndex) + this.getReplacement(letterIndex, replacement) + this.paper.text.substr(letterIndex + 1);    
    }

    findAndReplaceWithSpaces(text, words) {
        for (let x = words.length - 1; x >= 0; x--){
            if (words[x].search(text) > -1){
                words[x] = words[x].replace(text, this.getSpacesToReplace(text));
                break;
            }
        }
        return words;
    }

    getReplacement(letterIndex, replacement) {
        if(this.paper.text[letterIndex] !== ' ')
            replacement = '@';
        return replacement;
    }

    getPaperText() {
        return this.paper.text;
    }

    getEraserDurability() {
        return this.eraserDurability;
    }

    getPointDurability() {
        return this.pointDurability;
    }

    getLength(){
        return this.length;
    }

    getSpacesToReplace(text) {
        return ' '.repeat(text.length);
    }

    getTextToWrite(text){
        let textToPaper = '';
        for(let index = 0; index < text.length && this.pointDurability > 0; index++){
            textToPaper += text[index];

            if(this.isWhiteSpaceOrNewLine(text[index]))
                continue;

            this.isUpperCase(text[index]) ? this.pointDurability -= 2 : this.pointDurability--;
        }
        return textToPaper;
    }
    
    getTextToErase(text) {
        for(let num = text.trim().length - this.eraserDurability; num > 0; num--){
            text = text.substring(1);
        }
        return text;
    }

    isWhiteSpaceOrNewLine(char){
        return char == ' ' || char == '\n';
    }

    isUpperCase(char){
        return char == char.toUpperCase();
    }

    isPencilTooShort(){
        return this.length == this.MINIMUM_PENCIL_LENGTH;
    }

    isEraserDurabilityNotEnough(text){
        return this.eraserDurability < text.trim().length;
    }
}