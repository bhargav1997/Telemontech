import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConnectionService } from '../../../../Services/connection.service'
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  ngOnInit(): void {
  }

  public files: any[];
  constructor(public service: ConnectionService) {
    this.files = [];
  }
  label = "Add Blog Picture"


  htmlContent = '';
  title: '';

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
    this.label = this.files[0].name;
  }

  submit() {


    const formData = new FormData();
    for (const file of this.files) {
      formData.append('image', file, file.name);
      formData.append('title', this.title);
      formData.append('htmlContent', this.htmlContent)

    }
    this.service.postBlog(formData).subscribe((data) => {
      if (data.status == 'success') {
        this.valueChange.emit("change");
      }
    })
  }





}
