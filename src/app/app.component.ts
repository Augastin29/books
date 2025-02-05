import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 ismenu=false
 isSidebarShowing=false;
  @HostListener('window:scroll',['$event'])
  scrollCheck(){
    const scrollOffset = window.pageYOffset;
    if(scrollOffset>88){
      this.ismenu=true;
    }else{
      this.ismenu=false;
    }
  }

  opensidebar(){
    this.isSidebarShowing=true
  }
  closesidebar(){
    this.isSidebarShowing=false
  }
}
