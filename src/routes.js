import {
  MAIN_ROUTE,
  TECHNOLOGY_ROUTE,
  SCHEDULE_ROUTE,
  WARRANTY_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
} from './utils/consts';

import {
  MainPage,
  TechPage,
  SchedulePage,
  WarrantyPage,
  AboutPage,
  ContactsPage,
} from './components/pages';

export const publickRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: TECHNOLOGY_ROUTE,
    Component: TechPage,
  },
  {
    path: SCHEDULE_ROUTE,
    Component: SchedulePage,
  },
  {
    path: WARRANTY_ROUTE,
    Component: WarrantyPage,
  },
  {
    path: ABOUT_ROUTE,
    Component: AboutPage,
  },
  {
    path: CONTACTS_ROUTE,
    Component: ContactsPage,
  },
];
