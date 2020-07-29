import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../Services/connection.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs = []
  constructor(private service: ConnectionService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllBlogs().subscribe(data => {
      data.data.map(blog => {
        blog.image = "http://localhost:3000/images/" + blog.image
        return blog
      })
      this.blogs = data.data
    })
  }

  openSingleblog(data) {

    this.router.navigate(['/blog-single', data])
  }


}
