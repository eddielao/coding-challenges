import { Component, EventEmitter, Input, OnInit, Output }
  from '@angular/core';

import { Task } from '../task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() taskIndex: number;
  @Input() task: Task;
  @Output() hideDetail = new EventEmitter();
  @Output() deleteDetail = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  DeleteDetail() {
    this.deleteDetail.emit(this.taskIndex);
  }

  HideDetail() {
    this.hideDetail.emit(null);
  }
}
