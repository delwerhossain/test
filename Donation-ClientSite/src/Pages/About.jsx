import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div>

			<Helmet><title>
				FoodDonation || Home</title></Helmet>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our Volentiers</h1>
		<p className="max-w-2xl text-center dark:text-gray-400">Their dedication builds bridges, fosters understanding, and strengthens the bonds within our communities. Your efforts create a sense of belonging and unity. Thank you for your tireless dedication to building a better tomorrow.</p>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/VVbGh1W/front-view-young-male-red-sweater-black-wall.jpg" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Volenteer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/wKr2P3p/group-volunteers-nature.jpg" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Volenteer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/1nQr8X1/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Volenteer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/9TsPnNZ/happy-japanese-volunteer-with-heart-53876-20901.jpg" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Volenteer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/WxPMYQ7/brunette-mature-woman-journalist-eyeglasses-typing-typewriter-indoors.jpg" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Volenteer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/cJm2rnh/businessman-using-laptop-making-notes.jpg" />
				<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Volenteer</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default About;