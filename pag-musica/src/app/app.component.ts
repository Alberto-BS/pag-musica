import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .main {
      background-color: #f0f0f0;
      padding: 20px;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'pag-musica';
  generoMusical: any[] = [
    { id: 1, title: 'Rock', checked: false },
    { id: 2, title: 'Pop', checked: false },
    { id: 3, title: 'Hip Hop', checked: false },
    { id: 4, title: 'R&B', checked: false },
    { id: 5, title: 'Country', checked: false },
    { id: 6, title: 'Jazz', checked: false },
    { id: 7, title: 'Clasica', checked: false },
    { id: 8, title: 'Electrónica', checked: false },
    { id: 9, title: 'Folk', checked: false },
    { id: 10, title: 'Metal', checked: false },
    { id: 11, title: 'Reggae', checked: false },
    { id: 12, title: 'Blues', checked: false },
    { id: 13, title: 'Indie', checked: false },
    { id: 14, title: 'Punk', checked: false },
    { id: 15, title: 'Latin', checked: false },
    { id: 16, title: 'Rap', checked: false },
    { id: 17, title: 'Trap', checked: false }
  ];

  contactForm = new FormGroup({
    nombreGrupo: new FormControl(),
    fechaGrupo: new FormControl(),
    tieneGrupo: new FormControl()
  });
    artistFormComponent: any;

  constructor() {
    this.contactForm.get('tieneGrupo')?.setValue('no');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Valor del formulario principal:', this.contactForm.value);
    console.log('Valor del formulario de artistas:', this.artistFormComponent.artistForm.value);
  }

  get result() {
    return this.generoMusical.filter(item => item.checked);
  }
}
