import Card from "./components/card";
import ResumeSection from "./components/resume";
import SkillsCard from "./components/skills";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container">
        <div className="main">
          <Card />
          <SkillsCard />
          <ResumeSection />
          <div className="projects">PROJECTS</div>
        </div>
      </div>
    </div>
  );
}

export default App;
