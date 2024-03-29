import Socials from './Social'

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
    <div className='container mx-auto'>
  <div className='flex flex-col items-center justify-between'>
    {/* socials */}
    <Socials
      containerstyle='flex gap-x-6 mx-auto xl:mx-0 mb-4'
      iconStyle='text-primary dark:text-white/70 text-[37px] hover:text-white dark:hover:text-primary transition-all'
    />

    {/* copyright */}
    <div className='text-muted-foreground'>
      Copyright © Ankush Kumar. All rights reserved.
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;