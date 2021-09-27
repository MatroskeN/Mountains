import '@abraham/reflection';
import { Expose, Transform } from 'class-transformer';
import { MediaResponseDTO } from './Media';

export class VideoResponseDTO extends MediaResponseDTO {
  url: string;

  @Expose({ name: '' })
  @Transform(({ obj }) => {
    return obj.cover_image;
  })
  preview_desktop: string;

  @Expose({ name: '' })
  @Transform(({ obj }) => {
    return obj.cover_image;
  })
  preview_mobile: string;
}
