<<<<<<< HEAD
import { Component,OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';
=======
import { Component } from '@angular/core';
>>>>>>> 1ec5a279729bdc1b3d1894c6fb9cacdf9d63615e

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

<<<<<<< HEAD
  public totalrecipe : number = 0;

  constructor(private _favoriteService: FavoritesService){}

  ngOnInit():void{
    this._favoriteService.getMenus()
    .subscribe(res=>{
      this.totalrecipe=res.length;
    })
  }
=======
>>>>>>> 1ec5a279729bdc1b3d1894c6fb9cacdf9d63615e
}
