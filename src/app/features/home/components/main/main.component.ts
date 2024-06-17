import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleButtonComponent } from '@shared-components/simple-button';
import { CookiesPopupComponent } from '../cookies-popup/cookies-popup.component';
import { HomeComponent } from '../../pages/home/home.component';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { CookiesService } from '@core-services/cookies/cookies.service';

@Component({
  selector: 'home-main',
  standalone: true,
  imports: [RouterModule, SimpleButtonComponent, CookiesPopupComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(public homeComponent: HomeComponent, public cookiesService: CookiesService){
    console.log(cookiesService.accepted)
  }

}
