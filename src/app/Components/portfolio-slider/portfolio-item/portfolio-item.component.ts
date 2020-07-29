import { Component, OnInit, Input, HostBinding, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  constructor() { }


  @Input()
  title;

  @Input()
  type;

  @Input()
  index;

  @HostBinding('class.shuffle-item') className: boolean = true;
  @HostBinding('attr.data-index') indexAttribute: number;


  ngOnInit(): void {
  }


  ngAfterContentInit() {
    this.indexAttribute = this.index;
  }


}
