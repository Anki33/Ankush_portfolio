import { GanttChart, Blocks, Gem, GanttChartSquare  } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
    title:'UI/UX Designing',
    description:' UI/UX designers begin by understanding the needs and preferences of the target audience through user research techniques and usability testing.'
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title:'web Development',
    description:'Web development creation and maintenance of websites and web applications. It involves various disciplines, and visually appealing online experiences.'
  },
  {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title:'MEAN Developer',
    description:'An MEAN developer is a professional who specializes in creating web applications using the MongoDB, Express.js, Angular and Node.js.'
  },
];

const Serviceswork = () => {
  return <section className='mt-[170px]'>
    <div className='container mx-auto'>
    <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
    <div className=" grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
    {servicesData.map((item, index)=>{
                        return (<Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'>
                          <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center
                            items-center'>{item.icon}</div>
                          </CardHeader>
                          <CardContent className='text-center'>
                          <CardTitle className='mb-4'>
                            {item.title}
                          </CardTitle>
                          <CardDescription className='text-lg'>
                          {item.description}
                          </CardDescription> 
                          </CardContent>
                        </Card>);
                    })}
    </div>
    </div>
  </section>
}

export default Serviceswork