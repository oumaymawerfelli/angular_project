import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartForm!: FormGroup;
  newApart: any;  // This will hold the new apartment details

  residences = [
    { id: 'res1', name: 'Residence A' },
    { id: 'res2', name: 'Residence B' },
    { id: 'res3', name: 'Residence C' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.apartForm = this.fb.group({
      residence: ['', Validators.required],
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      surface: ['', [Validators.required, Validators.min(1)]],
      terrace: [false],
      surfaceTerrace: [''],
      category: ['', Validators.required]
    });

    this.handleTerraceLogic();
  }

  private handleTerraceLogic() {
    this.apartForm.get('terrace')?.valueChanges.subscribe(hasTerrace => {
      const surfaceTerraceControl = this.apartForm.get('surfaceTerrace');
      hasTerrace ? 
        surfaceTerraceControl?.setValidators([Validators.required, Validators.min(1)]) :
        surfaceTerraceControl?.clearValidators();
      surfaceTerraceControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      console.log('New Apartment:', this.newApart);
    }
  }

  resetForm() {
    this.apartForm.reset();
  }
}
