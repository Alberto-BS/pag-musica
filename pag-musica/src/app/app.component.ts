import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pag-musica';
  //generoMusical: any[] = ["Rock", 'Pop', 'Hip-Hop', 'R&B', 'Country', 'Jazz', 'Clasica', 'Electronica', 'Folk', 'Metal', 'Reggae', 'Blues', 'Indie', 'Punk', 'Latin', 'Disco', 'Flamenco', 'Rap', 'Trap', 'Jota'];
  generoMusical: any[] = ["Pop", "Rock", "Clasico", "Regueton", "Lirica", "Heavy"];

  contactForm = new FormGroup({
    nombreGrupo: new FormControl(),
    fechaGrupo: new FormControl(),
    generoMusical: new FormControl(),
    tieneGrupo: new FormControl(),
    estiloMusical: new FormControl
  });
  

  ngOnInit() {
    this.generoMusical = [
      {
        id: 1,
        title: 'Rock',
        checked: false,
      },
      {
        id: 2,
        title: 'Pop',
        checked: false,
      },
      {
        id: 3,
        title: 'Hip-Hop',
        checked: false,
      },
      {
        id: 4,
        title: 'R&B',
        checked: false,
      },
      {
        id: 5,
        title: 'Country',
        checked: false,
      },
      {
        id: 6,
        title: 'Jazz',
        checked: false,
      },
      {
        id: 7,
        title: 'Clasica',
        checked: false,
      },
      {
        id: 8,
        title: 'Electronica',
        checked: false,
      },
      {
        id: 9,
        title: 'Folk',
        checked: false,
      },
      {
        id: 10,
        title: 'Metal',
        checked: false,
      },
      {
        id: 12,
        title: 'Reggae',
        checked: false,
      },
      {
        id: 13,
        title: 'Blues',
        checked: false,
      },
      {
        id: 14,
        title: 'Indie',
        checked: false,
      },
      {
        id: 15,
        title: 'Punk',
        checked: false,
      },
      {
        id: 16,
        title: 'Latin',
        checked: false,
      },
      {
        id: 17,
        title: 'Disco',
        checked: false,
      },
      {
        id: 18,
        title: 'Flamenco',
        checked: false,
      },
      {
        id: 19,
        title: 'Rap',
        checked: false,
      },
      {
        id: 20,
        title: 'Trap',
        checked: false,
      },
    ]
  }
  constructor() {
    if (this.contactForm.get("tieneGrupo") != null) {
      this.contactForm.get("tieneGrupo")?.setValue("no");
    }
  }
  get result() {

    return this.generoMusical.filter(item => item.checked);
  }
}
