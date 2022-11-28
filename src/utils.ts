import { MIN_LOGIN_VALUE_LENGTH, MAX_LOGIN_VALUE_LENGTH } from './consts';

type FieldEvent = React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement, MouseEvent>;

export const shake = (callback?: () => void) => {
  document.querySelector('.shaked-element')?.classList.add('shake');
  setTimeout(() => {
      document.querySelector('.shaked-element')?.classList.remove('shake');
    callback?.();
  }, 2000);
};

export const checkName = (evt: FieldEvent) => {  
  const valueLength = evt.target.value.length;

  if (valueLength < MIN_LOGIN_VALUE_LENGTH) {            
      evt.target.setCustomValidity(`add ${MIN_LOGIN_VALUE_LENGTH - valueLength} characters`)
  } else if (valueLength > MAX_LOGIN_VALUE_LENGTH) {            
      evt.target.setCustomValidity(`extra ${valueLength - MAX_LOGIN_VALUE_LENGTH} characters`)
  } else {
      evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();        
};

export const checkPassword = (evt: FieldEvent) => {  
  const value = evt.target.value;
  const reg = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

  if (!reg.test(value)) {            
      evt.target.setCustomValidity('Unreliable password')
  } else {
      evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();        
};