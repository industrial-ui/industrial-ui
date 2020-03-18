<script>
  import {IUI, Dropdown} from 'industrial-ui';
  import './style-change.css';
  import {changeTheme, theme} from '../_helpers/active-theme';
  import stylesheets from '../_helpers/theme-constants';

  $: styles = stylesheets.filter(style => style.slug !== $theme.slug);

  const DDCongig = {
    components: {
      button: {
        class: 'iui-button',
      },
      dropdown: {
        transition: 'fade',
        transitionOptions: {delay: 0, duration: 200},
        class: 'iui-dropdown',
        openClass: 'open',
        triggerClass: 'trigger',
        dropdownClass: 'menu',
      }
    }
  };
</script>

<IUI config={DDCongig}>
  <Dropdown let:value let:close={close} id="choose-stylesheet">
    <div slot="trigger">
      {$theme.name}
    </div>
    <img slot="trigger" class="chevron" src="/img/chevron-down.svg" alt="select stylesheet" />

    <ul>
      {#each styles as style}
        <li on:click="{() => {changeTheme(style.slug); close();}}">{style.name}</li>
      {/each}
    </ul>
  </Dropdown>
</IUI>
