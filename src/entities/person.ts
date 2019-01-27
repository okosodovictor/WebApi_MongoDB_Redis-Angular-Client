import { FriendRef } from './FriendRef';
export class Person {
  _id: string;
  index: number;
  guid: number;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: Date;
  latitude: string;
  longitude: string;
  tags: string[];
  friends: FriendRef[];
  greeting: string;
  favoriteFruit: string;
}
