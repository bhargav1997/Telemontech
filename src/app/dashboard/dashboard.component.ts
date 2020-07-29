import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ConnectionService } from '../Services/connection.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public files: any[];
  constructor(private service: ConnectionService) {

    this.files = [];
  }

  ngOnInit(): void {
  }

  title = 'Dashboard'


  selectedTitle(title) {
    this.title = title
  }

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  onFileChanged(event: any) {
    this.files = event.target.files;
    this.onUpload()
  }

  onUpload() {

    // console.log(formData.get("file"))
    //  this.http.post('url', formData).subscribe(x => ....);
  }

  submit() {
    const formData = new FormData();
    let data = { title: 'test', image: formData.get('image'), htmlContent: this.htmlContent }
    for (const file of this.files) {
      formData.append('image', file, file.name);
      formData.append('title', 'test');
      formData.append('htmlContent', this.htmlContent)

    }



    this.service.postBlog(formData).subscribe((data) => {
      console.log(data)
    })
  }

}
