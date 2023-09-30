import { Component } from '@angular/core';
import { Fournisseur } from 'src/core/fournisseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css'],
})
export class ListFournisseurComponent {
  fournisseurs: Fournisseur[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
    { idFournisseur: 400, code: '40ABC452', libelle: 'asus' },
  ];

  deleteFournisseur(f: Fournisseur) {
    const index = this.fournisseurs.indexOf(f);
    if (index != -1) {
      this.fournisseurs.splice(index, 1);
    }
  }
}
