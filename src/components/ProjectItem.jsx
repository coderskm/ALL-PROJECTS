const ProjectItem = ({name, gitUrl, liveUrl}) => {
  return (
    <main className="main-style">
      <div className="project-item-style">
        <p>{name}</p>
        <div className="git-style">
          
          <a href={gitUrl} target="_blank" rel="noreferrer">
            Github Link
          </a>
        </div>
        <div className="live-style">
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Live Website
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProjectItem