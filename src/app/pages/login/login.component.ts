import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
    shipping: ['free', Validators.required],
  });

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private autorizacaoService: AutorizacaoService
  ) {}

  loginClick() {
    if (this.autorizacaoService.obterLoginStatus()) {
      this.autorizacaoService.deslogar();
    } else {
      this.autorizacaoService.autorizar();
    }
  }

  onSubmit(): void {
    this.loginClick();
    alert('Thanks!');
  }
}
