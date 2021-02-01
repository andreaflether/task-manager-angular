import { Component } from '@angular/core';

import { TokenService } from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Task Manager';

  constructor(private tokenService: TokenService) {
    this.tokenService.init({
      apiBase: 'https://task-manager-api-andreflether.herokuapp.com',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.taskmanager.v2'
        }
      }
    })
  }
}
