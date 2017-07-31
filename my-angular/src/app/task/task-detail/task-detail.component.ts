import { Component, EventEmitter, OnInit, Output }
  from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Output() hideDetail = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  HideDetail() {
    this.hideDetail.emit(null);
  }
}
