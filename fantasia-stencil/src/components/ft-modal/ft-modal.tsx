import { Component, h } from '@stencil/core';

@Component({
  tag: 'ft-modal',
  styleUrl: 'ft-modal.css',
  shadow: true,
})
export class FtModal {

  render() {
    return (
      <div class='zecheng bg-indigo-500 p-6 rounded-md flex justify-center'>
        <h1 class='text-white font-sans'>This is a Stencil component using Tailwind</h1>
      </div>
    );
  }

}
