import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TextInputComponent } from './controls/text-input/text-input.component';
import {LabelComponent} from "./controls/label/label.component";
import {DropdownComponent} from "./controls/dropdown/dropdown.component";
import {CheckboxComponent} from "./controls/checkbox/checkbox.component";
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {ControlComponent} from "./control/control.component";

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,LabelComponent,
    DropdownComponent,CheckboxComponent,DynamicFormComponent,ControlComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
