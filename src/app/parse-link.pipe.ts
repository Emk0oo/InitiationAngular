import { Pipe, PipeTransform } from '@angular/core';

let input = "voici un lien https://www.google.com/ et un autre http://www.google.com/ et un autre www.google.com et un autre google.com";

@Pipe({
  name: 'parseLink',
  standalone: true
})
export class ParseLinkPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let stringArray = value.split(' ');
    return stringArray.map( word =>{
      return word.includes('https://')?`<a href='${word}'>${word}</a>`:word;
    }).join(' ');



      let tab= value.split(' ');
      for (let i= 0;i < tab.length; i++){
          if(tab[i].includes('https://') ||tab[i].includes('http://')){
            tab[i]= "<a href=" + tab[i] + ">" + tab[i] + "</a>";
          }
      }
    
  }

}
