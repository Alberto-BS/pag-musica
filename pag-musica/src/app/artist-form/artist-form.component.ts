import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent {
  artistForm: FormGroup;
  hasGroup: boolean = false;
  musicalStyles = [
    'Rock',
    'Pop',
    'Hip Hop',
    'R&B',
    'Country',
    'Jazz',
    'Clasica',
    'Electrónica',
    'Folk',
    'Metal',
    'Reggae',
    'Blues',
    'Indie',
    'Punk',
    'Latin',
    'Rap',
    'Trap'
  ];
  selectedMusicalStyles: string[] = [];
  roles = ['Vocalista', 'Guitarrista', 'Baterista', 'Bajista', 'Tecladista'];
  selectedRole: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.artistForm = this.formBuilder.group({
      artisticName: ['', Validators.required],
      fullName: ['', Validators.required],
      birthDate: ['', Validators.required],
      nationality: ['', Validators.required],
      musicalStyles: ['', Validators.required],
      role: ['', Validators.required],
      hasGroup: [false, Validators.required],
      groupName: [''],
      groupCreationDate: [''],
      groupIsActive: [false]
    });
  }

  onSubmit() {
    this.artistForm.patchValue({
      musicalStyles: this.selectedMusicalStyles.join(', '),
      role: this.selectedRole
    });
    console.log(this.artistForm.value);
  }

  toggleMusicalStyle(style: string) {
    if (this.selectedMusicalStyles.includes(style)) {
      this.selectedMusicalStyles = this.selectedMusicalStyles.filter(s => s !== style);
    } else {
      this.selectedMusicalStyles.push(style);
    }
    this.artistForm.patchValue({
      musicalStyles: this.selectedMusicalStyles.join(', ')
    });
  }

  selectRole(role: string) {
    this.selectedRole = role;
    this.artistForm.patchValue({
      role: this.selectedRole
    });
  }
}
