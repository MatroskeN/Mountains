import formatDate from 'date-fns/format';
import { ReceiptPrize } from './Prize';

export class Receipt {
  id: string;
  
  get dateFormatted () {
    return formatDate(this.createdAt, 'dd.MM.yyyy');
  }

  get timeFormatted () {
    return formatDate(this.createdAt, 'HH:mm:ss');
  }

  statusText: string = '-';
  prize: string = '-';
  createdAt: Date;

  prizes: ReceiptPrize[];

  sumText: string = '-';
}
