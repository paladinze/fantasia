import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ft-modal',
  styleUrl: 'ft-modal.css',
  shadow: true,
})
export class FtModal {

  @Event()
  confirm: EventEmitter<null>;

  private handleClick = () => {
    this.confirm.emit();
  };

  render() {
    return (
      <div class='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
        <div class='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

        <div class='fixed inset-0 z-10 overflow-y-auto'>
          <div class='flex min-h-full items-center justify-center p-12 text-center sm:p-0'>

            <div
              class='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <div class='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div class='sm:flex sm:items-start'>
                  <div
                    class='bg-indigo-600 mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-14 sm:w-14'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="laptop-icon" viewBox="0 0 512 512">
                      <title>Laptop</title>
                      <rect x="48" y="96" width="416" height="304" rx="32.14" ry="32.14" fill="none"
                            stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
                            d="M16 416h480" />
                    </svg>
                  </div>
                  <div class='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <h3 class='text-lg font-medium leading-6 text-gray-900' id='modal-title'>
                      <slot name='title' />
                    </h3>
                    <div class='mt-2'>
                      <p class='text-sm text-gray-500'>
                        <slot name='description' />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                <button type='button'
                        onClick={this.handleClick}
                        class='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'>Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
