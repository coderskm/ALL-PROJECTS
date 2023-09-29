import { Information } from "./assets/Information"
import ProjectItem from "./components/ProjectItem"
const App = () => {
  return (
    <>
      <h1>All Project Done Till Now</h1>
      <div>
        {Information.map((item) => {
          return <ProjectItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
      
}

export default App