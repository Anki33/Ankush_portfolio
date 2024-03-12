'use client'
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Projectedcard from "@/components/Projectedcard";


const projectData = [
  {
    image: "/work/Six-leaf.png",
    category: "vue js, Angular 8, Keen theme, ASP.Net 4.0, SQL Server",
    name: "SIX-LEAF ",
    description:
      "In that project Amazon providing facilities to seller in which seller can grow and AutoOverview his scale in selling. and seller can use different types of services that are provided by Amazon for Scaling and selling. ",
    Link: "https://www.sixleaf.com/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js ,React-Redux, Typescript, Nest Js, SQL Server",
    name: "OODAPP",
    description:
      "Developed the Web Application using React where User can buy Auction and normal products like Amazon.",
    Link: "https://www.oodapp.com/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React , WebGi (powered by Three.js) and GSAP.",
    name: "iPhone 3D Animation",
    description:
      "Learn how to find 3D models and display them on your website using WebGi and use React and GSAP to make a 3D animation of that model also learn how to optimize 3D animations in React for mobile devices.",
    Link: "https://apple-iphone-ankush.netlify.app",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Angular 8, Kendo UI, ASP.Net 4.0, SQL Server.",
    name: "Stakeholder Master-FCE Connect",
    description:
      "FCE Connect is System Dashboard use for user login ,Trade, AE, SI/Integration and Intel Employees login.",
    Link: "https://fceconnect.intel.com/secure/Dashboard.jspa",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Angular 8, Kendo UI, ASP.Net 4.0, SQL Server",
    name: "FCE PIP( Poc Information Portal)",
    description:
      "PIP is use for electricity management tool and to calculate the consumption of electricity in Intel chip.",
    Link: "http://167.86.118.102:8078",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Angular 8, Kendo UI, ASP.Net 4.0, SQL Server",
    name: "Stakeholder Master-DCT",
    description:
      "FCE DCT is Project Dashboard where can you manage and view all the projects.",
    Link: "http://167.86.118.102:8078/dct",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "HTML, CSS3 and Bootstrap , Animation Shadow.",
    name: "Education Teaching Website",
    description:
      "Learn how to build education teaching website with attractive design using simple plugins.",
    Link: "https://shiningstartutorial.in",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Angular 8, Kendo UI, ASP.Net 4.0, SQL Server.",
    name: "Stakeholder Master-Intel",
    description:
      "Stakholder is an application is to provide and manage access to various projects to Intel Teams and external partners (companies). This application helps to map projects with external companies and manage users and helps in managing permissions of those projects among the mapped users by assigning roles.",
    Link: "http://167.86.118.102:8078/admin/stakeholder-master-list",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Angular 8, Kendo UI, ASP.Net 4.0, SQL Server",
    name: "POWER-HUB-UI Intel",
    description:
      "PowerHub is an electrical component assignment and management system. PowerHub is built with the intention to ease the workload of Electrical Engineers working for installation and un-installation of the Electrical Components from factory with tracking of electrical circuits, tools and their connections. PowerHub application allows electrical engineers and designers to assign a tool(s) to a scheduler which keeps track of tool installation or un-installation in a facility.",
    Link: "http://167.86.118.102:44313/panels",
    github: "/",
  },
];  
const Work = () => {
  return (
    <section className="relative mt-7 xl:mt-28">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
          Take a look at something I've worked on, such as a case study, real project, and more
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[580px]" slidesPerView={1} breakpoints={{
            640:{
              slidesPerView: 2
            }

          }} spaceBetween={30} modules={[Pagination]}
          pagination={{clickable: true}}>
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <Projectedcard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Work;
