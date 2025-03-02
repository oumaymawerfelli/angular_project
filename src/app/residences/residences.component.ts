import { Component } from '@angular/core';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchText: string = ''; // Texte de recherche

  residences = [
    { id: 1, name: 'El fel', description: 'Belle maison avec vue.', image: 'assets/images/R1.jpg', address: 'Borj Cedria', status: 'Disponible', showAddress: false, isLiked: false },
    { id: 2, name: 'El yasmine', description: 'Maison en construction.', image: 'assets/images/R2.jpg', address: 'Inconnu', status: 'En Construction', showAddress: false, isLiked: false },
    { id: 3, name: 'El Arij', description: 'Maison récemment vendue.', image: 'assets/images/R3.jpg', address: 'Ezzahra', status: 'Vendu', showAddress: false, isLiked: false }
  ];

  // Fonction qui retourne les résidences filtrées
  filteredResidences() {
    return this.residences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  toggleAddress(residence: any) {
    if (residence.address.toLowerCase() === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue.");
    } else {
      residence.showAddress = !residence.showAddress;
    }
  }

  toggleLike(residence: any) {
    residence.isLiked = !residence.isLiked;
    console.log(residence.isLiked ? `${residence.address} ajouté aux favoris.` : `${residence.address} retiré des favoris.`);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponible': return 'available';
      case 'En Construction': return 'under-construction';
      case 'Vendu': return 'sold';
      default: return '';
    }
  }
}
