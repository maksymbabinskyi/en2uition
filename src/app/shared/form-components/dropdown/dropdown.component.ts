import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControlOption } from '../form-control-option';
import { FormControlComponentBase } from '../form-control-component-base';
import { AppService } from '../../../app.service';

declare let require: any;

@Component({
  selector: 'e2-dropdown',
  template: `
    <select class="e2-select" [formControl]="control" #dropdown></select>
  `
})
export class DropdownComponent extends FormControlComponentBase implements OnInit {

  @Input()
  options: FormControlOption[];

  @Input()
  searchEnabled = false;

  @Output() change = new EventEmitter();

  @ViewChild('dropdown')
  dropdown;

  private choices: any;

  constructor(private appService: AppService) {
    super();
  }

  ngOnInit() {
    if (this.appService.isServer()) {
      return;
    }

    const Choices = require('choices.js');

    this.choices = new Choices(this.dropdown.nativeElement, {
      choices: this.options,
      searchEnabled: this.searchEnabled
    });

    this.choices.setChoiceByValue(this.control.value);
    this.dropdown.nativeElement.addEventListener('choice', (event) => {
      this.control.setValue(event.detail.choice.value);
      this.change.emit(event.detail.choice.value);
    });
  }
}
