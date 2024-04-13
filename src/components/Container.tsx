// Polimorphic wrapper component

import {
  type ReactNode,
  type ElementType,
  ComponentPropsWithoutRef,
} from "react";

// when not knowing what the component will wrap.
// using the angle brackets to accept some type that should be then be set from the place the ContainerProps is being used
type ContainerProps<T extends ElementType> = {
  // receive the identifer of the component that should actually be retured by this container component
  as?: T;
  // valid identefier of a component
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// converting the function to generic function
function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  // component needs to be with capital c so we can use this constant as jsx element.
  // remaping the name..
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
// or like this:
// function Container({ as: Component }: ContainerProps) {
//     // component needs to be with capital c so we can use this constant as jsx element.
//     const Component = as;
//     return <div></div>;
//   }
export default Container;
