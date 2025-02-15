import { priceModel } from "./price.model";

export class BookModel{
    public id : number;
    public title : string;
    public totalPages : number;
    public author : string ;
    public price : priceModel;
    public isPublished : boolean;
    public publishedOn : Date

    // We can initialize all this 
    // And 
    // Also we can create a constructor to initialize all this

    // And if we dont wanna do that Getters and setters come into picture

    // public set author(value : string){
    //     this._author = 'Author : '+ value;
    // }

    // public get author(){
    //     return this._author;
    // }
}