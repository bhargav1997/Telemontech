import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  menuArray = [{ icon: ' account_box', title: 'Dashboard', active: true },
  { icon: ' account_circle', title: 'Account', active: false },
  { icon: ' folder', title: 'Blog', active: false },
  { icon: ' settings', title: 'Setting', active: false },
  { icon: ' insert_chart', title: 'Manage', active: false },

  ]

  menuclicked(menu) {

    this.menuArray.map((me) => {
      return me.active = false;
    })
    menu.active = true
    this.valueChange.emit(menu.title);
  }

}
