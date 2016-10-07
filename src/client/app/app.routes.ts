import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { HistoryRoutes } from './history/index';
import { LoginRoutes } from './login/index';
import { PaperRoutes } from './paper/index'

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...HistoryRoutes,
  ...LoginRoutes,
  ...PaperRoutes,
];
