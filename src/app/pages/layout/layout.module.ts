import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateTodoComponent } from './sidebar/create-todo/create-todo.component';
import { StatsComponent } from './sidebar/stats/stats.component';
import { SearchComponent } from './sidebar/search/search.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    CreateTodoComponent,
    StatsComponent,
    SearchComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
