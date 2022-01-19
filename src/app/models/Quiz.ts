export class Quiz {
  id: string = '';
  question: string = '';
  description: string = '';
  answers: any;
  multiple_correct_answers: boolean = true;
  correct_answers: any;
  explanation: string = '';
  tip: any;
  tags: Array<any> = [];
  category: string = '';
  difficulty: string = '';

  constructor() {}
}
