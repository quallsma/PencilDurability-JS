export class Pencil {

    constructor(paper, pointDurability){
        this.paper = paper;
        this.pointDurability = pointDurability;
    }

    write(text) {
        this.paper.addText(text);
    }

    getPaperText() {
        return this.paper.text;
    }

    getPointDurability() {
        return this.pointDurability;
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