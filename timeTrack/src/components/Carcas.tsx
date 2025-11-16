import '../App.css'
import jeremy from '../assets/jeremy.svg'
import gamepad4 from '../assets/gamepad4.svg'
import etc from '../assets/etc.svg'

const Carcas = () => {

    function Card(props:any){
        return(
            <div className='relative flex flex-col justify-between'>
                <div className='h-50 md:h-50 z-0 bg-amber-100 rounded-[15px]'></div>
                <div className='z-40 top-[25%] bg-[#1C204B] p-[7%] md:p-[12%] left-0 right-0 absolute rounded-[15px] flex flex-col gap-6'>
                    <div className='w-full flex justify-between'>
                        <p className='font-normal text-[18px] leading-[100%] tracking-[1px] text-[#fff]'>{props.text}</p>
                        <img src={etc} className='w-[21px] h-[5px]' />
                    </div>
                    <div className='flex items-center md:items-start md:flex-col justify-between gap-1'>
                        <h1 className='font-normal text-[56px] leading-[100%] text-[#ffff] '>{props.title}</h1>
                        <span className='font-normal text-[15px] leading-[100%] tracking-[1px] text-[#BBC0FF]'>{props.description}</span>
                    </div>
                </div>
            </div>
        )
    }



    return(
        <section className='w-full min-h-screen bg-[#0E1323] flex justify-center items-center'>
            <div className='p-[12%] md:p-[0%] grid gap-12 md:gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                     <div className='bg-[#1C204B] rounded-[15px] row-start-1 row-end-3'>
                         <div className='rounded-[15px] bg-[#5747EA] p-[7%] items-center gap-6 flex md:w-auto md:flex-col md:items-start md:p-[12%] w-[450px] '>
                             <img src={jeremy} className='w-[78px] h-[78px]'/>
                             <div className='md:mt-[26%] md:mb-[16%] flex flex-col gap-2 justify-center  '>
                                 <span className='text-[#BBC0FF] font-normal text-[14px] leading-[100%]'>Report for</span>
                                 <h1 className='text-[#fff] font-normal text-[40px] leading-[100%]'>Jeremy Robson</h1>
                             </div>
                         </div>
                         <div className='flex items-center md:p-[12%] p-[7%]'>
                             <ul className='flex md:flex-col justify-between md:gap-4 w-full '>
                                 <li className='text-[#7078C9] hover:text-[#FFFFFF] cursor-pointer font-normal text-[18px] leading-[100%] '>Daily</li>
                                 <li className='text-[#7078C9] hover:text-[#FFFFFF] cursor-pointer font-normal text-[18px] leading-[100%] '>Weekly</li>
                                 <li className='text-[#7078C9] hover:text-[#FFFFFF] cursor-pointer font-normal text-[18px] leading-[100%] '>Monthly</li>
                             </ul>
                         </div>
                     </div>

                <Card text='Work' title='32hrs' description='Last Week - 36hrs' />
                <Card text='Play' title='10hrs' description='Last Week - 36hrs' />
                <Card text='Study' title='4hrs' description='Last Week - 36hrs' />
                <Card text='Excercise' title='4hrs' description='Last Week - 36hrs' />
                <Card text='Social' title='5hrs' description='Last Week - 36hrs' />
                <Card text='Self Care' title='2hrs' description='Last Week - 36hrs' />





            </div>
        </section>
    )
}

export default Carcas