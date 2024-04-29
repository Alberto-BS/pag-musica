import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {
  @Input() generoMusical: any[] = [];

  artistForm = new FormGroup({
    nombreArtistico: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    nombrePersona: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    fechaNacimiento: new FormControl('', [Validators.required, this.validateFechaNacimiento]),
    nacionalidad: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    rolGrupo: new FormControl('', Validators.required),
    estiloMusical: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Valor del formulario de artistas:', this.artistForm.value);
  }

  toggleGenre(genre: any) {
    genre.checked = !genre.checked;
    this.artistForm.get('estiloMusical')?.setValue(this.generoMusical.filter(item => item.checked).map(item => item.title));
  }

  validateFechaNacimiento(control: FormControl): { [key: string]: boolean } | null {
    const fechaNacimiento = new Date(control.value);
    const hoy = new Date();

    if (fechaNacimiento > hoy) {
      return { 'fechaFutura': true };
    }

    return null;
  }
}
