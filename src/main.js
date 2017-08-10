export class Pencil {

    constructor(paper, pointDurability){
        this.paper = paper;
        this.pointDurability = pointDurability;
    }

    write(text) {
        for(let index = 0; index < text.length; index++){
            if(this.isWhiteSpaceOrNewLine(text[index]))
                continue;

            this.isUpperCase(text[index]) ? this.pointDurability -= 2 : this.pointDurability--;
        }

        this.paper.addText(text);
    }

    getPaperText() {
        return this.paper.text;
    }

    getPointDurability() {
        return this.pointDurability;
    }

    isWhiteSpaceOrNewLine(char){
        return char == ' ' || char == '\n';
    }

    isUpperCase(char){
        return char == char.toUpperCase();
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