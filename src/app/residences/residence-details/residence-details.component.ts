import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence: any;
  residences = [
    { id: 1, name: 'EL FEL', description: 'Belle maison avec vue.', image: 'assets/images/R1.jpg', address: '123 Rue de Paris, France', status: 'Disponible' },
    { id: 2, name: 'Résidence 2', description: 'Maison en construction.', image: 'assets/images/R2.jpg', address: 'Inconnu', status: 'En Construction' },
    { id: 3, name: 'Résidence 3', description: 'Maison récemment vendue.', image: 'assets/images/R3.jpg', address: '789 Boulevard de Nice, France', status: 'Vendu' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.residence = this.residences.find(r => r.id === id);
      
      // Si la résidence n'existe pas, rediriger vers 404
      if (!this.residence) {
        this.router.navigate(['/404']);
      }
    });
  }

  showNext(): void {
    const currentIndex = this.residences.findIndex(r => r.id === this.residence.id);
    const nextIndex = (currentIndex + 1) % this.residences.length;
    this.router.navigate(['/residences', this.residences[nextIndex].id]);
  }
}