import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {
  userForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private matDialogRef: MatDialogRef<UserDialogComponent>){
    this.userForm = this.formbuilder.group({
      firstName: ['',[ Validators.required,Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      lastName: ['',[Validators.required,Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      career: ['',[Validators.required,Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      courses: ['',[Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ, ]+$')]],
      email: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')] ]

    })

  }
  onSave(): void{
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.userForm.value)

    }
  }

}
