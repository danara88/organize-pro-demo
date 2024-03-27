export class Todo {
  public id: number;
  public title: string;
  public createdAt: Date;
  public completed: boolean;

  constructor(title: string) {
    this.id = Math.random();
    this.title = title;
    this.createdAt = new Date();
    this.completed = false;
  }
}
