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
  canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER", "ROLE_MEGAUSER", "ROLE_SUPERUSER", "ROLE_HCGS", "ROLE_CUSTOMER"],
    },

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
      role: ["ROLE_WORKER", "ROLE_MEGAUSER", "ROLE_SUPERUSER", "ROLE_HCGS"],
    },
    loadChildren: () => import('./ratingcatering/ratingcatering.module').then( m => m.RatingcateringPageModule)
  },
  {
    path: 'aduanhk',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_CUS"],
    },

    loadChildren: () => import('./aduanhk/aduanhk.module').then( m => m.AduanhkPageModule)
  },
  {
    path: 'aduanlaundry',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_CUS"],
    },

    loadChildren: () => import('./aduanlaundry/aduanlaundry.module').then( m => m.AduanlaundryPageModule)
  },
  {
    path: 'aduanmaintenance',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_CUS"],
    },

    loadChildren: () => import('./aduanmaintenance/aduanmaintenance.module').then( m => m.AduanmaintenancePageModule)
  },
   {
    path: 'aduancatering',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER"],
    },

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
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER","ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },
    loadChildren: () => import('./infoaduan/infoaduan.module').then( m => m.InfoaduanPageModule)
  },
  {
    path: 'infolaundry',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER","ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },

    loadChildren: () => import('./infolaundry/infolaundry.module').then( m => m.InfolaundryPageModule)
  },
  {
    path: 'infohk',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_WORKER","ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },

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
      role: ["ROLE_WORKER","ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS", "ROLE_CUSTOMER"],
    },
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dash-aduanmt',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS","ROLE_CUSTOMER"],
    },
    loadChildren: () => import('./dashboard/dash-aduanmt/dash-aduanmt.module').then( m => m.DashAduanmtPageModule)
  },
  {
    path: 'dash-aduanhk',
    loadChildren: () => import('./dashboard/dash-aduanhk/dash-aduanhk.module').then( m => m.DashAduanhkPageModule)
  },
  {
    path: 'dash-aduanlaundry',
    loadChildren: () => import('./dashboard/dash-aduanlaundry/dash-aduanlaundry.module').then( m => m.DashAduanlaundryPageModule)
  },
  {
    path: 'dash-aduancat',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS","ROLE_CUSTOMER"],
    },
    loadChildren: () => import('./dashboard/dash-aduancat/dash-aduancat.module').then( m => m.DashAduancatPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },
  {
    path: 'dash-tugashk',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },
    loadChildren: () => import('./dashboard/dash-tugashk/dash-tugashk.module').then( m => m.DashTugashkPageModule)
  },
  {
    path: 'dash-tugasmt',
    canActivate:[RoleGuard, AuthenticationGuard],
    data:{
      role: ["ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },
    loadChildren: () => import('./dashboard/dash-tugasmt/dash-tugasmt.module').then( m => m.DashTugasmtPageModule)
  },
  {
    path: 'dash-ratingcatering',
    canActivate:[RoleGuard],
    data:{
      role: ["ROLE_MEGAUSER","ROLE_SUPERUSER", "ROLE_HCGS"],
    },
    loadChildren: () => import('./dashboard/dash-ratingcatering/dash-ratingcatering.module').then( m => m.DashRatingcateringPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'astoinfo',
    loadChildren: () => import('./astoinfo/astoinfo.module').then( m => m.AstoinfoPageModule)
  },
  {
    path: 'developer',
    loadChildren: () => import('./developer/developer.module').then( m => m.DeveloperPageModule)
  },
  {
    path: 'myteam',
    loadChildren: () => import('./myteam/myteam.module').then( m => m.MyteamPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'barcodehk',
    loadChildren: () => import('./barcodehk/barcodehk.module').then( m => m.BarcodehkPageModule)
  },
  {
    path: 'barcodekamar',
    loadChildren: () => import('./barcodekamar/barcodekamar.module').then( m => m.BarcodekamarPageModule)
  },
  {
    path: 'barcodenonkamar',
    loadChildren: () => import('./barcodenonkamar/barcodenonkamar.module').then( m => m.BarcodenonkamarPageModule)
  },  {
    path: 'testbarcode',
    loadChildren: () => import('./testbarcode/testbarcode.module').then( m => m.TestbarcodePageModule)
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
