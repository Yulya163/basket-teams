export const shake = (callback?: () => void) => {
  document.querySelector('.shaked-element')?.classList.add('shake');
  setTimeout(() => {
      document.querySelector('.shaked-element')?.classList.remove('shake');
    callback?.();
  }, 2000);
}  