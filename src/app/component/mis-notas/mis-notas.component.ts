import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-notas',
  standalone: false,
  templateUrl: './mis-notas.component.html',
  styleUrl: './mis-notas.component.css'
})
export class MisNotasComponent {
  notas: any[] = [];
}
