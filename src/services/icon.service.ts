import { Injectable } from '@angular/core';
import { Icon } from '../interfaces/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  source: Icon[] = [
    {
      name: 'save',
      url: '../assets/save-outline.svg'
    },
    {
      name: 'info',
      url: '../assets/information-circle-outline.svg'
    },
    {
      name: 'add',
      url: '../assets/add-outline.svg'
    },
    {
      name: 'github',
      url: '../assets/logo-github.svg'
    },
    {
      name: 'search',
      url: '../assets/search-outline.svg'
    },
    {
      name: 'linkedin',
      url: '../assets/logo-linkedin.svg'
    },
    {
      name: 'person',
      url: '../assets/person-outline.svg'
    },
    {
      name: 'addCircle',
      url: '../assets/add-circle-outline.svg'
    },
    {
      name: 'resize',
      url: '../assets/resize-outline.svg'
    },
    {
      name: 'return',
      url: '../assets/return-outline.svg'
    },
    {
      name: 'folder',
      url: '../assets/folder-outline.svg'
    },
    {
      name: 'pin',
      url: '../assets/pin-outline.svg'
    },
    {
      name: 'reader',
      url: '../assets/reader-outline.svg'
    },
    {
      name: 'zoom-in',
      url: '../assets/zoom-in.svg'
    },
    {
      name: 'zoom-out',
      url: '../assets/zoom-out.svg'
    },
    {
      name: 'maximize',
      url: '../assets/maximize.svg'
    },
  ]

  registerIcons(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    this.source.forEach((icon)=>{
      iconRegistry.addSvgIcon(
        icon.name,
        domSanitizer.bypassSecurityTrustResourceUrl(icon.url) //! Only local fetch 'calling this method with untrusted user data exposes your application to XSS security risks!'

      )
    })
  }

  constructor() { }
}
