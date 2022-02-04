import { useState } from "react";
import Preview from "./Preview";


const toggleExpandCompress = () => {
  if (document.getElementById("editor").style.height === "200px") {
     document.getElementById("editor").style.height = "500px"

     document
       .getElementById("exp-butt")
       .setAttribute("class", "fas fa-compress-alt");
  } else {
    document.getElementById("editor").style.height = "200px"
      document
        .getElementById("exp-butt")
        .setAttribute("class", "fas fa-expand-alt");
  }
};

window.onload = toggleExpandCompress;

const Editor = () => {
  const defaultText = `# This is h1 text

## This is h2

This one is an \`inline code\`

\`\`\`
This one is a code block with many lines:
However there's no code in here...
Okay, okay... I'll show you some Python like:

import sleep

shelter = ['Goofy', 'Pluto', 'Tiny', 'Angry']
for dog in shelter:
  print(dog,'says, Woof!')
  time.sleep(2)

\`\`\`

Bold text looks like **this**, italic looks like _that_.


Check out my portfolio page: [links](https://azotamiota.github.io)\n
Some blockquote about solar eclipse:
> A solar eclipse occurs when a portion of the Earth is engulfed in a shadow cast by the Moon which fully or partially blocks sunlight. This occurs when the Sun, Moon and Earth are aligned. Such alignment coincides with a new moon (syzygy) indicating the Moon is closest to the ecliptic plane. In a total eclipse, the disk of the Sun is fully obscured by the Moon. In partial and annular eclipses, only part of the Sun is obscured.
And if you want to get really crazy, even tables:

1. List item

### And a cute cheetah here:
![Cheetah](https://images.unsplash.com/photo-1582425312148-de9955e68e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)
`;
  const [baseText, updateBaseText] = useState(defaultText);

  const handleChange = (event) => {
    updateBaseText(event.target.value);
  };

  return (
    <>
      <p className="m-0 fs-2 text-center fw-bold p-5">
        Simple Markdown Previewer
      </p>
      <div
        id="editor-header"
        className="d-flex ms-auto me-auto shadow p-2 rounded-top justify-content-between"
      >
        <label htmlFor="editor">Editor</label>
        <div id="expand1">
          <button
            id="exp-butt"
            className="fas fa-expand-alt"
            onClick={toggleExpandCompress}
          ></button>
        </div>
      </div>
      <textarea
        className="ms-auto me-auto mb-4 shadow rounded-bottom"
        id="editor"
        onChange={handleChange}
        defaultValue={defaultText}
      ></textarea>

      <Preview content={baseText} />
    </>
  );
};

export default Editor;
