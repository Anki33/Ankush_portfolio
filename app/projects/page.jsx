'use client'
import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import Projectedcard from '@/components/Projectedcard'

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    Link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "vue jssas",
    name: "Project Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    Link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react jsddcscs",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    Link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Angular js",
    name: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    Link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "ASP Net js",
    name: "Project Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    Link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Animation js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    Link: "/",
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