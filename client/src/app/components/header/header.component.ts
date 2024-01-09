import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private headerService: HeaderService){}
  public tab: any =  0 ;
  clickTab(tab: number): void {
    this.tab = tab;
    this.headerService.tabEvents?.emit(tab);
    localStorage.setItem("tabs", JSON.stringify(tab))
  }
  ngOnInit(): void {
      this.tab = localStorage.getItem("tabs") || 0;
      this.headerService.tabEvents?.emit(this.tab);
  }
}