export class Pencil {

    constructor(){
        this.text = '';
    }

    write(text) {
        this.text += text;
    }

    getPaperText() {
        return this.text;
    }
}