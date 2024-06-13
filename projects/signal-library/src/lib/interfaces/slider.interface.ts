export type SlickTypes = {
    slidesToShow?:    number;
    slidesToScroll?:  number;
    arrow?:           boolean;
    dots?:            boolean;
    infinite?:        boolean;
    responsive?:      Responsive[];
    prevArrow?:       string;
    nextArrow?:       string;
    autoplay?:        boolean;
    autoplaySpeed?:   number;
    rtl?:             boolean;
    pauseOnHover?:    boolean;
    centerMode?:      boolean;
    centerPadding?:   string;
    variableWidth?:   boolean;
    adaptiveHeight?:  boolean;
    fade?:            boolean;
    focusOnSelect?:   boolean;
    lazyLoad?:        string;
    vertical?:        boolean;
    verticalSwiping?: boolean;
    initialSlide?:    number;
    rtlClass?:        string;
    draggable?:       boolean;
    swipe?:           boolean;
    touchMove?:       boolean;
    waitForAnimate?:  boolean;
    zIndex?:          number;
  }
  
  export type Responsive = {
    breakpoint?: number;
    settings?:   Settings;
  }
  
  export type Settings = {
    slidesToShow?:   number;
    slidesToScroll?: number;
    infinite?:       boolean;
    dots?:           boolean;
  }
  