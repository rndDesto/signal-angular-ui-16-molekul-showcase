import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'signal-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})

export class SignalCountdownComponent implements OnInit, OnDestroy {
  @Input() day: number = 0;
  @Input() hour: number = 0;
  @Input() minute: number = 0;
  @Input() second: number = 0;
  @Input() color: string = 'primary-5';
  @Input() labelColor: string = 'neutral-0';
  @Input() supportColor: string = 'secondary-7';
  @Input() timerUnit: 'minutes' | 'seconds' | 'hours' | 'days' = 'minutes' ;
  @Input() size: string = '1';
  @Output() onTimeout: EventEmitter<any> = new EventEmitter();
  @Input() shadow: string = '1';

  formattedTime: string = '';
  isValid: boolean = true;
  private intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.updateTime();
    this.validateInput();
    if (this.isValid) {
      this.startCountdown();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  validateInput(): void {
    if (this.second >= 60 || this.minute >= 60 || this.hour >= 24) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      this.decrementTime();
      this.updateTime();
    }, 1000);
  }

  decrementTime(): void {
    if (this.second > 0) {
      this.second--;
    } else if (this.minute > 0 || this.hour > 0 || this.day > 0) {
      this.second = 59;
      if (this.minute > 0) {
        this.minute--;
      } else if (this.hour > 0 || this.day > 0) {
        this.minute = 59;
        if (this.hour > 0) {
          this.hour--;
        } else if (this.day > 0) {
          this.hour = 23;
          this.day--;
        }
      }
    } else {
      clearInterval(this.intervalId); // Stop countdown when reaching 00:00:00
      this.onTimeout.emit();
    }
  }

  updateTime(): void {
    this.formattedTime = `${this.day}Day - ${this.hour.toString().padStart(2, '0')}:${this.minute.toString().padStart(2, '0')}:${this.second.toString().padStart(2, '0')}`;
  }

  getCountdownClass(): { [key: string]: boolean } {
    return {
      [`countdown-timer`]: true,
      [`signal-bg-color-${this.color}`]: true,
      [`signal-text-color-${this.labelColor}`]: true,
      [`box-shadow-${this.shadow}`]: true,
    };
  }

  getCountdownRootClass(): { [key: string]: boolean } {
    return {
      [`signal-countdown-root`]: true,
      [`countdown-size-${this.size}`]: true,
    };
  }

  getCountSupportClass(): { [key: string]: boolean } {
    return {
      [`signal-text-color-${this.supportColor}`]: true,
    };
  }
  


}