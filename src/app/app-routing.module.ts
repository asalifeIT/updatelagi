import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
      path: 'login',
      canActivate: [AuthGuard],
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },
  { path: 'home',
  canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
    
   {
    path: 'register',
    canActivate: [AuthGuard],
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'catering',
    
    loadChildren: () => import('./catering/catering.module').then( m => m.CateringPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'ratingcatering',
    canActivate: [AuthGuard],
    loadChildren: () => import('./ratingcatering/ratingcatering.module').then( m => m.RatingcateringPageModule)
  },
  {
    path: 'aduanhk',
    canActivate: [AuthGuard],
    loadChildren: () => import('./aduanhk/aduanhk.module').then( m => m.AduanhkPageModule)
  },
  {
    path: 'ratinghk',
    canActivate: [AuthGuard],
    loadChildren: () => import('./ratinghk/ratinghk.module').then( m => m.RatinghkPageModule)
  },
  {
    path: 'aduanlaundry',
    canActivate: [AuthGuard],
    loadChildren: () => import('./aduanlaundry/aduanlaundry.module').then( m => m.AduanlaundryPageModule)
  },
  {
    path: 'aduanmaintenance',
    canActivate: [AuthGuard],
    loadChildren: () => import('./aduanmaintenance/aduanmaintenance.module').then( m => m.AduanmaintenancePageModule)
  },
  {
    path: 'ratingmaintenance',
    canActivate: [AuthGuard],
    loadChildren: () => import('./ratingmaintenance/ratingmaintenance.module').then( m => m.RatingmaintenancePageModule)
  },
  {
    path: 'aduancatering',
    canActivate: [AuthGuard],
    loadChildren: () => import('./aduancatering/aduancatering.module').then( m => m.AduancateringPageModule)
  },
  {
    path: 'housekeeping',
    canActivate: [AuthGuard],
    loadChildren: () => import('./housekeeping/housekeeping.module').then( m => m.HousekeepingPageModule)
  },
  {
    path: 'tugashk',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tugashk/tugashk.module').then( m => m.TugashkPageModule)
  },
  {
    path: 'maintenance',
    canActivate: [AuthGuard],
    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'tgsmaintenance',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tgsmaintenance/tgsmaintenance.module').then( m => m.TgsmaintenancePageModule)
  },
  {
    path: 'infoaduan',
    canActivate: [AuthGuard],
    loadChildren: () => import('./infoaduan/infoaduan.module').then( m => m.InfoaduanPageModule)
  },
  {
    path: 'infolaundry',
    canActivate: [AuthGuard],
    loadChildren: () => import('./infolaundry/infolaundry.module').then( m => m.InfolaundryPageModule)
  },
  {
    path: 'infohk',
    canActivate: [AuthGuard],
    loadChildren: () => import('./infohk/infohk.module').then( m => m.InfohkPageModule)
  },
  {
    path: 'infomaintan',
    canActivate: [AuthGuard],
    loadChildren: () => import('./infomaintan/infomaintan.module').then( m => m.InfomaintanPageModule)
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
