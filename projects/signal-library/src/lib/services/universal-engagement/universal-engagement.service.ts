import { Injectable } from '@angular/core';
import { UETypes } from '../../interfaces/universal-engagement.interface';

@Injectable({
  providedIn: 'root'
})

export class UniversalEngagementService {

  constructor() {}

  trackerDeviceBundle(data?:UETypes) {
    const deviceBundle = {
        "voucher_games":{
          "event": 'universal_engagement',
          "event_params":{
            "ComponentType" : "Card",
            "ComponentJourney" : "Voucher Games",
            "ComponentLocation" : "Voucher Games ${index}",
            "ComponentName" : "signal-card",
            "ComponentText" : "Call of Duty",
          },
        }
      }
    return deviceBundle;
  }
}
