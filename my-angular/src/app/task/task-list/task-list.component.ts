import { Component, OnInit } from '@angular/core';

import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit{
  tasks: Task[] = [
    new Task('Task 1',
            'Create header component',
            'Major',
            'In Progress',
            new Date("July 31, 2017 08:00"),
            null)
  ];

  constructor() {}

  ngOnInit() {}
}
