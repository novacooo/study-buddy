export interface IUserData {
  name: string;
  attendance: number;
  average: number;
}

export const users: Array<IUserData> = [
  {
    name: 'Jacek Nowak',
    attendance: 83,
    average: 2.3,
  },
  {
    name: 'Krzysztof Batko',
    attendance: 74,
    average: 3.2,
  },
  {
    name: 'Patrycja Gonciarz',
    attendance: 92,
    average: 4.4,
  },
  {
    name: 'Olga Hahn',
    attendance: 57,
    average: 1.8,
  },
  {
    name: 'Paweł Andrzejewski',
    attendance: 67,
    average: 3.5,
  },
  {
    name: 'Szymon Knuth',
    attendance: 89,
    average: 4.2,
  },
  {
    name: 'Krystian Foczpaniak',
    attendance: 98,
    average: 4.9,
  },
];
