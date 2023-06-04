import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {

  constructor(private route: ActivatedRoute, private router:Router){}
  ID:any;
  recipes: any[]=[
    {
      id:1,
      image:'assets/images/product1.jpg',
      name:'Crab Louie',
      category: 'meal',
      description: 'Meat from 2 cooked 2-lb. dungeness crabs (or 4 cups cooked lump dungeness crabmeat), 1 cup mayonnaise, 1/4 tomatoe ketchup,8 eggs,1 head iceberg lettuce,spring onion,avocado',
      price:120


    },
    {
      id:2,
      image:'assets/images/product2.jpg',
      name:'Orzo salad',
      category: 'meal',
      description: 'Orzo, red wine vinaigrette, red wine vinegar, garbanzo beans, honey',
      price:150


    },
    {
      id:3,
      image:'assets/images/product3.jpg',
      name:'Acar',
      category: 'cuisine',
      description: 'Cauliflower, french beans, shrimp paste, white cabbage, peppers',
      price:250


    },
    {
      id:4,
      image:'assets/images/product4.png',
      name:'Pasta',
      category: 'meal',
      description: 'Pav bhaji, baby corn, penne pasta, green peas, bell pepper',
      price:50


    },
    {
      id:5,
      image:'assets/images/product5.png',
      name:'Paneer pepper',
      category: 'dietary',
      description: 'Paneer, tomato sauce, fennel, corn flour, garam masala',
      price:60


    },
    {
      id:6,
      image:'assets/images/product6.jpg',
      name:'Beef Bisque',
      category: 'meal',
      description: 'Beef brisket, brown sugar, barbecue sauce, chili, worcestershire sauce',
      price:250


    },
    
    {
      id:7,
      image:'assets/images/product7.png',
      name:'Greek Salad',
      category: 'dietary',
      description: 'cucumbers, tomatoes, green bell pepper, red onion, olives, cheese',
      price:80


    },
    {
      id:8,
      image:'assets/images/product8.png',
      name:'Lobster Roll',
      category: 'cuisine',
      description: 'Hot dog buns, potato chips, cooked lobster meat, filling, lemon juice',
      price:200


    },
    {
      id:9,
      image:'assets/images/product9.png',
      name:'Caesar Salad',
      category: 'dietary',
      description: 'Anchovy paste, romaine lettuce, parmesan cheese, olive oil, lemon juice',
      price:100


    }


  ];

  getemp_data:any;

  

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.ID = parseInt(id, 10);
        this.getemp_data = this.recipes.find(x => x.id === this.ID);
        console.log(this.getemp_data);
  
        const radioElement = document.querySelectorAll('input');
        const rating = document.querySelector('.rating-value') as HTMLElement | null;

        if (rating) {
          radioElement.forEach((radio) => {
            radio.addEventListener('click', () => {
              let value = radio.value;
              rating.innerText = `${value} of 5`;
            });
          });
        }

      }
    });
  }
    
  


  // getemp_data:any;
  // ngOnInit() {
  //   this.route.params.subscribe( params => this.ID=params['id']);
  //   this.getemp_data=this.recipes.filter(x => x.id == this.ID)[0];
  //   // this.personsdata =  this.personService.getPersons().filter(x => x.id == this.personId)[0];
  //  console.log(this.getemp_data);
  // }



}
