import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExamDetailComponent } from "./exams/exam-detail/exam-detail.component";
import { ExamEditComponent } from "./exams/exam-edit/exam-edit.component";
import { ExamsComponent } from "./exams/exams.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'exams', component: ExamsComponent, children: [
        { path: 'new', component: ExamEditComponent },
        { path: ':id', component: ExamDetailComponent},
        { path: ':id/edit', component: ExamEditComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}