import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
export type FormHandle = {
  clear: () => void;
};
type FormProps = ComponentPropsWithoutRef<"form"> & {
  // passing onSave function type as props(void = return nothing)(unkown cuz the value the entered data is not yet know its type)
  onSave: (value: unknown) => void;
};
const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);
  // Exposing the ref as an api, this hook works only in a component that receive a forwarded ref.
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("Clearing");
        form.current?.reset();
      },
    };
  });
  // formEvent is a generic type where we can specify which exact element triggered that event using the angeled brackets <>
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // preventing default browser behavior of submitting the page and an HTTP Request is sent
    event.preventDefault();
    // adding logic to extract the data
    // getting the submitted data by creating a new FormData Object (build-in class. build into JavaScript)
    // this forData object allow us to automatically gather all the values that have been entered to any input field
    // inside of the form and group them together in such a data object
    // for this mechanism to WORK we MUST do: all the input that should be considered must receive a name (name prop)!!
    const formData = new FormData(event.currentTarget);
    // Object.fromEntries will convert the data object to a simpler object where we can then access data with data.name data.id and so on
    const data = Object.fromEntries(formData);
    //
    onSave(data);
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
