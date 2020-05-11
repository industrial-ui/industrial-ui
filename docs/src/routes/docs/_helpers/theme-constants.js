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

    modal: {
      moveToBody: false,

      class: 'ui dropdown',
      openClass: 'active visible',
      closeClass: 'hidden',

      overlayClass: 'ui page dimmer',
      openOverlayClass: 'visible active',
      closeOverlayClass: 'hidden',

      bodyClass: '',
      openBodyClass: '',
      closeBodyClass: '',
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
  customTransitions: {
    fadeWithColor,
  },
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      isProperties: {
        multiselect: 'rounded border-solid border border-gray-300 py-2 px-4',
        search: 'rounded border-solid border border-gray-300',
      },
      class: 'inline-block relative',
      dropdownClass: 'absolute rounded bg-white my-2 shadow-xl z-10',
    },
  },
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

