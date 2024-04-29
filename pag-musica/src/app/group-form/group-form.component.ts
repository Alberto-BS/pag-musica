import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  groupForm = new FormGroup({
    nombreGrupo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    fechaGrupo: new FormControl('', [Validators.required, this.validateFechaGrupo])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Valor del formulario de grupo:', this.groupForm.value);
  }

  validateFechaGrupo(control: FormControl): { [key: string]: boolean } | null {
    const fechaGrupo = new Date(control.value);
    const hoy = new Date();

    if (fechaGrupo > hoy) {
      return { 'fechaFutura': true };
    }

    return null;
  }
}
