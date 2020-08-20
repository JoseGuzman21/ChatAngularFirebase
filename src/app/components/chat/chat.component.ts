import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje = '';
  elemento: any;

  constructor(public cs: ChatService) {
    this.cs.cargarMensajes()
      .subscribe( () => {
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        });
      });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  // tslint:disable-next-line: typedef
  enviarMensaje() {
    if (this.mensaje.length === 0) {
      return;
    }
    this.cs.agregarMensaje(this.mensaje)
      .then(() => this.mensaje = '')
      .catch((err) => console.log('error', err));

  }

  // tslint:disable-next-line: typedef
  cargarMensaje() {
    this.cs.cargarMensajes().subscribe( () => {
      this.elemento.scrollTop = this.elemento.scrollHeight;
    });
  }
}
