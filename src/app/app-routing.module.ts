import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { RoleGuard } from './guards/role.guard';


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
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER"],
    },
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
    path: 'aduancatering',

    loadChildren: () => import('./aduancatering/aduancatering.module').then( m => m.AduancateringPageModule)
  },
  {
    path: 'housekeeping',

    loadChildren: () => import('./housekeeping/housekeeping.module').then( m => m.HousekeepingPageModule)
  },
  {
    path: 'tugashk',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER"],
    },
    
     loadChildren: () => import('./tugashk/tugashk.module').then( m => m.TugashkPageModule)
    },

  {
    path: 'maintenance',

    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'tgsmaintenance',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER"],
    },
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
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER","ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },
    loadChildren: () => import('./kamar/kamar.module').then( m => m.KamarPageModule)
  },
  {
    path: 'nonkamar',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER","ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },
    loadChildren: () => import('./nonkamar/nonkamar.module').then( m => m.NonkamarPageModule)
  },
  {
    path: 'sub',
    loadChildren: () => import('./sub/sub.module').then( m => m.SubPageModule)
  },
  {
    path: 'dashboard',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER","ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dash-aduanmt',
    loadChildren: () => import('./dash-aduanmt/dash-aduanmt.module').then( m => m.DashAduanmtPageModule)
  },
  {
    path: 'dash-aduanhk',
    loadChildren: () => import('./dash-aduanhk/dash-aduanhk.module').then( m => m.DashAduanhkPageModule)
  },
  {
    path: 'dash-aduanlaundry',
    loadChildren: () => import('./dash-aduanlaundry/dash-aduanlaundry.module').then( m => m.DashAduanlaundryPageModule)
  },
  {
    path: 'dash-aduancat',
    loadChildren: () => import('./dash-aduancat/dash-aduancat.module').then( m => m.DashAduancatPageModule)
  },  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
