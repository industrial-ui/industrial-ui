import React, {PureComponent} from 'react';
import Button from './Button.svelte';

export default class extends PureComponent {

  componentDidMount() {
    const {title} = this.props;

    console.log(this.slot);
    this.button = new Button({
      target: this.el,
      data: {title},
      slots: {
        default: this.slot,
      }
    });

    // this.button.on('state', ({ current: { title }, changed }) => {
    //   if (changed.title) {
    //     this.props.onChange({title});
    //   }
    // });
  }

  componentWillReceiveProps({title}) {
    this.button.set({title});
  }

  componentWillUnmount() {
    this.button.destroy();
  }

  render() {
    return (
      <div ref={el => this.el = el} className={'nothing'}>
        <div ref={el => this.slot = el} className={'anything'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
