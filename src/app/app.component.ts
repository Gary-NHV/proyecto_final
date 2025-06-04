import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  mostrarNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const rutasSinNavbar = ['/login', '/'];
      this.mostrarNavbar = !rutasSinNavbar.includes(this.router.url);
    });
  }
}
