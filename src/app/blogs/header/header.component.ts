import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthorOrAdmin = false;
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isAuthorOrAdmin = this.authService?.isAuthorOrAdmin;
  }

  logout() {
    this.authService.logout();
  }
}
