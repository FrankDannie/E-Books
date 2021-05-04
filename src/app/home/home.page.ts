import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { RomancePage } from '../romance/romance.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {
  }
  
  romance(){
    this.router.navigate(['/romance']);
    }
  Action(){
    this.router.navigate(['/action']);
     }
  
  Drama(){
      this.router.navigate(['/drama']);
      }
     
      
  Biopic(){
      this.router.navigate(['/biopic']);
      }
      



}
