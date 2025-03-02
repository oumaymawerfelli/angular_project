import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
})
export class AddResidenceComponent implements OnInit {
  isUpdateMode = false;
  currentResidenceId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isUpdateMode = true;
        this.currentResidenceId = +id;
        // Ici, récupérer les données de la résidence à mettre à jour
      }
    });
  }
}