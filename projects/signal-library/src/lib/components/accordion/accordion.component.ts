import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Styles } from '../../interfaces';

@Component({
  selector: 'signal-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed-1', style({
        height: '0',
        paddingTop: '0',
        paddingBottom: '0',
        opacity: '0',
        overflow: 'hidden',
      })),
      state('expanded-1', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*',
        opacity: '1',
      })),
      state('collapsed-2', style({
        height:'100px',
        paddingTop: '0',
        paddingBottom: '0',
        overflow: 'hidden',
      })),
      state('expanded-2', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*',
        opacity: '1',
      })),
      transition('expanded-1 <=> collapsed-1', [
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('expanded-2 <=> collapsed-2', [
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class AccordionComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() disabled: boolean = false;
  @Input() variant: string = '1';
  @Output() onClick = new EventEmitter<boolean>();
  @Input() styles?: Styles;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.onClick.emit(this.isOpen);
  }

  getAccordionState() {
    return this.isOpen ? `expanded-${this.variant}` : `collapsed-${this.variant}`;
  }

  getAccordionRoot(): { [key: string]: any } {
    return {
      [`accordion-variant-${this.variant}`]: true,
    };
  }
}
