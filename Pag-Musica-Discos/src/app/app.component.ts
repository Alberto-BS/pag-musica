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
    imgPortada: new FormControl(),
    fechas: new FormControl(),
    artistas: new FormControl(null, [Validators.maxLength(50), Validators.minLength(2)]),
    cancion: new FormControl(),
    nombres: new FormControl(null, [Validators.maxLength(50), Validators.minLength(2)]),
  })

  onSubmit() {
    this.disco.imgPortada = this.contactForm.get("imgPortada")?.value;
    this.disco.fechas = this.contactForm.get("fechas")?.value;
    this.disco.artistas = this.contactForm.get("artistas")?.value as unknown as string;
    this.disco.nombres = this.contactForm.get("nombres")?.value as unknown as string;
    console.log(this.disco.nombres);
  }
  addCancion() {
    this.disco.cancion.push(this.contactForm.get("cancion")?.value);
    let ul = document.getElementById("canciones");
      let li = document.createElement("li");
    li.textContent = this.contactForm.get("cancion")?.value;
      ul?.appendChild(li);
    console.log(this.disco.cancion);
  }
}


class Disco {
  imgPortada: string = "";
  nombres: string = "";
  fechas: string = "";
  artistas: string = "";
  cancion: Array<string> = new Array<string>;
}



