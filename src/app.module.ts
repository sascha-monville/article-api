import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles/entities/Article.entity';

@Module({
  imports: [ArticlesModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'example',
    database: 'articles',
    entities: [Article],
    synchronize: true,
  }),],
})

export class AppModule {}