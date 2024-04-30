import { Component } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pag-Musica-Discos';
  disco = new Disco();
  contactForm = new FormGroup({
    fechas: new FormControl('', [Validators.required, this.validateFechaNacimiento]),
    artistas: new FormControl(null, [Validators.maxLength(50), Validators.minLength(2)]),
    cancion: new FormControl(),
    nombres: new FormControl(null, [Validators.maxLength(50), Validators.minLength(2)]),
  })

  onSubmit() {
    this.disco.fechas = this.contactForm.get("fechas")?.value as unknown as string;
    this.disco.artistas = this.contactForm.get("artistas")?.value as unknown as string;
    this.disco.nombres = this.contactForm.get("nombres")?.value as unknown as string;
    console.log(this.disco.nombres);
  }
  addCancion() {
    this.disco.cancion.push(this.contactForm.get("cancion")?.value);
    console.log(this.disco.cancion);
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


class Disco {
  nombres: string = "";
  fechas: string = "";
  artistas: string = "";
  cancion: Array<string> = new Array<string>;
}



