'use client'
import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import Projectedcard from '@/components/Projectedcard'


const projectData = [
  {
    image: "/work/2.png",
    category: "Vuejs, Keentheme",
    name: "SIX-LEAF ",
    description:
      "In that project Amazon providing facilities to seller in which seller can grow and AutoOverview his scale in selling. and seller can use different types of services that are provided by Amazon for Scaling and selling. ",
    Link: "https://www.sixleaf.com/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Reactjs , NestJs, NestAPI",
    name: "OODAPP",
    description:
      "Developed the Web Application using React where User can buy Auction and normal products like Amazon.",
    Link: "https://www.oodapp.com/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Reactjs, WebGi, ThreeJs, GSAP",
    name: "iPhone 3D Animation",
    description:
      "Learn how to find 3D models and display them on your website using WebGi and use React and GSAP to make a 3D animation of that model also learn how to optimize 3D animations in React for mobile devices.",
    Link: "https://apple-iphone-ankush.netlify.app",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Angular, KendoUI, ASP.Net, SQL Server",
    name: "Stakeholder Master-FCE Connect",
    description:
      "FCE Connect is System Dashboard use for user login ,Trade, AE, SI/Integration and Intel Employees login.",
    Link: "https://fceconnect.intel.com/secure/Dashboard.jspa",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Angular, KendoUI, ASP.Net, SQL Server",
    name: "FCE PIP( Poc Information Portal)",
    description:
      "PIP is use for electricity management tool and to calculate the consumption of electricity in Intel chip.",
    Link: "http://167.86.118.102:8078",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Angular, KendoUI, ASP.Net, SQL Server",
    name: "Stakeholder Master-DCT",
    description:
      "FCE DCT is Project Dashboard where can you manage and view all the projects.",
    Link: "http://167.86.118.102:8078/dct",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "HTML, CSS3, AnimationShadow",
    name: "Education Teaching Website",
    description:
      "Learn how to build education teaching website with attractive design using simple plugins.",
    Link: "https://shiningstartutorial.in",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Angular, KendoUI, ASP.Net, SQL Server",
    name: "Stakeholder Master-Intel",
    description:
      "Stakholder is an application is to provide and manage access to various projects to Intel Teams and external partners (companies). This application helps to map projects with external companies and manage users and helps in managing permissions of those projects among the mapped users by assigning roles.",
    Link: "http://167.86.118.102:8078/admin/stakeholder-master-list",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Angular, KendoUI, ASP.Net, SQL Server",
    name: "POWER-HUB-UI Intel",
    description:
      "PowerHub is an electrical component assignment and management system. PowerHub is built with the intention to ease the workload of Electrical Engineers working for installation and un-installation of the Electrical Components from factory with tracking of electrical circuits, tools and their connections. PowerHub application allows electrical engineers and designers to assign a tool(s) to a scheduler which keeps track of tool installation or un-installation in a facility.",
    Link: "http://167.86.118.102:44313/panels",
    github: "/",
  },
]; 
const uniquecategory =[
  'All projects',
  ...new Set(projectData.map((item)=>item.category)),
];
const Projects = () => {
  const[categories, setCategories] =useState(uniquecategory);
  const[category, setcategory] =useState('All projects');
  const filterproject =projectData.filter((project) =>{

    return category === 'All projects'
    ? project
    : project.category === category
  });
  console.log(filterproject, 'filter data');
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full  h-full  mb-12 mx-auto  dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger 
                onClick={()=>setcategory(category)}
                value={category}
                key={index}
                className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
              );
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filterproject.map((project, index)=>{
                return (
                  <TabsContent value={category} key={index}>
                    <Projectedcard project={project}/>
                  </TabsContent>
                )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
  
}

export default Projects;