import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  constructor() { }

  @Input()
  title

  @Input()
  back

  @Output() myClick = new EventEmitter();

  onMyClick() {
    this.myClick.emit("clicked");
  }

  ngOnInit(): void {
  }





}
