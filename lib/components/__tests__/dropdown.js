import {render} from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Dropdown from '../Dropdown.svelte';
import config from '../../config';

describe('Dropdown', () => {
  const { container } = render(Dropdown, {
    props: {
      id: 'my-dd',
      class: 'name',
      mockConfig: config,
    }
  });
  const dd = container.querySelector('#my-dd');

  it('should exist', () => expect(dd).toBeTruthy());
  it('should have proper class configuration', () => expect(dd).toHaveClass('name'));
});
