import '../App.css'
import Card from './Card.tsx';
import Profile from "./Profile.tsx";
import gamepad1 from '../assets/gamepad1.svg'
import gamepad2 from '../assets/gamepad2.svg'
import gamepad3 from '../assets/gamepad3.svg'
import gamepad5 from '../assets/gamepad5.svg'
import gamepad6 from '../assets/gamepad6.svg'
import gamepad4 from '../assets/gamepad4.svg'


const Carcas = () => {

    return(
        <section className='w-full min-h-screen bg-[#0E1323] flex justify-center items-center'>
            <div className='p-[12%] md:pb-[0%] md:pt-[0%] grid gap-12 md:gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <Profile/>
                <Card text='Work' title='32hrs' description='Last Week - 36hrs' image={gamepad1}/>
                <Card text='Play' title='10hrs' description='Last Week - 36hrs' image={gamepad2}/>
                <Card text='Study' title='4hrs' description='Last Week - 36hrs' image={gamepad3}/>
                <Card text='Excercise' title='4hrs' description='Last Week - 36hrs' image={gamepad4}/>
                <Card text='Social' title='5hrs' description='Last Week - 36hrs' image={gamepad5}/>
                <Card text='Self Care' title='2hrs' description='Last Week - 36hrs' image={gamepad6}/>
            </div>
        </section>
    )
}

export default Carcas