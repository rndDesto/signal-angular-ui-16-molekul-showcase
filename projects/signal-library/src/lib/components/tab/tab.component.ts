import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { alignType, headerPositionType, tabItem } from './interface';
import { TabService } from '../../services/tab/tab.service';
import { SignalThemeService } from '../../services';


@Component({
  selector: 'signal-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})

export class SignalTabComponent implements OnInit {
  selectedTabIndex: number = 0;
  currentTabId: string = '';

  @Input() items: tabItem[] = [];
  @Input() full:boolean = true;
  @Input() alignContent:alignType = 'start';
  @Input() headerPosition?:headerPositionType = 'lower';
  @Output() tabSelected: EventEmitter<any> = new EventEmitter();

  constructor(private tabService: TabService,private themeService: SignalThemeService) {}


  ngOnInit(): void {
    this.updateCurrentTabId()
    this.tabService.handleActivetab(this.items[this.selectedTabIndex]);
    // this.tabService.mantul = this.items
  }


  selectTab(tab: any, index: number) {
    this.selectedTabIndex = index;
    this.tabSelected.emit(tab);
    this.tabService.handleActivetab(tab);
  }

  private updateCurrentTabId() {
    this.currentTabId = this.items[this.selectedTabIndex]?.tabId || '';
  }

  getTabRootClasses(): { [key: string]: boolean } {
    return {
      [`upper`]: this.headerPosition === 'upper',
      [`${this.themeService.getCurrentTheme()}`]: true,
    };
  }

  getTabClasses(): { [key: string]: boolean } {
    return {
      [`upper`]: this.headerPosition === 'upper',
      [`justify-${this.alignContent}`]: true,

      [`${this.themeService.getCurrentTheme()}`]: true,
    };
  }



}


