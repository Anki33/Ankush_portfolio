import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Link from "next/link";
import DevImage from "./DevImage";
import Badge from "./Badge";
import Social from "./Social";




const Hero = () => {

  return (
    <section
      className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero
  bg-no-repeat bg-bottom bg-cover dark:bg-none "
    >
      <div className="container mx-auto">
        <div className="flex  justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Ankush Kumar</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Experienced Web Developer adept in all stages of Advanced Web
              development, Knowledgeable in User Interface, Testing, and
              Debugging Processes
              </p>
            
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  contact me <Send size={18} />
                </Button>
              </Link>
              <Link href="https://www.canva.com/design/DAF66Ow7bCQ/E_VEGjSQIjUU3zXUaT04Rg/edit?utm_content=DAF66Ow7bCQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="/">
              <Button variant='secondary' className='gap-x-2'>
                Download CV <Download size={18}/>
            </Button>
              </Link>
               
            </div>
            <Social
              containerstyle="flex gap-x-6 mx-auto xl:mx-0"
              iconStyle="text-foreground text-[40px] hover:text-primary transition-all"
            />
          </div>

          <div className="hidden xl:flex relative ">
            <Badge
              containerStyles="absolute top-[24%] -right-[-15rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={5}
              badgetext="years of Experience"
            />
            <Badge
              containerStyles="absolute top-[80%] -right-[-15rem]"
              icon={<RiTodoFill />}
              endCountNum={20}
              badgetext="Finished Projects"
            />
            <Badge
              containerStyles="absolute top-[55%] -left-[8rem]"
              icon={<RiTeamFill />}
              endCountNum={10}
              badgetext="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[505px] h-[490px] bg-no-repeat absolute -top-1 -right-2">
              <DevImage
                containerstyles="bg-hero_shape w-[460px] h-[480px] bg-no-repeat relative bg-bottom"
                Imagesrc="/hero/Ankushphoto-hd.png"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
