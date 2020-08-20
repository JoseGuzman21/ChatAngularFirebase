import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {
  this.afAuth.authState.subscribe(user => {
    console.log('estado del usuario: ', user);
    if (!user) {
      return;
    }
    this.usuario.nombre = user.displayName;
    this.usuario.uid = user.uid;
    this.usuario.photoURL = user.photoURL;
  });
}

    // tslint:disable-next-line: typedef
    logIn(tipo: string) {
      if (tipo === 'google') {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      } else {
        this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
      }
    }

    // tslint:disable-next-line: typedef
    logOut() {
      this.usuario = {};
      this.afAuth.auth.signOut();
    }

  // tslint:disable-next-line: typedef
  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats',
      ref => ref.orderBy('fecha', 'desc').limit(5));
    return this.itemsCollection.valueChanges()
      .pipe(map((mensajes: Mensaje[]) => {
        this.chats = [];
        for (let msj of mensajes) {
          this.chats.unshift(msj);
        }
        return this.chats;
      }));
  }

  // tslint:disable-next-line: typedef
  agregarMensaje(text: string) {
    const mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: text,
      fecha: new Date().getTime(),
      uid: this.usuario.uid,
      photoURL: this.usuario.photoURL
    };
    return this.itemsCollection.add(mensaje);
  }
}
