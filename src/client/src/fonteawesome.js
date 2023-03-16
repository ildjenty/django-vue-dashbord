import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCircleUser,
  faUserPen,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCircleUser, faUserPen, faRightFromBracket);

export const addComponent = (vueApp) => {
  vueApp.component('FAI', FontAwesomeIcon);
};
