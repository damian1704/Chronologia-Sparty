/* global rangeSlider */

import {select, settings} from '../settings.js';
import utils from '../utils.js';
import BaseWidget from './BaseWidget.js';



class HourPicker extends BaseWidget {
  constructor(wrapper){
    super(wrapper, settings.hours.open);

    const thisWidget = this;
    
    thisWidget.dom.input = wrapper.querySelector(select.widgets.hourPicker.input);
    thisWidget.dom.output = wrapper.querySelector(select.widgets.hourPicker.output);

    thisWidget.initPlugin();
    thisWidget.setValue(thisWidget.dom.input.value); 
  }

  parseValue(value){
    return utils.numberToHour(value);
  }

  isValid(){
    return true;
  }

  renderValue(){
    const thisWidget = this;

    thisWidget.dom.output.innerText = thisWidget.value;
  }

  initPlugin(){
    const thisWidget = this;
    rangeSlider.create(thisWidget.dom.input);
    
    thisWidget.dom.input.addEventListener('input', function(){
      thisWidget.setValue(thisWidget.dom.input.value);  
    });
  }
}

export default HourPicker;