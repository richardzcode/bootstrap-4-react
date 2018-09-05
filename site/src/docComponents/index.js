import introduction from './introduction';
import quick_start from './quick_start';

import alert from './alert';
import badge from './badge';
import blockquote from './blockquote';
import button from './button';
import button_group from './button_group';
import card from './card';
import carousel from './carousel';
import collapse from './collapse';
import dropdown from './dropdown';
import display from './display';
import figure from './figure';
import form from './form';
import grid from './grid';
import input_group from './input_group';
import jumbotron from './jumbotron';
import lead from './lead';
import list from './list';
import list_group from './list_group';
import media from './media';
import modal from './modal';
import nav from './nav';
import navbar from './navbar';
import popover from './popover';
import tooltip from './tooltip';

import flex from './flex';

const docComponents = {
  introduction,
  quick_start,
  alert,
  blockquote,
  display,
  figure,
  lead
};

function copyProperties(from) {
  Object.keys(from).forEach(key => docComponents[key] = from[key]);
}

copyProperties(badge);
copyProperties(button);
copyProperties(button_group);
copyProperties(card);
copyProperties(carousel);
copyProperties(collapse);
copyProperties(dropdown);
copyProperties(form);
copyProperties(grid);
copyProperties(input_group);
copyProperties(jumbotron);
copyProperties(list);
copyProperties(list_group);
copyProperties(media);
copyProperties(modal);
copyProperties(nav);
copyProperties(navbar);
copyProperties(popover);
copyProperties(tooltip);

copyProperties(flex);

export default docComponents;
