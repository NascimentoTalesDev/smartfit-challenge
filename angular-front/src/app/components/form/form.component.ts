import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
    imports: [ButtonComponent, ReactiveFormsModule]
})
export class FormComponent {
  results = []
  formGroup!: FormGroup;

  constructor( private formBuilder: FormBuilder ){
    this.formGroup = this.formBuilder.group({
      time: new FormControl("", [Validators.required]),
      showClosed: new FormControl("", [Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.formGroup.value);
  }
}
