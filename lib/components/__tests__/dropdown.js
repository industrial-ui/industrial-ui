import {render} from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Dropdown from '../Dropdown.svelte';
import config from '../../config';
import prepareConfig from '../../utils/prepare-config';

const customConfig = prepareConfig(config, {
  globalClass: 'global-class',
  components: {
    dropdown: {
      class: 'config-class',
      isProperties: {
        'is-prop': 'some iss property',
      },

      triggerClass: 'trigger-class',
      dropdownClass: 'dropdown-class',

      openClass: 'open-class',
      openTriggerClass: 'open-trigger',
      openDropdownClass: 'open-dropdown',
    }
  }
});

describe('Close Dropdown', () => {
  const { container } = render(Dropdown, {
    props: {
      id: 'dd',
      class: 'local-class',
      value: false,
      mockConfig: customConfig,
      'is:is-prop': true,
    }
  });
  const dd = container.querySelector('#dd');

  it('should exist with id', () => expect(dd).toBeTruthy());
  it('should have class from prop', () => expect(dd).toHaveClass('local-class'));
  it('should have global class from config', () => expect(dd).toHaveClass('global-class'));
  it('should have class from dropdown\'s config', () => expect(dd).toHaveClass('config-class'));
  it('should have is:property classes', () => {
    expect(dd).toHaveClass('some');
    expect(dd).toHaveClass('iss');
    expect(dd).toHaveClass('property');
  });
  it('should have trigger painted', () => expect(dd.querySelector('.trigger-class')).toBeTruthy());
  it('should not have dropdown painted', () => expect(dd.querySelector('.dropdown-class')).toBeFalsy());
});

describe('Open dropdown', () => {
  const { container } = render(Dropdown, {
    props: {
      id: 'ddd',
      value: true,
      mockConfig: customConfig,
      position: 'top right',
    }
  });
  const dd = container.querySelector('#ddd');
  const trigger = dd.querySelector('.trigger-class');
  const dropdown = dd.querySelector('.dropdown-class');

  it('should have an open class', () => expect(dd).toHaveClass('open-class'));
  it('should have a trigger with open class', () => expect(trigger).toHaveClass('open-trigger'));
  it('should have dropdown painted', () => expect(dropdown).toBeTruthy());
  it('should have a dropdown with open class', () => expect(dropdown).toHaveClass('open-dropdown'));

  it('should have proper positioning', () => {
    expect(dropdown).toHaveStyle({bottom: '100%', right: '0', left: 'auto', top: 'auto'});
  });
});
