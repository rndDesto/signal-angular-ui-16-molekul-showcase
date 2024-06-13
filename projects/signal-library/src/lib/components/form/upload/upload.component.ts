import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Styles } from '../../../interfaces';

@Component({
  selector: 'signal-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SignalUploadComponent)
    }
  ]
})
export class SignalUploadComponent implements OnInit {
@Input() label:string = 'Upload';
@Input() multiple:boolean = false;
@Input() accept:string = 'image/*';
@Input() files:File[] = [];
@Input() disabled:boolean = false;
@Input() isError:boolean = false;
@Input() isLoading:boolean = false;
@Input() imageSrc:string = '';
@Input() supportText?: string | null= null;
@Input() maxFileSize: number = 100;
@Input() fileErrorMessage?: string;
@Input() sizeErrorMessage?: string;
@Input() allowTypes: string[] = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg+xml', 'image/webp', 'image/bmp', 'image/tiff']
@Input() styles?: Styles;


@Output() onClick = new EventEmitter<any>();
@Output() onRemove = new EventEmitter<any>();


@ViewChild('fileInput') fileInput!: ElementRef;

value: any;

  constructor() { }

  ngOnInit(): void {
  }

  openUpload() {
    this.fileInput.nativeElement.click();
  }

  removeImage(){
    this.onRemove.emit();
    this.fileInput.nativeElement.value = '';
    this.imageSrc = '';
  }

  handleFileInput(event: Event): void {
    this.onTouched();
    const target = event.target as HTMLInputElement;
    if (!target.files) {
      return;
    }
    const fileSize = target.files[0].size / 1024;

    if(this.allowTypes.indexOf(target.files[0].type) === -1) {
      this.isError = true;
      this.supportText = this.fileErrorMessage || `File type is not supported. Please upload a valid file type.`;

      return;
    }

    if (fileSize > this.maxFileSize) {
      this.isError = true;
      this.supportText = this.sizeErrorMessage || `File size exceeds ${this.maxFileSize} KB. Please upload a smaller file.`;

      return;
    }

    this.isError = false;
    this.supportText = '';

    this.onClick.emit(event);
  }

  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value ?? null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }



}
