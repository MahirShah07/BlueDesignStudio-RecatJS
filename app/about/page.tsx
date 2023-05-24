import AboutSectionOne from "@/components/About/AboutSectionOne";
import Work from "@/components/Work";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description=""
      />
      <AboutSectionOne />
      <Work />
    </>
  );
};

export default AboutPage;
