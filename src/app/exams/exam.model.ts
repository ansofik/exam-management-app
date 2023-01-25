export class Exam {
    public id: number;
    public name: string;
    public description: string;
    /* public maxpoints: number; */
    /* public date: Date; */

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

}