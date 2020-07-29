import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../../Services/connection.service'

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  blogs = []

  constructor(private service: ConnectionService) { }

  ngOnInit(): void {
    this.service.getAllBlogs().subscribe(data => {
      data.data.map(blog => {
        blog.image = "http://localhost:3000/images/" + blog.image
        return blog
      })
      this.blogs = data.data
    })
  }

}
