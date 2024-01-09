import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public tabEvents: EventEmitter<any> | undefined;
  constructor() { }
}
