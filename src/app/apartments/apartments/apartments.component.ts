import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments = [
    { apartNum: 1, floorNum: 1, surface: 80, terrace: true, surfaceterrace: 15, category: 'T3', ResidenceId: 1 },
    { apartNum: 2, floorNum: 2, surface: 60, terrace: false, surfaceterrace: 0, category: 'T2', ResidenceId: 1 },
    { apartNum: 3, floorNum: 3, surface: 100, terrace: true, surfaceterrace: 20, category: 'T4', ResidenceId: 2 }
  ];

  constructor(private router: Router) {}

  addApartment() {
    this.router.navigate(['/add-apartment']); // Navigates to the add-apartment page
  }
}
