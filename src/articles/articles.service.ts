import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from "./entities/Article.entity";
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ArticlesService {
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    try {
      const article: Article = Article.create();
      const { name, author, text, creationDate, publicationDate } = createArticleDto;
      article.name = name;
      article.author = author;
      article.text = text;
      article.creationDate = creationDate;
      article.publicationDate = publicationDate;
      await Article.save(article);
      return article;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll(): Promise<Article[]> {
    const articles: Article[] = await Article.find();
    for (const article of articles) {
      delete article.text;
    }
    return articles;
    
  }

  async findOne(id: number) {
    return (await Article.findOneBy({id}))??{};
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    await Article.update(id, updateArticleDto)
    return (await Article.findOneBy({id}))??"not found";
  }

  async remove(id: number) {
    await Article.delete({id});
  }
}
