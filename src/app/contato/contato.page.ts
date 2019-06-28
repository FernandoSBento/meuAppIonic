import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  contato: Contato = new Contato();

  constructor(public fire: AngularFireDatabase,
    private rota: Router) { }

  ngOnInit() {
  }

  salvar() {
    this.fire.list('contato').push(this.contato);
    this.contato = new Contato();
    alert('salvo com sucesso');
    this.rota.navigate(['salvar-contato']);
  }



}
