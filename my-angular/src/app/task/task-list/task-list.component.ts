import { Component, EventEmitter, Input, OnInit, Output }
  from '@angular/core';

import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit{
  @Input() tasks: Task[];
  @Output() displayDetail= new EventEmitter();

  constructor() {}

  ngOnInit() {}

  DisplayDetail() {
    this.displayDetail.emit(null);
  }
}
