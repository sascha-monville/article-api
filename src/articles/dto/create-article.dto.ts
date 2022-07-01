export class CreateArticleDto {
    readonly name: string;
    readonly author: string;
    readonly text: string;
    readonly creationDate: Date;
    readonly publicationDate: Date;
}
