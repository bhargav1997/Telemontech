import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Shuffle from 'shufflejs';
@Component({
  selector: 'app-portfolio-slider',
  templateUrl: './portfolio-slider.component.html',
  styleUrls: ['./portfolio-slider.component.scss',]
})
export class PortfolioSliderComponent implements OnInit {

  constructor() { }

  data;



  private shuffleInstance: Shuffle;

  @ViewChild('shuffleContainer') private shuffleContainer: ElementRef;
  @ViewChild('shuffleSizer') private shuffleSizer: ElementRef;
  slectedIndex = 0;
  Links = ['All', 'Animation', 'Branding', 'Business', 'Consulting', 'Marketing', 'SEO']

  ngOnInit() {
    this.data = [
      { title: 'Creative Marketing', type: 'Business, Aniamtion', index: 1 },
      { title: 'Creative Marketing', type: 'Animation, Branding', index: 1 },
      { title: 'Creative Marketing', type: 'Animation, Branding', index: 2 },
      { title: 'Creative Marketing', type: 'Branding, Consulting', index: 2 },
      { title: 'Creative Marketing', type: 'Business, Aniamtion', index: 3 },
      { title: 'Creative Marketing', type: 'Business', index: 3 },
      { title: 'Creative Marketing', type: 'Seo, Consulting', index: 4 },
      { title: 'Creative Marketing', type: 'Branding, Consulting', index: 4 },
      { title: 'Creative Marketing', type: 'Marketing, SEO', index: 5 },
      { title: 'Creative Marketing', type: 'Marketing, SEO', index: 6 },
      { title: 'Creative Marketing', type: 'Seo, Consulting', index: 6 }
    ]
  }

  ngAfterViewInit() {
    this.shuffleInstance = new Shuffle(this.shuffleContainer.nativeElement, {
      itemSelector: '.shuffle-item',
      sizer: this.shuffleSizer.nativeElement
    });


  }

  filter(index) {
    this.slectedIndex = index
    if (index == 0) {
      this.clearFilter()
    }
    else {
      this.shuffleInstance.filter((element: Element) => {
        return +element.getAttribute('data-index') === index;
      });
    }
  }




  clearFilter() {
    this.shuffleInstance.filter();
  }

}
