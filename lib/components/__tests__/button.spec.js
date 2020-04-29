import '@testing-library/jest-dom/extend-expect'

import {render} from '@testing-library/svelte'

import Dropdown from '../Dropdown.svelte'

it('shows proper heading when rendered', () => {
  console.debug(Dropdown);
  const { getByText } = render(Dropdown, { name: 'World' })

  expect(getByText('Hello World!')).toBeInTheDocument()
})
