import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrl: './artist-form.component.css'
})
export class ArtistFormComponent implements OnInit {
  @Input() generoMusical: any[] = [];

  artistForm = new FormGroup({
    nombreArtistico: new FormControl(),
    nombrePersona: new FormControl(),
    fechaNacimiento: new FormControl(),
    nacionalidad: new FormControl(),
    rolGrupo: new FormControl(),
    estiloMusical: new FormControl()
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Valor del formulario de artistas:', this.artistForm.value);
  }

  toggleGenre(genre: any) {
    genre.checked = !genre.checked;
    this.artistForm.get('estiloMusical')?.setValue(this.generoMusical.filter(item => item.checked).map(item => item.title));
  }
}
