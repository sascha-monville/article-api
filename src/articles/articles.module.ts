import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article} from './entities/Article.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), HttpModule],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
