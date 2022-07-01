import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export interface ArticleResponse{
  name: string,
  author: string,
  creationDate: Date,
  publicationDate: Date,
}

@Entity()
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable: true, default: null })
    name: string;

    @Column({ nullable: true, default: null })    
    author: string;
    
    @Column({ nullable: true, default: null })    
    status: string;

    @Column({ nullable: true, default: null })
    text: string;

    @Column({
        type: 'datetime',
        default: () => 'NOW()',
      })
    creationDate: Date;
    
    @Column({
        type: 'datetime',
        nullable: true, default: () => 'unknown'
      })
    publicationDate: Date;


}
