<script>
  import {IUI, Dropdown} from 'industrial-ui';
  import './style-change.css';
  import {theme, changeTheme} from '../_helpers/active-theme';
  import stylesheets from '../_helpers/theme-constants';

  export let inNav = false;

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
  <Dropdown
    let:value
    let:close={close}
    id={inNav ? 'choose-stylesheet-nav' : 'choose-stylesheet'}
    class={'choose-stylesheet' + (inNav ? ' mobile' : '')}
  >
    <div slot="trigger">
      {$theme.name}
    </div>
    <img slot="trigger" class="chevron" src="/img/chevron-down.svg" alt="select stylesheet" />

    <ul>
      {#each styles as style}
        <li on:click="{() => {changeTheme(style.slug); close();}}" data-stylesheet={style.slug}>
          {style.name}
          <a href={style.credits} target="_blank" rel="noreferrer nofollow" on:click|stopPropagation>
            <img src="/img/question.svg" alt={'credits to ' + style.name} />
          </a>
        </li>
      {/each}
    </ul>
  </Dropdown>
</IUI>
