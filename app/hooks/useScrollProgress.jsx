import React, {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setcompletion] =useState(0);
    useEffect(() =>{
        const updatescroll= () =>{
            const currentprogress= window.scrollY;
            const scrollheight= document.body.scrollHeight - window.innerHeight;

            if(scrollheight){
                setcompletion(Number(currentprogress/scrollheight).toFixed(2) * 100);
            }
        };

        window.addEventListener('scroll', updatescroll);

        return () => window.removeEventListener('scroll', updatescroll);

    }, [])
  return completion;
  
}

export default useScrollProgress