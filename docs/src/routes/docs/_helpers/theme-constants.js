export const SemanticTheme = {
  components: {
    button: {
      class: 'ui button',
      isProperties: {
        primary: 'primary',
        outline: 'outline',
        icon: 'round icon',
        labeled: 'labeled',
      },
    }
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
      },
    }
  }
};
export const MaterializeTheme = {
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
    name: 'semantic',
    url: '/style/semantic.min.css',
    config: SemanticTheme,
  },
  {
    name: 'spectre',
    url: '/style/spectre.min.css',
    config: SpectreTheme,
  },
  {
    name: 'materialize',
    url: '/style/materialize.min.css',
    config: MaterializeTheme,
  },
];

