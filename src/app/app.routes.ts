import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VerifyNowComponent } from './pages/verify-now/verify-now.component';
import { SimaVipComponent } from './pages/sima-vip/sima-vip.component';
import { ScamAlertsComponent } from './pages/scam-alerts/scam-alerts.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { authGuard } from './guards/auth.guard';
import { OurservicesComponent } from './pages/ourservices/ourservices.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'verify-now', component: VerifyNowComponent },
  { path: 'sima-vip', component: SimaVipComponent },
  { path: 'scam-alerts', component: ScamAlertsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'ourservices', component: OurservicesComponent },
  { path: '**', redirectTo: '' } // Wildcard route for any unmatched paths
];