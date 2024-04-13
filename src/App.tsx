// import Container from "./components/Container";
import Form, { type FormHandle } from "./components/Form";
import Input from "./components/Input";
import Button from "./components/button";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormHandle>(null);
  // we should provide extra generic type to make it clear that the ref we manage will be connected to html input element and store this object
  // const input = useRef<HTMLInputElement>(null);
  function handleSave(data: unknown) {
    // we use "as" to convert the unkown type to other type
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      {/* <Container as={Button}>clickMe</Container>
      <Input label="Test" id="test" ref={input} /> */}
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
// <Input id="name" label="Your Name" type="text" />
// <Input id="age" label="Your Age" type="number" />
// <p>
//   <Button>A Button</Button>
// </p>
// <p>
//   <Button href="google.com">A Link</Button>
// </p>

export default App;
// function App() {
//   return (
//     <main>
//       <Input id="name" label="Your Name" type="text" />
//       <Input id="age" label="Your Age" type="number" />
//       <p>
//         <Button el="button">A Button</Button>
//       </p>
//       <p>
//         <Button el="anchor" href="google.com">
//           A Link
//         </Button>
//       </p>
//     </main>
//   );
// }

// export default App;
