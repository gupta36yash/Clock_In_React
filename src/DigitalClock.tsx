import {useState, useEffect} from "react";

function DigitalClock(){
    const [time, setTime]=useState(new Date());

    useEffect(()=>{ //setInterval(function,delay)
      const intervalId=setInterval(()=>{
        setTime(new Date());
      },1000);
      
      return ()=>{
        clearInterval(intervalId);
      }
    }, []);
    
    function FormatTime():string{
      let hours: number=time.getHours();
      const mins: number=time.getMinutes();
      const secs: number=time.getSeconds();
  
      const meridian: string= hours>=12?"PM":"AM";
      hours= hours%12 || 12;
  
      return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${meridian}`;
    }
  
    function padZero(number: number):string{
      if (number<10) {
        return "0"+number;
      }
      return ""+number;
    }

    return (
        <div className="Clock-Container">
            <div className="Clock">
                <span>{FormatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;