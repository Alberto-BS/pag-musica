import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  groupForm = new FormGroup({
    nombreGrupo: new FormControl(),
    fechaGrupo: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Valor del formulario de grupo:', this.groupForm.value);
  }
}
