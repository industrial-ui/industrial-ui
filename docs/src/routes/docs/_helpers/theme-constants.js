export const SemanticTheme = {
  customTransitions: {
    fadeWithColor: (node, {delay = 0, duration = 1000}) => ({
      delay,
      duration,
      css: t => `
        opacity: ${t};
        background-color: hsl(${t * 255}, 70%, 30%);
      `
    }),
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
  components: {
    button: {
      class: 'btn',
      isProperties: {
        primary: 'primary',
        outline: 'outline',
        icon: 'round icon',
        labeled: 'labeled',
        link: ''
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
      class: 'dropdown',
      openClass: '',
      closeClass: '',
      triggerClass: '',
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
    name: 'Semantic UI',
    slug: 'semantic',
    url: '/style/semantic.min.css',
    config: SemanticTheme,
  },
  {
    name: 'Spectre CSS',
    slug: 'spectre',
    url: '/style/spectre.min.css',
    config: SpectreTheme,
  },
  {
    name: 'Tailwind CSS',
    slug: 'tailwind',
    url: '/style/tailwind.min.css',
    config: TailwindTheme,
  },
];

