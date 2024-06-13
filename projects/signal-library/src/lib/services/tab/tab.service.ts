import { EventEmitter, Injectable } from '@angular/core';
import { tabItem } from '../../components/tab/interface';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  activeTabChanged  = new EventEmitter<string>();

  handleActivetab(tabItem:tabItem) {
    this.activeTabChanged.emit(tabItem.tabId);
  }

  getCurrentActiveTab(){
    return this.activeTabChanged
  }

}

