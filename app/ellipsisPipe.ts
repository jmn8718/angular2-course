import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'ellipsis'
})
export class EllipsisFilter implements PipeTransform{
    //fir argument is the length we want
    transform(value:string, args:any[]):any {
        if (value && value.length >= args[0]){
            return value = value.substring(0, args[0]) + '...';
        }
    }
}