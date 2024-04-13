import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
  // to use ...props we need to use ComponentPropsWithoutRef and the input inside can be change to mathch the needed element
} & ComponentPropsWithoutRef<"input">;

// to use ref we need forwardRef and to pass it the component
// forwardRef is a generic function where you dont have to but typically should provide extra type information about some related type
// and here the related type is the type of value that will be stored in the ref so we define it inside the angle brackets.
// and if we define the first type then we must define the second type that refers to the type of props this wrapped function will receive.
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
