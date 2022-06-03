import { TugashkPage } from './tugashk/tugashk.page';
import { TgsmaintenancePage } from './tgsmaintenance/tgsmaintenance.page';
import { RoleGuardGuard } from './core/guards/role-guard.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },

  { path: 'home',

    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
    
   {
    path: 'register',

    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'catering',
    
    loadChildren: () => import('./catering/catering.module').then( m => m.CateringPageModule),
  },
  {
    path: 'ratingcatering',

    loadChildren: () => import('./ratingcatering/ratingcatering.module').then( m => m.RatingcateringPageModule)
  },
  {
    path: 'aduanhk',

    loadChildren: () => import('./aduanhk/aduanhk.module').then( m => m.AduanhkPageModule)
  },
  {
    path: 'aduanlaundry',

    loadChildren: () => import('./aduanlaundry/aduanlaundry.module').then( m => m.AduanlaundryPageModule)
  },
  {
    path: 'aduanmaintenance',

    loadChildren: () => import('./aduanmaintenance/aduanmaintenance.module').then( m => m.AduanmaintenancePageModule)
  },
  {
    path: 'ratingmaintenance',

    loadChildren: () => import('./ratingmaintenance/ratingmaintenance.module').then( m => m.RatingmaintenancePageModule)
  },
  {
    path: 'aduancatering',

    loadChildren: () => import('./aduancatering/aduancatering.module').then( m => m.AduancateringPageModule)
  },
  {
    path: 'housekeeping',

    loadChildren: () => import('./housekeeping/housekeeping.module').then( m => m.HousekeepingPageModule)
  },
  {
    path: 'tugashk',
    canActivate: [AuthGuard, RoleGuardGuard],
    data:{
      expectedRole:['ADMIN']
    },
      loadChildren: () => import('./tugashk/tugashk.module').then( m => m.TugashkPageModule)
    
    },

  {
    path: 'maintenance',

    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'tgsmaintenance',

    loadChildren: () => import('./tgsmaintenance/tgsmaintenance.module').then( m => m.TgsmaintenancePageModule)
  },
  {
    path: 'infoaduan',

    loadChildren: () => import('./infoaduan/infoaduan.module').then( m => m.InfoaduanPageModule)
  },
  {
    path: 'infolaundry',

    loadChildren: () => import('./infolaundry/infolaundry.module').then( m => m.InfolaundryPageModule)
  },
  {
    path: 'infohk',

    loadChildren: () => import('./infohk/infohk.module').then( m => m.InfohkPageModule)
  },
  {
    path: 'infomaintan',

    loadChildren: () => import('./infomaintan/infomaintan.module').then( m => m.InfomaintanPageModule)
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },
  {
    path: 'kamar',
    canActivate: [AuthGuard, RoleGuardGuard],
    data:{
      expectedRole:['ADMIN']
    },
    loadChildren: () => import('./kamar/kamar.module').then( m => m.KamarPageModule)
  },
  {
    path: 'nonkamar',
    canActivate: [AuthGuard, RoleGuardGuard],
    data:{
      expectedRole:['ADMIN']
    },
    loadChildren: () => import('./nonkamar/nonkamar.module').then( m => m.NonkamarPageModule)
  },
  {
    path: 'sub',
    loadChildren: () => import('./sub/sub.module').then( m => m.SubPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
