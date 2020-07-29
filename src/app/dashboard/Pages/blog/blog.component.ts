import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../Services/connection.service'


@Component({
  selector: 'dashboard-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class DashboardBlogComponent implements OnInit {

  ngOnInit(): void {
  }

  mode = "view"

  createBlog() {
    this.mode = "create"
  }

  viewBlog(e) {
    if (this.mode == 'view') {
      this.mode = 'create'
    }
    else {
      this.mode = 'view'
    }

  }



}
