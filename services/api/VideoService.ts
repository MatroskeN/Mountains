import { plainToClass } from 'class-transformer';
import { Request } from '~/core/Api/Request';
import { RequestConfigBase } from '../NetworkService/NetworkService';
import { VideoResponseDTO } from './response/Video';

type RequestConfig = RequestConfigBase & {
  id: number;
};

export class VideoService extends Request<
  VideoResponseDTO,
  VideoResponseDTO,
  RequestConfig
> {
  protected config = {
    method: 'get',
  };

  private getUrl(data: RequestConfig) {
    return `/resources/video/${data.id}/`;
  }

  public getKey(data: RequestConfig) {
    return `${this.config.method}:${this.getUrl(data)}/`;
  }

  async fetch(data: RequestConfig) {
    if (!data.id) {
      return;
    }

    let request = await this.network.request({
      ...this.config,
      ...data,
      url: this.getUrl(data),
    });

    const response = plainToClass(VideoResponseDTO, request.data);

    return response;
  }
}
