import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Styles } from '../../interfaces';
type keywordType={ 
  name: string, 
  icon?: string, 
  isSelected?: boolean, 
  isDisabled?: boolean, 
  to?:string 
  image?: string, 
}

@Component({
  selector: 'signal-chips',
  templateUrl: './chips.component.html',
})
export class ChipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const selectedKeyword = this.keywords.find(keyword => keyword.isSelected === true);
    if (selectedKeyword) {
      this.selectedKey = selectedKeyword.name
    }
    
    this.keywords.forEach(keyword => {
      keyword.isSelected = false;
    });
  }

  @Input() keywords: keywordType[] = [];
  @Input() variant?: string = '1';
  @Input() weight?: string = 'bold';
  @Input() size?: string = '1';
  @Input() styles?: Styles | any = null;
  @Input() col?: string = '';
  @Output() selectedItem: EventEmitter<keywordType> = new EventEmitter();
  selectedKey:string=''

  handleSelected(item:keywordType){
    const selectedKeyword = this.keywords.find(keyword => keyword.name === item.name);
    if (selectedKeyword) {
      selectedKeyword.isSelected = true;
    }
    this.selectedKey = item.name
    this.selectedItem.emit(item);
  }

  getChipsClasses(): { [key: string]: boolean } {
    return {
      [`variant-${this.variant}`]: true,
    }
  }
  getChipsItemClasses(): { [key: string]: boolean } {
    return {
      [`chips-col-${this.col}`]: true,
    }
  }
}
