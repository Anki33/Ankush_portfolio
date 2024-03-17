import DevImage from "./DevImage"
import Image from "next/image"

// import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { User2 , MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar,Briefcase, icons} from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Ankush Kumar',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+91 81968-77647',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'ankushsaini2796@gmail.com',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Computer Science of Engineering',
    }
];

const infoExperience = [
   
    {
        company: 'Mobile Programming LLC',
        role: 'Software Developer',
        year: '2023-2023'
    },
     {
        company: 'Kiwitech',
        role: 'Software Engineer-Web',
        year: '2022-2023'
    },
    {
        company: 'G4S Security Services (India) Pvt. Ltd',
        role: 'Front End Developer',
        year: '2022-2022'
    },
    {
        company: 'Techbit Solutions Pvt. Ltd.',
        role: 'Software Engineer',
        year: '2019-2021'
    },
];
const infoEducation2 = [
   
    {
        company: 'Mobile Programming LLC',
        role: 'Software Developer',
        year: '2023-2023'
    },
     {
        company: 'Kiwitech',
        role: 'Software Engineer-Web',
        year: '2022-2023'
    },
    {
        company: 'LRS services',
        role: 'Front End Developer',
        year: '2022-2022'
    },
    {
        company: 'Claritus Consulting',
        role: 'UI developer',
        year: '2021-2022'
    },
    {
        company: 'Techbit Solutions Pvt. Ltd.',
        role: 'Software Engineer',
        year: '2019-2021'
    },
];


const infoEducation = [
 
        {
            university: 'LPU',
            qualification:'Bachelor of Computer Science and Engineering',
            years: '2019'
        },
        {
            
            university:'PSEB',
            qualification: 'Intermediate +2',
            years: '2015'
        },
        {
            university:'PSEB',
            qualification: 'Matriculation 10th',
            years: '2013'
        }
    
    // Add more directors if needed
  ];

const qualificationExperience =[

    {
        title:'experience',
        data:[
            {
                university: 'LPU',
                qualification:'computer science',
                years: '2019'
            },
            {
                
                university:'PSEB',
                qualification: '+2',
                years: '2015'
            },
            {
                university:'PSEB',
                qualification: '10th',
                years: '2013'
            }
        ]
    }
];
const skilldata1 = [
    {
        name: 'HTML, Bootstrap, CSS, Kendo UI, keen Themes, Tailwindcss',
    },
    {
        name: 'Angular, ReactsJs, ASP.NET, ASP.Net Core, Entity Framework, ADO.Net',
    },
    {
        name: 'NestApi, NestJs, NextJs, NodeJs, WebApi, RestApi, Google Charts',
    },
    {
        name: 'Typescript, Javascript, JSX, Shadcn UI, Github, Block Chain, YouTrack, Jira, Asana, Slack',
    }
];
const tools = [
    // {
    //     imgpath:'/about/vscode.svg',
    // },
    // {
    //     imgpath:'/about/figma.svg',
    // },
    {
        imgpath:'/about/Asp.png',
    },
    {
        imgpath:'/about/ado.png',
    },
    {
        imgpath:'/about/bootstrap.png',
    },
    {
        imgpath:'/about/C.png',
    },
    {
        imgpath:'/about/css.png',
    },
    {
        imgpath:'/about/html.png',
    },
    {
        imgpath:'/about/javascript.png',
    }
];
const tools2 = [
    {
        imgpath:'/about/oop.png',
    },
    {
        imgpath:'/about/sql_server.png',
    },
    {
        imgpath:'/about/visual.png',
    },
    {
        imgpath:'/about/visualstudio.png',
    },
    {
        imgpath:'/about/ggg.png',
    },
    {
        imgpath:'/about/angular.png',
    },
    {
        imgpath:'/about/nodejss.png',
    },
    {
        imgpath:'/about/mongodb.png',
    }
];



