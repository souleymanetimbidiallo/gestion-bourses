import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidature-form',
  templateUrl: './candidature-form.component.html',
  styleUrls: ['./candidature-form.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class CandidatureFormComponent {
  personalFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
  });
  academicFormGroup = this._formBuilder.group({
    academicCtrl: ['', Validators.required],
  });
  coverLetterFormGroup = this._formBuilder.group({
    coverLetterCtrl: ['', Validators.required],
  });
  cvFormGroup = this._formBuilder.group({
    cvCtrl: ['', Validators.required],
  });
  
  attachmentFormGroup = this._formBuilder.group({
    attachmentCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  public GetFileOnLoad(event: any) {
    var file = event.target.files[0];
    var element = document.getElementById("fakeFileInput") as HTMLInputElement | null;
    if(element != null) {
      element.value = file?.name;
    }
  }    
}
