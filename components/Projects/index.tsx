import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import ProjectsData from "./ProjectsDataHome";

const Projects = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Projects"
          paragraph="Discover Blue Design Studio's Latest Projects: Showcasing Innovative Designs Redefining Interior Excellence"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {ProjectsData.map((project) => (
            <div key={project.id} className="w-full">
              <SingleProject blog={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
