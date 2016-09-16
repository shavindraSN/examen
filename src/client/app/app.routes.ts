import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { HistoryRoutes } from './history/index'

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...HistoryRoutes
];
