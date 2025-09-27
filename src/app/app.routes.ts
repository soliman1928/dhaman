import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '**', component: AppComponent, }
  // { path: '**', component: NotFoundComponent }

  // {
  //   path: 'bootstrap',
  //   loadChildren: () => import(`./features/tutorials/example-bootstrap/tutorial.routes`)
  //   .then(routes => routes.routes)
  // },
  // {
  //   path: 'components',
  //   loadComponent: () => import('./features/tutorials/example-components/tutorial.component')
  //     .then(mod => mod.TutorialComponent)
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () => import(`./features/tutorials/example-forms/tutorial.routes`)
  //   .then(routes => routes.routes)
  // },
  // {
  //   path: 'services',
  //   loadComponent: () => import('./features/tutorials/example-services/tutorial.component')
  //     .then(mod => mod.TutorialComponent)
  // },


  // {
  //   path: 'login',
  //   loadComponent: () => import(`./features/login/login.component`)
  //     .then(mod => mod.LoginComponent)
  // },
  // {
  //   path: 'signup',
  //   loadComponent: () => import(`./features/signup/signup.component`)
  //     .then(mod => mod.SignupComponent)
  // },

  // {
  //   path: 'contact',
  //   loadChildren: () => import(`./features/contact/contact.routes`)
  //     .then(routes => routes.routes)
  // },

  // {
  //   path: 'about',
  //   loadChildren: () => import('./features/about/about.routes')
  //     .then(routes => routes.routes)
  // },

  
];