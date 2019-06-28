import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/entidade/contato';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.page.html',
  styleUrls: ['./salvar-contato.page.scss'],
})
export class SalvarContatoPage implements OnInit {

  listaContatos: Observable<Contato[]>;

  constructor(private fire: AngularFireDatabase,
    ){
    
    this.listaContatos = this.fire.list<Contato>('contato').snapshotChanges().pipe(

      map( lista => lista.map( linha => ({ key: linha.payload.key, ... linha.payload.val() }) ) )
      
      );
  }
  

  ngOnInit() {
  }

}
