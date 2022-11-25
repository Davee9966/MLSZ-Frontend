import { Users } from './users';
export interface Field {
  /*
        public int Id { get; set; }
        public string Name { get; set; }
        public int Postalcode { get; set; }
        public string Address { get; set; }
        public string AuthLevel { get; set; }
        public int IFACode { get; set; }

        //több felhasználó kell majd -- db-be átírni
        public User Owner { get; set; }
  */
  id: number;
  name: string;
  postalcode: number;
  address: string;
  authlevel: string;
  IFAcode: number;
  owner: Users[];
}
