import { SyntheticEvent, useState } from "react";
import { useStack } from "./useStack";

function App() {
  const { push, peek, pop } = useStack();
  const [text, setText] = useState("");
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    push({
      key: text,
      component: "a component",
      queryParams: [{ key: text, value: text.toUpperCase() }],
    });
  };

  return (
    <section>
      <pre style={{ width: "100%" }}>
        {JSON.stringify(peek().slice().reverse(), null, 2)}
      </pre>
      <form
        onSubmit={handleSubmit}
        style={{ display: "inline-flex", flexDirection: "column", gap: 12 }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add to stack</button>
        <button type="button" onClick={() => pop()}>
          Remove from the stack
        </button>
      </form>
    </section>
  );
}

export default App;
