import '@abraham/reflection';
import { Exclude, Expose, Transform } from 'class-transformer';
import { formatDate } from './utils/formatDate';

export class MediaResponseDTO {
  id: number;

  @Expose({ name: '' })
  @Transform(({ obj }) => {
    return obj.name;
  })
  title: string;

  video?: string;

  @Expose({ name: '' })
  @Transform(({ obj }) => {
    return obj.image;
  })
  preview_desktop: string;

  @Expose({ name: '' })
  @Transform(({ obj }) => {
    return obj.image;
  })
  preview_mobile: string;

  @Exclude()
  image?: string;

  @Expose({ name: 'created_at' })
  @Transform(({ obj }) => {
    return formatDate(obj.created_at);
  })
  date: string;
}
