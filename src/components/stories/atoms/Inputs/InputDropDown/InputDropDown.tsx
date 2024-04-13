// Importa las herramientas necesarias de Qwik
import { component$, useStore, $ } from '@builder.io/qwik';

export interface InputOption {
  value: string;
  label: string;
}

export const InputDropDown = component$((props: {
  id: string;
  label?: string;
  placeholder?: string;
  options: InputOption[];
  value?: string;
  disabled?: boolean;
  onChange: (event: InputEvent) => void;
}) => {
//   const state = useStore({
//     openDropdown: false,
//     inputText: '',
//     optionFocus: -1,
//   });

//   const defaultOptionLabel = (options: InputOption[], defaultValue?: string) => {
//     const option = options.find(option => option.value === defaultValue);
//     return option ? option.label : '';
//   };

//   const defaultOptionFocus = (options: InputOption[], defaultValue?: string) => {
//     return options.findIndex(option => option.value === defaultValue);
//   };

//   const handleKeyDropdown = $( (event: KeyboardEvent) => {
//     event.preventDefault();
//     switch (event.code) {
//       case 'ArrowDown':
//         // Logic for ArrowDown
//         break;
//       case 'ArrowUp':
//         // Logic for ArrowUp
//         break;
//       case 'Enter':
//         // Logic for Enter
//         break;
//       // Implement additional logic as necessary
//     }
//   });

  const onClickDropdownItem = $( (option: InputOption) => {
    // Update the input text and option focus
    // Emit the change event
  });

  return (
    <div>
    {props.label && <label>{props.label}</label>}
    <select  id={props.id}
        onInput$={props.onChange}>
      {props.options.map(option => (
        <option key={option.value} value={option.value} selected={props.value === option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  );
});
