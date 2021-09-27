import { Expose } from 'class-transformer';

export class StoreSelectDTO {
  @Expose({ name: 'name' })
  label: string;

  @Expose({ name: 'id' })
  value: string;
}
