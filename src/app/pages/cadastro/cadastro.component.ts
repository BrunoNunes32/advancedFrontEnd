import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  addressForm = this.fb.group({
    id: '',
    firstName: [null, Validators.required],
    email: [null, Validators.required],
    phone: [null, Validators.required],
    password: [null, Validators.required]
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
