import { Component, OnInit } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  displayDetail: boolean;

  tasks: Task[] = [
    new Task('Task 1',
            'Design components per wireframe',
            'Critical',
            'Done',
            new Date("July 31, 2017 08:00"),
            null),
    new Task('Task 2',
            'Create app component',
            'Major',
            'Done',
            new Date("July 31, 2017 08:00"),
            null),
    new Task('Task 3',
            'Create task component',
            'Major',
            'Done',
            new Date("July 31, 2017 08:00"),
            null),
    new Task('Task 4',
            'Break task component into sub-components',
            'Major',
            'In Progress',
            new Date("July 31, 2017 08:00"),
            null),
    new Task('Task 5',
            'Create task detail component',
            'Major',
            'Done',
            new Date("July 31, 2017 08:00"),
            null)
  ];

  constructor() {
    this.displayDetail = false;
  }

  ngOnInit() {
  }

  CreateTask() {
    this.displayDetail = false;
    this.tasks.push(new Task(`Task ${ this.tasks.length+1 }`,
            'description',
            'priority',
            'status',
            new Date("July 31, 2017 08:00"),
            null));
  }

  DeleteDetail(i: number) {
    this.tasks = this.tasks.slice(0, i).concat(this.tasks.slice(i+1, this.tasks.length));
  }

  DisplayDetail() {
    this.displayDetail = true;
  }

  HideDetail() {
    this.displayDetail = false;
  }
}
