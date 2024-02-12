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
    title:'web design',
    description:'cfdsfsdfesfs efesfesrferfeeffrerfe  sreresrereresrere sreresresresresresresr'
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title:'web Development',
    description:'cfdsfsdfesf sefesfesrferfeeff rerfesreresrereresre resreresr esresresresresr'
  },
  {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title:'App Development',
    description:'cfdsfsdfesf sefesfesrfer feeffrerfesreresre reresrere sreresresresresresresr'
  },
];

const Serviceswork = () => {
  return <section className='mb-12 xl:mb-36'>
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