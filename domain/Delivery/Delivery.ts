export class Delivery {
  winner_id: number;

  surname: string;
  first_name: string;
  email: string;
  phone: string;

  passport_number?: string;
  passport_series?: string;
  inn?: string;
  passport_issued_at?: string;
  passport_files?: File[];

  delivery_city?: string;
  delivery_street?: string;
  delivery_building?: string;
  delivery_apartment?: string;
}
