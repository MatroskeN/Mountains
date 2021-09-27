import '@abraham/reflection';
import { Type } from 'class-transformer';
import { PaginationResponseDTO } from './Pagination';
import { VideoResponseDTO } from './Video';

export class VideosResponseDTO extends PaginationResponseDTO<VideoResponseDTO> {
  @Type(() => VideoResponseDTO)
  results: VideoResponseDTO[];
}
