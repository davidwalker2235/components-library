import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.scss',
  shadow: true,
})
export class SimpleButton {
  @Prop() text = '';

  render() {
    return (
      <Host>
        <button>
          <span class="button-text">
            {this.text}
          </span>
        </button>
      </Host>
    );
  }

}
