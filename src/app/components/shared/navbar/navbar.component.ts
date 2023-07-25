import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { isAuthenticated, logout } from 'src/app/helpers/auth.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(
    private spinnerService: NgxSpinnerService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.isAuthenticated = isAuthenticated(); 
  }

  sair(){
    if(window.confirm('Deseja realmente sair do sistema?')){
      this.spinnerService.show();
      logout();
      this.router.navigate(['/home/login'])
        .then(() => {
          window.location.reload();
        });;
    }
  }
}
