/* eslint-disable react/no-unescaped-entities */
import aboutImg1 from "../../../assets/images/about_us/person.jpg";
import aboutImg2 from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-20 my-32 p-5 md:p-0">
      <div className="relative mb-40 md:mb-0">
        <div className="w-full md:w-[460px]">
          <img
            src={aboutImg1}
            alt="about-page-image"
            className="rounded-lg object-fill"
          />
        </div>
        <div className="bg-white w-full md:w-[327px] p-2 rounded-lg absolute md:-right-12 md:-bottom-12">
          <img src={aboutImg2} alt="about-page-image"/>
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-xl text-red-600 font-bold">About Us</h3>
        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
        <p className="text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
        <button className="btn btn-error normal-case">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
