import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',

  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  isUpdateMode = false;
  currentResidenceId: number | null = null;
  residenceForm!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isUpdateMode = true;
        this.currentResidenceId = +id;
        // Ici, récupérer les données de la résidence à mettre à jour
        // Vous pouvez charger les données avec un service de récupération de résidence ici
      }
    });

    // Initialisation du formulaire de résidence
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [
        Validators.required,
        Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)/)
      ]],
      status: ['Disponible', Validators.required],
      apartments: this.fb.array([]) // FormArray pour les appartements
    });
  }

  get apartments() {
    return this.residenceForm.get('apartments') as FormArray;
  }

  // Ajouter un nouvel appartement
  addApartment() {
    const apartment = this.fb.group({
      apartmentNumber: ['', Validators.required],
      floorNumber: ['', Validators.required],
      surface: ['', [Validators.required, Validators.min(1)]],
      terrace: [false],
      surfaceTerrace: [''],
      category: ['', Validators.required]
    });

    this.apartments.push(apartment);
  }

  // Supprimer un appartement
  removeApartment(index: number) {
    this.apartments.removeAt(index);
  }

  // Soumettre le formulaire
  onSubmit() {
    if (this.residenceForm.valid) {
      console.log('Résidence créée ou mise à jour:', this.residenceForm.value);
      // Vous pouvez appeler un service pour enregistrer ou mettre à jour la résidence
      this.router.navigate(['/residences']); // Rediriger vers la liste des résidences après soumission
    }
  }
}
