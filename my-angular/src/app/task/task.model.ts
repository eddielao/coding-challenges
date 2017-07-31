export class Task {
  public title: string;
  public description: string;
  public priority: string;
  public status: string;
  public createDate: Date;
  public dueDate: Date;
  public modDate: Date;
  public parent: Task;

  constructor(title: string, desc: string, priority: string,
              status: string, due: Date, parent: Task) {
    this.title = title;
    this.description = desc;
    this.priority = priority;
    this.status = status;
    this.createDate = new Date();
    this.dueDate = due;
    this.modDate = new Date();
    this.parent = parent;
  }

  GetDueDate() {
    return this.dueDate.getFullYear() + "-" +
          this.dueDate.getMonth() + "-" +
          this.dueDate.getDate();
  }
}
