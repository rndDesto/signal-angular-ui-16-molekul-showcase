import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type DataSelectionType = {
    id: string;
    index: number;
    isActive: boolean;
    picture: string;
    age: number;
    name: string;
    gender?: string;
    company: string;
    email: string;
    phone: string;
    disabled?: boolean;
}

@Component({
  selector: 'signal-selectoption',
  templateUrl: './selectoption.component.html',
  styleUrls: ['./selectoption.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectoptionComponent),
      multi: true
    }
  ]
})

export class SelectoptionComponent implements OnInit, AfterViewInit, OnChanges {
    @Input() clearable:boolean = false
    @Input() closeOnSelect:boolean = true
    @Input() bindLabel:string = 'name'
    @Input() placeholder: string = '';
    @Input() searchable:boolean = false;
    @Input() data:DataSelectionType[] = []
    @Input() maxSelectedItems: number = Number.MAX_SAFE_INTEGER;
    @Input() supportText?: string | null= null;
    @Input() controls: any = null;
    @Input() color?: string = 'neutral-3';
    @Input() label?: string = '';
    @Input() multiple: boolean = false;
    @Input() required?: boolean = false;
    @Input() withCheckBox?: boolean = false;
    @Input() minifiedLabel?: boolean = false;


    @ViewChild('selectElement', {read: ElementRef}) selectElement!: ElementRef;
    
    value: DataSelectionType[] = [];
    onChange: any = () => {};
    onTouched: any = () => {};

    selectedPeople = [{ name: 'Karyn Wright' }];


    constructor(private renderer: Renderer2) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
      this.addCustomClassToNgSelectContainer();
    }

    ngOnChanges() {
      if (this.selectElement) {
        this.addCustomClassToNgSelectContainer();
      }
    }
  
    addCustomClassToNgSelectContainer() {
      if (this.selectElement) {
        const ngSelectContainer = this.selectElement.nativeElement.querySelector('.ng-select-container');
    
        if (ngSelectContainer) {
          let existingClasses = ngSelectContainer.className;
          const borderClassRegex = /(?:^|\s)signal-border-color-\S+/g;
          existingClasses = existingClasses.replace(borderClassRegex, '');
          this.renderer.setAttribute(ngSelectContainer, 'class', `${existingClasses.trim()} signal-border-color-${this.color}`);
        }
      }
    }

    getSupportClass(): { [key: string]: boolean } {
      return {
        [`signal-text-color-${this.color}`]: true,
      };
    }

    writeValue(value: any): void {
        this.value = value;
        this.onChange(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    removeItem(itemToRemove:DataSelectionType){
      this.value = this.value.filter(item => item.id !== itemToRemove.id);
      this.onChange(this.value);
      }

}
