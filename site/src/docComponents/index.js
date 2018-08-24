import quick_start from './quick_start';
import alert from './alert';
import badge from './badge';
import blockquote from './blockquote';
import button from './button';
import button_group from './button_group';
import card from './card';

const docComponents = {
  quick_start,
  alert,
  blockquote
};

function copyProperties(from) {
  Object.keys(from).forEach(key => docComponents[key] = from[key]);
}

copyProperties(badge);
copyProperties(button);
copyProperties(button_group);
copyProperties(card);

export default docComponents;
