import { Component } from '@angular/core';
import {ControlBase} from "./controls/control-base";
import {MetaService} from "./meta.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form-app';
  meta!: ControlBase[];
  data!: any;
  constructor(
    private metaService: MetaService,
    private dataService: DataService
  ) {}

  async ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.data = await this.dataService.getData();
    this.meta = (await this.metaService.getMeta()) as ControlBase[];
  }


}
