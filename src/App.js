import Card from "./components/card";
import SkillsCard from "./components/skills";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container">
        <div className="main">
          <Card />
          <div className="resume">RESUME</div>
          <SkillsCard />
          <div className="projects">PROJECTS</div>
        </div>
      </div>
    </div>
  );
}

export default App;
