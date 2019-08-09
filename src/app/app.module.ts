import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WtfComponent } from './wtf/wtf.component';
import { MenuComponent } from './menu/menu.component';
import { CourseComponent } from './course/course.component';
import { DishComponent } from './dish/dish.component';
import { Routes, RouterModule } from '@angular/router';
import { MainCourseComponent } from './menu/main-course/main-course.component';
import { DessertsComponent } from './menu/desserts/desserts.component';
import { BeveragesComponent } from './menu/beverages/beverages.component';
import { BiryaniComponent } from './menu/main-course/biryani/biryani.component';
import { FriedRiceComponent } from './menu/main-course/fried-rice/fried-rice.component';
import { LachhaParanthaComponent } from './menu/main-course/lachha-parantha/lachha-parantha.component';
import { CocaColaComponent } from './menu/beverages/coca-cola/coca-cola.component';
import { SpriteComponent } from './menu/beverages/sprite/sprite.component';
import { MountainDewComponent } from './menu/beverages/mountain-dew/mountain-dew.component';
import { IceCreamComponent } from './menu/desserts/ice-cream/ice-cream.component';
import { BadamKulfiComponent } from './menu/desserts/badam-kulfi/badam-kulfi.component';
import { FaludaComponent } from './menu/desserts/faluda/faluda.component';
import { ChickenLolipopComponent } from './course/chicken-lolipop/chicken-lolipop.component';
import { ChickenKebabsComponent } from './course/chicken-kebabs/chicken-kebabs.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'course', component: CourseComponent },
  { path: 'dish', component: DishComponent },
  { path: 'beverages', component: BeveragesComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: 'main-course', component: MainCourseComponent },
  { path: 'chicken-lolipop', component: ChickenLolipopComponent },
  { path: 'chicken-kebabs', component: ChickenKebabsComponent },
  { path: 'biryani', component: BiryaniComponent },
  { path: 'fried-rice', component: FriedRiceComponent },
  { path: 'lachha-parantha', component: LachhaParanthaComponent },
  { path: 'ice-cream', component: IceCreamComponent },
  { path: 'badam-kulfi', component: BadamKulfiComponent },
  { path: 'faluda', component: FaludaComponent },
  { path: 'coca-cola', component: CocaColaComponent },
  { path: 'sprite', component: SpriteComponent },
  { path: 'mountain-dew', component: MountainDewComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    WtfComponent,
    MenuComponent,
    CourseComponent,
    DishComponent,
    MainCourseComponent,
    DessertsComponent,
    BeveragesComponent,
    BiryaniComponent,
    FriedRiceComponent,
    LachhaParanthaComponent,
    CocaColaComponent,
    SpriteComponent,
    MountainDewComponent,
    IceCreamComponent,
    BadamKulfiComponent,
    FaludaComponent,
    ChickenLolipopComponent,
    ChickenKebabsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
