import {Component, Input, OnInit} from '@angular/core';
import {ControlBase} from "../control-base";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() meta!: ControlBase;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
