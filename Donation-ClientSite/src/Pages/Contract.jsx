import { Helmet } from 'react-helmet-async';
import talkImg from '../assets/image/contract-removebg-preview.png'

const Contract = () => {
    return (
        <>
        <Helmet><title>Contract</title></Helmet>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8  mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                <img src={talkImg} alt="" />
            </div>
        </div>
        <form  className="space-y-6">
            <div>
                <label  className="text-sm">Full name</label>
                <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
            </div>
            <div>
                <label  className="text-sm">Email</label>
                <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
            </div>
            <div>
                <label  className="text-sm">Message</label>
                <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
        </form>
    </div>
        
        </>
    );
};

export default Contract;