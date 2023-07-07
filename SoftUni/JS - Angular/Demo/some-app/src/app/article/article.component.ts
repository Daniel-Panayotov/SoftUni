import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  @Input() article: Article = {
    title: '',
    description: '',
    author: '',
    imageUrl: '',
  };
  @Input() articleDesc: string = '';
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore() {
    this.articleDescLen += 250;
    this.descToShow = this.article.description;
    if (this.articleDescLen >= this.article.description.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    }
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageIsShown == true
      ? (this.imageButtonTitle = 'Hide Image')
      : (this.imageButtonTitle = 'Show Image');
  }

  hideDesc() {
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }
}
