import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Recipe} from "../models/Recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipe(id: string): Observable<Recipe>{
    return of({
      title: 'Strawberry Cream Cheesecake',
      author: {
        name: 'Anna Daugaard'
      },
      createdAt: new Date('2024-09-01 10:00:00Z'),
      image: null,
      prep_time: 15,
      defaultServings: 4,
      ingredientList: [
        {
          title: 'Crust',
          ingredients: [
            {
              amount: 400,
              calories: 423,
              unit: 'g',
              name: 'graham crackers',
              nutrition: [
                {
                  name: 'fat',
                  amount: 10.1,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 76.8,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 6.9,
                  unit: 'g'
                }
              ]
            },
            {
              amount: 150,
              calories: 717,
              unit: 'g',
              name: 'unsalted butter, melted',
              nutrition: [
                {
                  name: 'fat',
                  amount: 81,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 0,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 1,
                  unit: 'g'
                }
              ]
            }
          ]
        },
        {
          title: 'For the cheesecake',
          ingredients: [
            {
              amount: 300,
              calories: 318,
              unit: 'g',
              name: 'marshmallows',
              nutrition: [
                {
                  name: 'fat',
                  amount: 0.2,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 81,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 1.8,
                  unit: 'g'
                }
              ]
            },
            {
              amount: 150,
              calories: 717,
              unit: 'g',
              name: 'unsalted butter, melted',
              nutrition: [
                {
                  name: 'fat',
                  amount: 81,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 0,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 1,
                  unit: 'g'
                }
              ]
            },
            {
              amount: 500,
              calories: 342,
              unit: 'g',
              name: 'Philadelphia cream cheese, softened',
              nutrition: [
                {
                  name: 'fat',
                  amount: 34,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 4.1,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 6,
                  unit: 'g'
                }
              ]
            },
            {
              amount: 250,
              calories: 345,
              unit: 'ml',
              name: 'thickened/whipping cream, warm',
              nutrition: [
                {
                  name: 'fat',
                  amount: 19,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 3.7,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 2.7,
                  unit: 'g'
                }
              ]
            },
            {
              amount: 3,
              calories: 335,
              unit: 'tbsp',
              name: 'powdered gelatin + 3 tbsp water',
              nutrition: [
                {
                  name: 'fat',
                  amount: 0,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 14,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 1.2,
                  unit: 'g'
                }
              ]
            },
            {
              amount: 5,
              calories: 0,
              unit: 'drop',
              name: 'purple food gel',
              nutrition: [
                {
                  name: 'fat',
                  amount: 0,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 0,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 0,
                  unit: 'g'
                }
              ]
            },
            {
              amount: 3,
              calories: 0,
              unit: 'drop',
              name: 'blue food gel',
              nutrition: [
                {
                  name: 'fat',
                  amount: 0,
                  unit: 'g'
                },
                {
                  name: 'carbohydrate',
                  amount: 0,
                  unit: 'g'
                },
                {
                  name: 'protein',
                  amount: 0,
                  unit: 'g'
                }
              ]
            }
          ]
        }
      ],
      steps: [
        {
          title: "Crust",
          steps: [
            {
              text: "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
              ingredients: [
                {
                  amount: 400,
                  unit: 'g',
                  name: 'graham crackers',
                },
                {
                  amount: 150,
                  unit: 'g',
                  name: 'unsalted butter, melted',
                },
              ]
            },
            {
              text: "Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the bottom and sides of the tart tin. Chill for 30 min.",
              ingredients: []
            }
          ],
        },
        {
          title: "For the cheesecake",
          steps: [
            {
              text: "Begin by adding the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and mix to combine. Set aside.",
              ingredients: []
            },
            {
              text: "Next, add the gelatine and water to a small mixing bowl and mix to combine. Microwave for 30 seconds.",
              ingredients: []
            },
            {
              text: "Add the cream cheese to the marshmallow mixture and use a hand mixer or stand mixer fitted with a paddle attachment to mix until smooth.",
              ingredients: []
            },
            {
              text: "Add the warm cream and melted gelatin mixture and mix until well combined.",
              ingredients: []
            },
            {
              text: "Add 1/3 of the mixture to a mixing bowl, add purple food gel and mix until well combined. Colour 1/3 of the mixture blue. Split the remaining mixture into two mixing bowls, colour one pink and leave the other white.",
              ingredients: []
            },
            {
              text: "Pour half the purple cheesecake mixture into the chill tart crust. Add half the blue and then add the remaining purple and blue in the tart tin. Use a spoon to drizzle some pink cheesecake on top. Use a skewer or the end of a spoon to swirl the pink. Add some small dots of the plain cheesecake mixture to create stars and then sprinkle some more starts on top before chilling for 2 hours.",
              ingredients: []
            },
            {
              text: "Slice with a knife to serve.",
              ingredients: []
            }
          ]
        }
      ]
    });
  }
}
