import { data } from './seed';
import { Article } from '../models/article.model';

export class ArticleData {
  getData(): Article[] {
    let articles: Article[] = [];

    data.map((article) => {
      articles.push(
        new Article(
          article.title,
          article.description,
          article.author,
          article.imageUrl
        )
      );
    });

    return articles;
  }
}
