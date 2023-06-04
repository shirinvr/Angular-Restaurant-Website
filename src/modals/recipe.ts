export class Recipe
{
    id:number;
    image:string;
    name:string;
    category:string;
    price:number;
    description:string;
    constructor(id: number,image:string,name:string,price:number, category:string, description: string) {
        this.id = id;
        this.image=image;
        this.name=name;
        this.category=category;
        this.price=price;
        this.description=description;
      }
}