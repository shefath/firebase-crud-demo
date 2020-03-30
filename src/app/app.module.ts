import { BookService } from "./shared/book.service";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
/* Firebase */
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { Routes, RouterModule } from "@angular/router";
import { AngularMaterialModule } from "./material.module";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { EditBookComponent } from "./components/edit-book/edit-book.component";
import { BookListComponent } from "./components/book-list/book-list.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "add-book" },
  { path: "add-book", component: AddBookComponent },
  { path: "edit-book/:id", component: EditBookComponent },
  { path: "books-list", component: BookListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  exports: [RouterModule],

  providers: [BookService],
  bootstrap: [AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
