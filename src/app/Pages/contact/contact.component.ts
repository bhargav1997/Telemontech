import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../Services/connection.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private service: ConnectionService) { }

  ngOnInit(): void {
  }

  first_name;
  last_name;
  email;
  subject;
  message;
  submit() {
    console.log(this.first_name + this.last_name + this.email + this.subject + this.message)
    let message = this.first_name + " " + this.last_name + "\n" + "From: " + this.email + "\n" + "Message: " + this.message
    let data = { _replyto: this.email, message }
    this.service.postForm(data).subscribe(data => {
      console.log(data)
    })
  }

}
