import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogApp';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (!this.authService.user$.value) {
      const lsUser = this.authService.getUserFromLS();

      if (lsUser) {
        this.authService.setUser(lsUser);
        this.router.navigateByUrl('/blogs');
      } else {
        this.router.navigateByUrl('/signin');
      }
    }
  }
}
