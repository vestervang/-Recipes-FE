import {Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {MegaMenuModule} from "primeng/megamenu";
import {MenuItem} from "primeng/api";
import {SidebarModule} from "primeng/sidebar";
import {PanelMenuModule} from "primeng/panelmenu";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {InputTextModule} from "primeng/inputtext";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {MenubarModule} from "primeng/menubar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipesComponent, MegaMenuModule, SidebarModule, PanelMenuModule, IconFieldModule, InputIconModule, InputTextModule, ToolbarModule, Button, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Recipes-frontend';

  sidebarVisible = false;

  items: MenuItem[] = [
    {
      label: 'Recipes',
      icon: 'pi pi-box',
      items: [
        {
          label: 'Recipe search',
        },
        {
          label: 'Categories',
        },
        {
          label: 'Ingredient index',
        },
      ]
    },
    {
      label: 'Popular',
      icon: 'pi pi-box',
      items: [
        {
          label: 'Meal prep',
        },
        {
          label: 'Chicken recipes',
        },
        {
          label: 'Pasta recipes',
        },
        {
          label: 'Vegetarian recipes',
        },
        {
          label: 'Slow cooker recipes',
        },
        {
          label: 'One pot recipes',
        },
        {
          label: 'Breakfast recipes',
        },
        {
          label: 'Soup recipes',
        },
      ]
    },
    // {
    //   label: 'Ingredients',
    //   icon: 'pi pi-box',
    //   items: [
    //     {
    //       label: 'Living Room',
    //     },
    //     {
    //       label: 'Kitchen',
    //     },
    //     {
    //       label: 'Bathroom',
    //     },
    //     {
    //       label: 'Bedroom',
    //     },
    //     {
    //       label: 'Office',
    //     }
    //   ]
    // },
    // {
    //   label: 'Occasions',
    //   icon: 'pi pi-box',
    //   items: [
    //     {
    //       label: 'Living Room',
    //     },
    //     {
    //       label: 'Kitchen',
    //     },
    //     {
    //       label: 'Bathroom',
    //     },
    //     {
    //       label: 'Bedroom',
    //     },
    //     {
    //       label: 'Office',
    //     }
    //   ]
    // },
  ];
}
