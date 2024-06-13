import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { tabItem } from '../tab/interface';
import { TabService } from '../../services/tab/tab.service';

@Component({
  selector: 'signal-tabcontent',
  templateUrl: './tabcontent.component.html',
  styleUrls: ['./tabcontent.component.scss']
})
export class SignalTabcontentComponent{
  @Input() label: string = '';
  @Input() activeTab: any = '';


  constructor(private tabService: TabService) {

    // this.themeService.handleSelectedTheme('mantul');
    this.activeTab = this.tabService.getCurrentActiveTab();
  }


  ngOnInit(): void {

  }

  ngAfterContentInit() {

    
    console.log(" this.tabService.itemList = ",  this.tabService)


    this.tabService.activeTabChanged.subscribe((tabItem: tabItem) => {
      this.activeTab = tabItem;
    });
    // this.activeTab = this.tabService.itemList;
  }

}
