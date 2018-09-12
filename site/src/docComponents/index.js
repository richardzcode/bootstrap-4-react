import introduction from './introduction';
import quick_start from './quick_start';

import alert from './alert';
import badge from './badge';
import blockquote from './blockquote';
import breadcrumb from './breadcrumb';
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
import html_elements from './html_elements';
import input_group from './input_group';
import jumbotron from './jumbotron';
import lead from './lead';
import list from './list';
import list_group from './list_group';
import media from './media';
import modal from './modal';
import nav from './nav';
import navbar from './navbar';
import pagination from './pagination';
import popover from './popover';
import progress from './progress';
import tooltip from './tooltip';

import border from './border';
import colors from './colors';
import display_util from './display_util';
import flex from './flex';
import float from './float';
import shadow from './shadow';
import sizing from './sizing';
import spacing from './spacing';
import vertical_align from './vertical_align';

const docComponents = {
  quick_start,

  alert,
  blockquote,
  breadcrumb,
  display,
  figure,
  lead,

  shadow,
  spacing
};

function copyProperties(from) {
  Object.keys(from).forEach(key => docComponents[key] = from[key]);
}

copyProperties(introduction);

copyProperties(badge);
copyProperties(button);
copyProperties(button_group);
copyProperties(card);
copyProperties(carousel);
copyProperties(collapse);
copyProperties(dropdown);
copyProperties(form);
copyProperties(grid);
copyProperties(html_elements);
copyProperties(input_group);
copyProperties(jumbotron);
copyProperties(list);
copyProperties(list_group);
copyProperties(media);
copyProperties(modal);
copyProperties(nav);
copyProperties(navbar);
copyProperties(pagination);
copyProperties(popover);
copyProperties(progress);
copyProperties(tooltip);

copyProperties(border);
copyProperties(colors);
copyProperties(display_util);
copyProperties(flex);
copyProperties(float);
copyProperties(sizing);
copyProperties(vertical_align);

export default docComponents;
