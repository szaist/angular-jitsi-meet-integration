import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JitsiMeetComponent } from "./jitsi-meet/jitsi-meet.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JitsiMeetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-jitsi-meet-integration';


}
