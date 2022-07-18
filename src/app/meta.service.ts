import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ControlBase} from "./controls/control-base";
import {map,lastValueFrom} from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private http: HttpClient) {}

  async getMeta(): Promise<ControlBase[]> {
    return lastValueFrom(
      this.http
        .get('http://localhost:8080/meta.json')
        .pipe(
          map((meta: any) => meta.sort((a: any, b: any) => a.order - b.order))
        )
    );
  }

  /***
   * C ETAIT PAS MOI
   * MERCIJE TIENS PBONNE
   * WHICH THE BEST DAYS
   * @param controls
   * @param data
   */
  toFormGroup(controls: ControlBase[], data: any) {
    const group: any = {};

    controls.forEach((control) => {
      if (control.controlType !== 'label') {
        group[control.key] = control.required
          ? new FormControl(data[control.key] || '', Validators.required)
          : new FormControl(data[control.key] || '');
      }
    });
    return new FormGroup(group);
  }
}
