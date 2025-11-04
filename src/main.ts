import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { RestGridMetadata } from './app/metadata';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

const applicationRef = await createApplication({
  providers: [provideExperimentalZonelessChangeDetection()]
})

const component = createCustomElement(AppComponent, { injector: applicationRef.injector })

zySdk.services.registry.registerComponent(RestGridMetadata, component)
