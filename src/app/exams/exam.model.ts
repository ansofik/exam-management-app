export class Exam {
    public id: string;
    public name: string;
    public published: boolean;

    constructor(id: string, name: string, published: boolean) {
        this.id = id;
        this.name = name;
        this.published = published;
    }
}

export class Option {
    constructor(
        public optionId: string,
        public optionText: string,
        public correct: boolean
    ) {}
}

export class Question {
    constructor(
        public questionId: string,
        public questionText: string,
        public options: Option[]){}
} 

export class SelectedExam {
    constructor(
        public id: string,
        public name: string,
        public questions: Question[]) {}
}