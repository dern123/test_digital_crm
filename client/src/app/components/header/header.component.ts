import { DOCUMENT } from '@angular/common';
import { HeaderService } from './header.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public localStorage:any;
  constructor(private headerService: HeaderService,
    @Inject(DOCUMENT) private document: Document){
      this.localStorage = this.document.defaultView?.localStorage;
    }
  public tab: any =  0 ;
  clickTab(tab: number): void {
    this.tab = tab;
    this.headerService.tabEvents?.emit(tab);
    this.localStorage.setItem("tabs", JSON.stringify(tab))
  }
  ngOnInit(): void {
      this.tab = this.localStorage?.getItem("tabs") || 0;
      this.headerService.tabEvents?.emit(this.tab);
  }
}