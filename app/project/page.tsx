import SingleProject from "@/components/Projects/SingleProject";
import ProjectsData from "@/components/Projects/ProjectsData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Project = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Latest Projects"
        description="Discover Blue Design Studio's Latest Projects: Showcasing Innovative Designs Redefining Interior Excellence"
      />
      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="gap-y-10 -mx-4 flex flex-wrap justify-center">
            {ProjectsData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleProject blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
