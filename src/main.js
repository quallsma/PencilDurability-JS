export class Pencil {
    constructor(paper, pointDurability, length){
        this.paper = paper;
        this.MAXIMUM_POINT_DURABILITY = 40000;
        this.pointDurability = pointDurability != undefined ? pointDurability : this.MAXIMUM_POINT_DURABILITY;
        this.MINIMUM_PENCIL_LENGTH = 0;
        this.length = length;
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

    getPaperText() {
        return this.paper.text;
    }

    getPointDurability() {
        return this.pointDurability;
    }

    getLength(){
        return this.length;
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

    isWhiteSpaceOrNewLine(char){
        return char == ' ' || char == '\n';
    }

    isUpperCase(char){
        return char == char.toUpperCase();
    }

    isPencilTooShort(){
        return this.length == this.MINIMUM_PENCIL_LENGTH;
    }
}

export class Paper {
    constructor(){
        this.text = '';
    }

    addText(text){
        this.text += text;
    }
}