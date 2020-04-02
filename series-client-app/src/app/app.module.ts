import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/list/list.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { ListFooterComponent } from './components/list-footer/list-footer.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ListComponent,
    ListHeaderComponent,
    ListFooterComponent,
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
