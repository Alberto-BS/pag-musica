import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArtistFormComponent } from '../artist-form/artist-form.component';
import { GroupFormComponent } from '../group-form/group-form.component';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
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
    tieneGrupo: new FormControl('no')
  });

  @ViewChild(ArtistFormComponent) artistFormComponent!: ArtistFormComponent;
  @ViewChild(GroupFormComponent) groupFormComponent!: GroupFormComponent;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const artistFormValue = this.artistFormComponent?.artistForm.value;
    const groupFormValue = this.groupFormComponent?.groupForm?.value;

    console.log('Valor del formulario de artistas:', artistFormValue);
    console.log('Valor del formulario de grupo:', groupFormValue);
  }

  get result() {
    return this.generoMusical.filter(item => item.checked);
  }
}
