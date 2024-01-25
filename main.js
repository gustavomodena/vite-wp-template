import './styles/main.scss';

import './javascript/plugins/cells';
import './javascript/plugins/isotope.pkgd.min';

import { moduleHeader } from './javascript/modules/header';
import { pageHome } from './javascript/pages/home';

const allModules = [moduleHeader];
const allPages = [pageHome];

allModules.forEach((appModule) => appModule());
allPages.forEach((appPage) => appPage());
