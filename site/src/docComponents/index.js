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

const docComponents = {
  quick_start,
  alert,
  blockquote,
  display,
  figure
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

export default docComponents;
