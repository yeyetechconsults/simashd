import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VerifyNowComponent } from './pages/verify-now/verify-now.component';
import { SimaVipComponent } from './pages/sima-vip/sima-vip.component';
import { ScamAlertsComponent } from './pages/scam-alerts/scam-alerts.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'verify-now', component: VerifyNowComponent },
  { path: 'sima-vip', component: SimaVipComponent, canActivate: [authGuard] },
  { path: 'scam-alerts', component: ScamAlertsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: 'home' } // Wildcard route for any unmatched paths
];