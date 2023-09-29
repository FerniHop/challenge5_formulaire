import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class User {
  constructor(
      public firstname: string,
      public lastname: string,
      public email: string,
      public password: string
  ) {}
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  // Tu instancies ton objet avec des valeurs initiales
  model: User = new User("", "", "", "");

  constructor(){}

  onSubmit(): void{
    // Formulaire envoyé
    console.log(this.model);
  }
}
