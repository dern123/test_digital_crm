import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(){}
  public tabEvents: EventEmitter<any> | undefined;
  public tab: any =  0 ;
  clickTab(tab: number): void {
    this.tab = tab;
    this.tabEvents?.emit(tab);
    localStorage.setItem("tabs", JSON.stringify(tab))
  }
  ngOnInit(): void {
      this.tab = localStorage.getItem("tabs") || 0;
      this.tabEvents?.emit(this.tab);
  }

}