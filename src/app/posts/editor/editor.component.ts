import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../../forbidden-validator.directive';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  post = new FormGroup({
    title: new FormControl({
        value: '',
        disabled: true
      },
      Validators.required
    ),
    body: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      forbiddenNameValidator(/Mike/)
    ]),
    tags: new FormArray([
      new FormControl('Angular'),
      new FormControl('HTML'),
      new FormControl('CSS')
    ]),
    seo: new FormGroup({
      meta: new FormControl('angular')
    })
  });

  get title(): AbstractControl {
    return this.post.get('title');
  }

  get body(): AbstractControl {
    return this.post.get('body');
  }

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  constructor() {
  }

  ngOnInit() {
    this.post.valueChanges.subscribe(data => {
      console.log(data);
    });
    this.post.statusChanges.subscribe(status => {
      console.log(status);
    });
  }

  addTag(tag: string) {
    if (tag) {
      this.tags.push(new FormControl(tag));
    }
  }

  createPost() {
    console.log(this.post.value);
  }

}
