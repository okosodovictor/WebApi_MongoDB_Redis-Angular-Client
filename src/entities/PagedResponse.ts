import { Person } from './person';
export interface PagedResponse {
  total: number;
  people: Person[];
}
