import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mCustomTextTranform'
})
export class MCustomTextTranformPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
   
    //return value.toUpperCase();

    console.log(args);
    
      if(args[0] == 'u'){
        return value.toUpperCase();
      }else{
        
          return value.toLowerCase();
      }
    }

    
  }


