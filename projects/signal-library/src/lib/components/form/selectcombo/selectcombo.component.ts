import { Component, OnInit, Input, Output, EventEmitter,SimpleChanges, OnChanges, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { SelectComboInterface } from '../../../interfaces/selectcombo.interface';

@Component({
  selector: 'signal-selectcombo',
  templateUrl: './selectcombo.component.html',
  styleUrls: ['./selectcombo.component.scss']
})
export class SignalSelectcomboComponent implements OnInit, OnChanges {
  @Input() data: SelectComboInterface[] = [];
  @Input() selectedVariant: string = 'default';
  @Input() simplifyAt: number = 9999;
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();
  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter();
  @ViewChild('comboInput') comboInput!: ElementRef;

  showDropDown: boolean = false;
  selectedOption: any = [];
  showClearIcon: boolean = false;
  variant:string='1';
  rounded:string='1';
  roundedSize:string='sm';
  value: string = '';
  filteredData: SelectComboInterface[] = [];


  ngOnInit(): void {
    this.handleInitData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.handleInitData();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickTarget = event.target as HTMLElement;
  
    const classNamesToCheck = [
      'combo-input',
      'dropdown-combo-item',
      'combo-chip',
      'tsel-ico_close',
      'combo-text',
      'tsel-ico_failed_filled'
    ];
  
    const isClickInside = classNamesToCheck.some(className => clickTarget.className.includes(className));
  
    if (!isClickInside) {
      this.toggleDropdown(false)
    }
  }


  handleInitData() {
    this.filteredData = [...this.data];
  }

  toggleDropdown(show:boolean) {
    this.showDropDown = show;
  }

  ifKeyCode(event:any, targetCode:any) {
    const key = event.keyCode || event.charCode;
    return key == targetCode ? true : false;
  }

  onKeyUp(value: string) {
    this.filterDataDropDown(value.trim());
  }

  onKeyDown(event: any): void {
    
    if(event.keyCode === 9){
      this.toggleDropdown(false);
    }
  }

  updateSelection() {
    const selectedIds = new Set(this.data.filter(item => item.isSelected).map(item => item.id));
    this.filteredData = this.filteredData.map(item => ({
      ...item,
      isSelected: selectedIds.has(item.id)
    }));

    this.toggleDropdown(true);
    this.comboInput.nativeElement.focus();
  }

  filterDataDropDown(value:string) {
    this.value = value
    if (!value) {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(item => item.text.toLowerCase().includes(value.toLowerCase()));
    }
    
    this.updateSelection();
  }


  handleSelectedItem(item: SelectComboInterface) {
    this.data = this.data.map(i => ({
      ...i,
      isSelected: i.id === item.id ? !i.isSelected : i.isSelected
    }));
    this.onSelectedItem.emit(this.handleSelectedItemOnly());
    this.updateSelection();
  }

  handleRemoveItem() {
    this.data = this.data.map(item => ({
      ...item,
      isSelected: false
    }));
    this.updateSelection();
  }

  handleRemoveSelectedItem(item: any) {
    this.data = this.data.map(i => ({
      ...i,
      isSelected: i.id === item.id ? false : i.isSelected
    }));
    this.updateSelection();
  }

  handleSelectedItemOnly() {
    return this.data.filter(i => i.isSelected === true);
  }

  handleAddItem(itemName: string) {
    this.onAddItem.emit(itemName);
    this.showDropDown = false;
    this.value = '';
  }

  getSelectComboRoot(): { [key: string]: any } {
    return { 
      [`root-wrapper`]: true,
    }
  }

  getSelectWrapper(): { [key: string]: any } {
    return { 
      [`signal-input-variant-${this.variant}`]: true,
      [`border-radius-${this.rounded}-${this.roundedSize}`]: true
    }
  }

  getClassComboItem(item:any): { [key: string]: any } {
    return { 
      [`dropdown-combo-item`]: true,
      [`selected-style-${this.selectedVariant}`]: item.isSelected
    }
  }
}
