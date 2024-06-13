import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

type BreadcrumbItem = {
  name: string;
  href: string;
}

@Component({
  selector: 'signal-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})

export class BreadcrumbComponent {
  isObject(item: any): boolean {
    return item instanceof Object;
  }
  isLastItem(index: number): boolean {
    return index === this.items.length - 1;
  }

  @Input() items: BreadcrumbItem[] = [];
  @Input() color: string = 'primary'; 
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
  displayItems: any[] = [];

  getBreadcrumbClassName(): { [key: string]: boolean } {
    return {
      [`signal-text-color-${this.color}`]: true,
    };
  }

  handleItemClick(event: Event, data: string): void {
    event.preventDefault();
    this.onClick.emit(data);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['items']) {
      this.updateDisplayItems();
    }
  }

  updateDisplayItems(): void {
    if (this.items.length > 5) {
      this.displayItems = [
        this.items[0],
        '...',
        ...this.items.slice(this.items.length - 2),
      ];
    } else {
      this.displayItems = this.items;
    }
  }
}