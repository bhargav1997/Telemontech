import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  baseurl = "http://localhost:3000/";

  constructor(private http: Http) { }

  postForm(data) {
    return this.http
      .post("https://formspree.io/xoqkyndr", data)
      .pipe(
        map((res: any) => {
          return res.json();
        })
      );
  }

  postBlog(data) {
    console.log(data)
    //   const headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post(this.baseurl + "api/v1/blog", data)
      .pipe(
        map((res: any) => {
          return res.json();
        })
      );
  }

  getAllBlogs() {
    return this.http
      .get(this.baseurl + "api/v1/blog")
      .pipe(
        map((res: any) => {
          return res.json();
        })
      );
  }
}
