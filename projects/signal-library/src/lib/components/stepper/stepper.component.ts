import { Component, OnInit, Input } from '@angular/core';

interface Step {
  id: number;
  label: string;
  isActive: boolean;
}

@Component({
  selector: 'signal-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent implements OnInit {
  @Input() default?: boolean;
  @Input() steps: Step[] = [];
  @Input() currentStep: number = 1;
  @Input() color: string = 'primary';
  @Input() variant?: string = '1';
  @Input() labelColor: string = 'neutral-6';


  dataSteps: Step[] = [];

  constructor( ) { }

  ngOnInit(): void { }

  getStepperVariantClass(): { [key: string]: boolean } {
    return {
      [`variant-${this.variant}`]: true,
      [`color-${this.color}`]: true,
    };
  }


  getStepperActivedClass(index:number): { [key: string]: boolean } {
    return {
      [`stepper-actived`]: this.currentStep - 1 === index,
      [`stepper-past`]: this.currentStep - 1 > index,
    };
  }

  getStepperDividerClass(index:number): { [key: string]: boolean } {
    return {
      [`stepper-divider-actived`]: this.currentStep -1 <= index,
    };
  }


}
