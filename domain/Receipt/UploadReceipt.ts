import { Select } from '../common/SelectDTO';

export class UploadReceipt {
  date: string;
  time: string;
  s: string;
  fn: string;
  fp: string;
  i: string;
  t: string;
  files: File[];
  store: Select;
  qr?: string;
}
