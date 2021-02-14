import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

interface ISatinizerByPass {
  html: (value: string) => SafeHtml;
  style: (value: string) => SafeStyle;
  script: (value: string) => SafeScript;
  url: (value: string) => SafeUrl;
  resourceUrl: (value: string) => SafeResourceUrl;
}

type TSatinizerByPassKey = keyof ISatinizerByPass;
type TSatinizerByPassValue = ISatinizerByPass[TSatinizerByPassKey];

@Pipe({
  name: 'appSatinizer'
})
export class SatinizerPipe implements PipeTransform {
  private bypassMap: Map<TSatinizerByPassKey, TSatinizerByPassValue> = new Map([
    ['html', this.satinizer.bypassSecurityTrustHtml],
    ['style', this.satinizer.bypassSecurityTrustStyle],
    ['script', this.satinizer.bypassSecurityTrustScript],
    ['url', this.satinizer.bypassSecurityTrustUrl],
    ['resourceUrl', this.satinizer.bypassSecurityTrustResourceUrl]
  ]);

  constructor(
    private satinizer: DomSanitizer
  ) {
  }

  transform(value: any, type: TSatinizerByPassKey): any | undefined {
    return this.bypassMap.get(type)?.(value);
  }

}
