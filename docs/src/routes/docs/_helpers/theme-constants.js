import {fadeWithColor} from './custom-transitions';

export const SemanticTheme = {
  customTransitions: {
    fadeWithColor,
  },
  components: {
    button: {
      class: 'ui button',
      isProperties: {
        primary: 'primary',
        outline: 'outline',
        icon: 'round icon',
        labeled: 'labeled',
      },
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      isProperties: {
        select: 'selection',
        multiselect: 'fluid selection multiple',
        search: 'search selection'
      },
      class: 'ui dropdown',
      openClass: 'active visible',
      closeClass: '',
      triggerClass: '',
      openTriggerClass: '',
      closeTriggerClass: '',
      dropdownClass: 'menu transition',
      openDropdownClass: 'visible',
      closeDropdownClass: 'hidden',
    },
  }
};

export const SpectreTheme = {
  customTransitions: {
    fadeWithColor,
  },
  components: {
    button: {
      class: 'btn',
      isProperties: {
        primary: 'btn-primary',
        link: ''
      },
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      isProperties: {
        select: 'btn',
        primary: 'btn btn-primary'
      },
      class: 'dropdown',
      openClass: 'active',
      closeClass: '',
      triggerClass: 'dropdown-toggle',
      openTriggerClass: '',
      closeTriggerClass: '',
      dropdownClass: 'menu',
      openDropdownClass: '',
      closeDropdownClass: '',
    },
  }
};

export const TailwindTheme = {
  components: {
    button: {
      class: 'btn',
      isProperties: {
        primary: 'primary',
        outline: 'outline',
        icon: 'round icon',
        labeled: 'labeled',
      },
    }
  }
};

export default [
  {
    credits: 'https://semantic-ui.com/',
    name: 'Semantic UI',
    slug: 'semantic',
    url: '/style/semantic.min.css',
    config: SemanticTheme,
  },
  {
    credits: 'https://picturepan2.github.io/spectre/',
    name: 'Spectre CSS',
    slug: 'spectre',
    url: '/style/spectre.min.css',
    config: SpectreTheme,
  },
  {
    credits: 'https://tailwindcss.com/',
    name: 'Tailwind CSS',
    slug: 'tailwind',
    url: '/style/tailwind.min.css',
    config: TailwindTheme,
  },
];

