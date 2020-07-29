import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  title;
  image;
  htmlContent;
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('title'))
    this.title = this.route.snapshot.paramMap.get('title')
    this.image = this.route.snapshot.paramMap.get('image')
    this.htmlContent = this.route.snapshot.paramMap.get('htmlContent')
  }

}
