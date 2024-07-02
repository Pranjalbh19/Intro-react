import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header.jsx'; // no problem 
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx'; // Ensure consistent naming
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts
                key={index}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu className="menu">
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic &&  <p> Please select  a topic  </p>   }  
         {selectedTopic ? (

          
          <div id="tab-content">
              
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
 ) : null }
        </section>
      </main>
    </div>
  );
}

export default App;
