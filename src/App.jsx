import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown preview!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
  
\`\`\`
// this is multi-line code:
  
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
  
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
  
And if you want to get really crazy, even tables:
  
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
  
- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
  
  
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
  
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);
  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  }

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked.parse((markdown));
    console.log(document.getElementsByTagName('code')[1].innerHTML.toString());
    document.getElementsByTagName('code')[1].innerHTML = Prism.highlight(document.getElementsByTagName('code')[1].innerHTML.toString().replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>'), Prism.languages.javascript, 'javascript');
  }, [markdown]);

  return (
    <div className="App vertically-centered-columns">
      <div className='editor-div'>
        <div className='toolbar'>
          <h1 className='vertically-centered-row'>
            <i className="fa fa-free-code-camp" style={{marginRight: '10px'}}></i>
            Editor
          </h1>
        </div>
        <textarea id='editor' value={markdown} onChange={(event) => handleMarkdownChange(event)}>
        </textarea>
      </div>
      <div className='preview-div'>
        <div className='toolbar'>
          <h1 className='vertically-centered-row'>
            <i class="fa fa-free-code-camp" style={{marginRight: '10px'}}></i>
            Previewer
          </h1>
        </div>
        <div id='preview'></div>
      </div>
    </div>
  )
}

export default App
