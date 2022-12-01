import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces!: Place[];

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private router: Router

    ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onOpenMenu(){
    this.menuCtrl.toggle();
  }

  onLogout() {
    //this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
