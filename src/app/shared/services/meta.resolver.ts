import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaResolver implements Resolve<void> {
  constructor(private meta: Meta, private title: Title) {}

  resolve(route: ActivatedRouteSnapshot): void {
    console.info('MetaResolver.resolve', route);
    const data = route.data;
    if (data['title']) {
      this.title.setTitle(data['title']);
    }
    if (data['description']) {
      this.meta.updateTag({ name: 'description', content: data['description'] });
    }
  }
}
