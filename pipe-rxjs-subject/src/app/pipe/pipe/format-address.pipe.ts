import { Pipe, PipeTransform } from '@angular/core';
interface AddressInfo {
  address: string,
  country: string,
  city: string
}

@Pipe({
  name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {

  transform(addr: AddressInfo, param1?:string) {
    return addr.address + ", "+ 
  addr.city + ", "+ 
  addr.country 
  }

}
