import { Slide } from './Slide';

export class Slider {
  id: number;
  title: string;
  speed: number;
  type: string;
  is_active: boolean;
  sort: number;
  created_at: string;
  updated_at: string;
  slides: Slide[];
}