const About = () => {

    const getData = (arr, title)=>{
            return arr.find((item) => item.data === title);
    };
   
  return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                About me
                </h2>
            </div>
            <div className="flex flex-col xl:flex-row">
            <div className="hidden xl:flex flex-1 relative left-[200px]">
                <DevImage  containerstyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' 
                Imagesrc='/about/Copy5.png'/>
            </div>
            <div className="flex-1">
              <Tabs defaultValue="skills">
                <TabsList className="w-full grind xl:grind-cols-3 xl:max-w-[520px] ">
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>Qualification</TabsTrigger>
            
                </TabsList>
                <div className="text-lg mt-12 xl:mt-8">
                    <TabsContent value='personal'>
                    <div className="text-center xl:text-left">
                <h3 className="h3 mb-4">Unmatched Service Quality for over 10 Years</h3>
                <p className="subtitle max-w-xl xl:max-w-[720px]">
                    I specalize in crafting website with cutting edge technology, delivering dynamic and engaging user experience
                    Bringing forth expertise in design, installation and maintenance of web systems, equipped with a diverse and promising skill-set.
                    Proficient in an assortment of technologies, including Angular, ReactJs, ASP.NET, JavaScript. Able to effectively self-manage during independent projects, as well as collaborate in a team Work.
                </p>
                
                <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                    {infoData.map((item, index)=>{
                        return <div  className='flex items-center gap-x-4 mx-auto xl:mx-0'key={index}>
                                <div className="text-primary ">{item.icon}</div>
                                <div>{item.text}</div>
                        </div>
                    })}
                </div>
                <div className="flex flex-col gap-y-2">
                <div className="text-primary ">
                        Language skill
                </div>
                <div className="border-b border-border xl:max-w-[520px]">
                </div>
                <div>
                    English, Hindi, Punjabi
                </div>

                </div>
                </div>
                    </TabsContent>
                    <TabsContent value='qualification'>
                    <div>
                        <h3 className='h3 mb-8 text-center xl:text-left'>
                            My Awesome Journey
                        </h3>
                        <div className="grid md:grid-cols-2 gap-y-8">
                            <div className="flex flex-col gap-y-6">
                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                    <Briefcase/>
                                    <h4 className='capitalize font-medium'>
                                      Experience
                                    </h4>
                                </div>
                                <div>
                                <div className="flex flex-col gap-y-8">
                                {infoExperience.map((item, index)=>{
                        return <div  className='flex gap-x-8 group'key={index}>
                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                        </div>
                        </div>
                               <div>
                               <div className='font-semibold text-xl leading-none mb-2'>{item.company}</div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">{item.role}</div>
                                <div className="text-base font-medium">{item.year}</div>
                               </div>
                        </div>
                    })}
                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="flex flex-col gap-y-6">
                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                    
                                    <GraduationCap size={28}/>
                                    <h4 className='capitalize font-medium'>
                                      Education
                                    </h4>
                                </div>
                                <div>
                                <div className="flex flex-col gap-y-8">
                                {infoEducation.map((item, index)=>{
                        return <div  className='flex gap-x-8 group'key={index}>
                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                        </div>
                        </div>
                               <div>
                               <div className='font-semibold text-xl leading-none mb-2'>{item.university}</div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">{item.qualification}</div>
                                <div className="text-base font-medium">{item.years}</div>
                               </div>
                        </div>
                    })}
                    </div>
                                </div>
                            </div>
                          
                        </div>
                            
                        </div>
                        
                        
                      
                    </div>
                    </TabsContent>
                    <TabsContent value='skills'>
                    <div className='text-center xl:text-left'>
                        <h3 className="h3 mb-8 font-medium">Tools I Use Everyday</h3>
                        <div className="mb-16">
                            <h4 className='text-xl font-semibold mb-2'>
                            Skills
                            </h4>
                            <div className="border-b border-border mb-4 xl:max-w-[820px]"></div>
                            <div>
                            {skilldata1.map((item, index)=>{
                        return <div  className='w-10/4 text-center xl:text-left mx-auto xl:mx-0'key={index}>
                                <div className='subtitle font-medium'>{item.name}</div>
                        </div>
                    })}
                            </div>
                        </div>
                        <div>
                           <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                           <div className="border-b border-border mb-4 xl:max-w-[820px]"></div>
                           <div className="flex gap-x-8 justify-center xl:justify-start">
                           {tools.map((item, index)=>{
                        return <div  key={index}>
                               <Image src={item.imgpath}
                                width={75} height={75} alt="" priority
                               />
                        </div>
                    })}
                           </div>
                        </div>

                        {/* tools 2 */}
                        <div>
                           <div className="flex gap-x-8 justify-center xl:justify-start">
                           {tools2.map((item, index)=>{
                        return <div  key={index}>
                               <Image src={item.imgpath}
                                width={75} height={75} alt="" priority
                               />
                        </div>
                    })}
                           </div>
                        </div>
                    </div>
                    </TabsContent>
                </div>
              </Tabs>
            </div>
            </div>
           
        </section>
  );
    
  
}

export default About