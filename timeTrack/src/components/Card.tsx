import etc from "../assets/etc.svg";

interface CardProps{
    title: string;
    description: string;
    text: string;
    image: string;
}

function Card(props:CardProps){
    return(
        <div className='relative flex flex-col justify-between'>
            <img src={props.image} className="w-full h-[200px] object-cover object-[95%] rounded-[15px]" />
            <div className='z-40 top-[25%] cursor-pointer hover:bg-[#33397A] duration-500 ease-in-out bg-[#1C204B] p-[7%] md:p-[12%] left-0 right-0 absolute rounded-[15px] flex flex-col gap-6'>
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

export default Card;