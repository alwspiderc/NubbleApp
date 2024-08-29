import {create} from 'zustand';

import {ToastService} from './toastTypes';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({toast: toast}),
  hideToast: () => set({toast: null}),
}));

export function useToastZustand(): ToastService['toast'] {
  return useToastStore(stat => stat.toast);
}

export function useToastServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const showToast = useToastStore(state => state.showToast);
  const hideToast = useToastStore(state => state.hideToast);

  return {showToast, hideToast};
}
