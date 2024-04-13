import { ComponentPropsWithoutRef } from "react";

// descriminatied union
type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };
type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

// using type predicate to say that if the boolean value is true, the argument passed to the function is of a specific type "AnchorProps"
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}
function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
}
export default Button;
// another way
// // descriminatied union
// type ButtonProps = {
//   el: "button";
// } & ComponentPropsWithoutRef<"button">;
// type AnchorProps = {
//   el: "anchor";
// } & ComponentPropsWithoutRef<"a">;
// function Button(props: ButtonProps | AnchorProps) {
//   //   const { el, ...otherProps } = props;
//   if (props.el === "anchor") {
//     return <a {...props}></a>;
//   }
//   return <button {...props}></button>;
// }
// export default Button;
