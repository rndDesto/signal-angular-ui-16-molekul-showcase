export interface UETypes {
  event:          string;
  event_params:   EUEventParams;
}

export interface EUEventParams {
  componentType: string;
  componentJourney: string;
  componentLocation: string;
  componentName: string;
  componentText: string;
  rest?: Record<string, any>;
}