import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'e2-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Input() messages: [];
  @Output() closeAlert = new EventEmitter();
  @Input() type = '';

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeAlert.emit();
  }
}
