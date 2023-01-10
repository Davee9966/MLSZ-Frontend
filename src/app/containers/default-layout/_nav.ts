import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: 'Törzsadatok',
    url: 'home',
    children: [
      {
        name: 'Személyek adatai',
        url: 'szemelyek',
      },
      {
        name: 'Pályák adatai',
        url: 'palyak',
      },
    ],
  },
  {
    name: 'Hatósági bejárás jegyzőkönyvei',
    url: '/hatosagibejarasjegyzokonyvei',
  },
  {
    name: 'Riportok, statisztikák',
    url: 'riportok',
  },
  {
    name: 'Személyes adatok',
    url: '/szemelyesadatok',
  },
  {
    name: 'HelpDesk',
    url: '/helpdesk',
  },
  {
    name: 'Nyomtatványok',
    url: '/nyomtatvanyok',
  },
  {
    name: 'Kilépés',
    url: '/kilepes',
  },
];
