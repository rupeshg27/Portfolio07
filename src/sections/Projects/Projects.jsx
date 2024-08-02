import styles from './ProjectsStyles.module.css';
import Vote from '../../assets/Vote.png';
import Movie from '../../assets/Movie.png';
import Bank from '../../assets/Bank.png';
import Whether from '../../assets/Whether.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Vote}
          link="https://github.com/rupeshg27/Voting-WeB"
          h3="Vote"
          p="Voting Web"
        />
        <ProjectCard
          src={Movie}
          link="https://rupeshg27.github.io/MOVIE/"
          h3="iPapkorn"
          p="Movie Website"
        />
        <ProjectCard
          src={Bank}
          link="https://rupeshg27.github.io/Phill-Bank-1/"
          h3="Phill Bank"
          p="Bank Web"
        />
        <ProjectCard
          src={Whether}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Cloudy"
          p="Whether App"
        />
      </div>
    </section>
  );
}

export default Projects;