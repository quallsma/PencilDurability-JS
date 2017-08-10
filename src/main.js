export class Pencil {

    constructor(paper){
        this.paper = paper;
    }

    write(text) {
        this.paper.addText(text);
    }

    getPaperText() {
        return this.paper.text;
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