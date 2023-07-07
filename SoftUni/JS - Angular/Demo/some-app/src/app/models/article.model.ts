interface IArticle {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
}

export class Article implements IArticle {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  constructor(
    title: string,
    description: string,
    author: string,
    imageUrl: string
  ) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.imageUrl = imageUrl;
  }
}
