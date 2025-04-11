import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ViewprofileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viewprofile';
}
