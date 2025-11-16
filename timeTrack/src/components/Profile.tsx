import jeremy from "../assets/jeremy.svg";

const Profile = () =>{
    return(
        <div className='bg-[#1C204B] rounded-[15px] row-start-1 row-end-3'>
            <div className='rounded-[15px] bg-[#5747EA] p-[7%] items-center gap-6 flex md:w-auto md:flex-col md:items-start md:p-[12%] w-[450px] '>
                <img src={jeremy} className='w-[78px] h-[78px]'/>
                <div className='md:mt-[16%] md:mb-[30%] flex flex-col gap-2 justify-center  '>
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
    )
}

export default Profile