export interface BasicInput {
    label?: string;
    required?: boolean;
    placeholder?: string;
    fieldClasses?: string;
    focusClassError?: string;
    labelClasses?: string;
    wrapperClasses?: string;
    info?: string;
    isLoading?: boolean;
    isValid?: boolean;
    onEnter?: boolean;
    maxlength?: string;
    fieldIcon?: string;
    fieldIconPosition?: string;
    icon?: BasicInputIcon | Icon;
    fieldIconClasses?: string;
    showInputLength?: boolean;
    icons?: BasicInputIcon;
    fieldReset?: string;
    fieldResetClasses?: string;
    inputMode?: string;
    showPasswordIcon?: boolean;
    pattern?: any;
    isUsingPattern?: boolean;
    customPattern?: string;
    autoCompleted?: string;
  }
  
  export interface BasicInputIcon {
    idle: Icon,
    reset: Icon
  }
  
  export interface Icon {
    url: string,
    isShow?: boolean;
  }
  
  export interface Icon {
    url: string;
    classes?: string;
  }
  
  export interface BasicInputIcon {
    prefix?: string;
    suffix?: string;
    url?: string;
  }
  

  export interface SelecType {
    id: string,
    name: string,
    value:string
  }

  export type SectionLeftAndRight = {
    name:string,
    type:'icon' | 'label' | 'text';
    color?:string
  }