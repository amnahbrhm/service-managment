import { environment } from './../../environment/environment';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_SERVICE } from './shared/services/service';
import { MockHttpService } from './shared/services/mock-http.service';
import { HttpService } from './shared/services/http.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom([
      BrowserAnimationsModule
    ]),
    {
        provide: HTTP_SERVICE,
        useClass: environment.useMockService ? MockHttpService : HttpService,
    }
  ],
};