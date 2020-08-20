import { Component } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private sc: ChatService) { }

  // tslint:disable-next-line: typedef
  ingresar(tipo: string) {
    this.sc.logIn(tipo);
    console.log('tipo: ', tipo);
  }

}
