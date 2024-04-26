import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { GroupFormComponent } from './group-form/group-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
    tieneGrupo: new FormControl('no')
  });

  @ViewChild('artistForm') artistFormComponent!: ArtistFormComponent;
  @ViewChild('groupForm') groupFormComponent!: GroupFormComponent;
  groupForm: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(artistForm: ArtistFormComponent, groupForm: any) {
    console.log('Valor del formulario de artistas:', artistForm.artistForm.value);
    if (groupForm) {
      console.log('Valor del formulario de grupo:', groupForm.groupForm.value);
    } else {
      console.log('No hay formulario de grupo');
    }
  }
}
