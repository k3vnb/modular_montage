import { useGlobalContext } from 'contexts/GlobalContext';

export const useGlobalToastState = () => {
  const { toastState } = useGlobalContext();
  return toastState;
};
