import { Component, OnInit } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [
    new Task('Task 1',
            'Create header component',
            'Major',
            'In Progress',
            new Date("July 31, 2017 08:00"),
            null),
    new Task('Task 2',
            'Create tasklist component',
            'Major',
            'In Progress',
            new Date("July 31, 2017 08:00"),
            null)
  ];

  constructor() { }

  ngOnInit() {
  }

}
