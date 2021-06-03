import Card from "./components/card";
import Projects from "./components/projects";
import ResumeSection from "./components/resume";
import SkillsCard from "./components/skills";
import GeneralContextProvider from "./context/general.context";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container">
        <div className="main">
          <GeneralContextProvider>
            <Card />
            <SkillsCard />
            <ResumeSection />
            <Projects />
          </GeneralContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
