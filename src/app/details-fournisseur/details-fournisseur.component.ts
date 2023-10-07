import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-fournisseur',
  templateUrl: './details-fournisseur.component.html',
  styleUrls: ['./details-fournisseur.component.css']
})
export class DetailsFournisseurComponent {
  id = '';
  constructor(private ac:ActivatedRoute) {
    console.log(this.ac.snapshot.params['id']);
    this.id = this.ac.snapshot.params['id'];
  }
}
