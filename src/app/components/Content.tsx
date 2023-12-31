import Image from 'next/image';
import React from 'react';
import blob from 'public/blob.svg';
interface Features {
	title: string;
	paragraph: string;
	image: string;
	alt: string;
}

const content: Features[] = [
	{
		title: 'Live Code Preview',
		paragraph:
			'See your code preview update in real time as you build. React hooks are enabled for application lifecycle management. ',
		image: `/codepreview.png`,
		alt: 'code-preview',
	},
	{
		title: 'State Management',
		paragraph:
			'React Hooks are enabled to handle your state across components. Also, pass in props from a parent component with the click of a button!',
		image: `/statemanagement.png`,
		alt: 'url',
	},
	{
		title: 'Component Sharing',
		paragraph:
			'Developers can now share and upload ready made components in the newly developed marketplace.',
		image: `/codepreview.png`,
		alt: 'url',
	},
];

const Content: React.FC = () => {
	const backgroundStyle: React.CSSProperties = {
		backgroundImage: `url(${blob})`,
		backgroundPosition: 'top', // Align the background image to the top
		backgroundSize: 'cover',
	};

	return (
		<div
			className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 space-y-16 "
			style={backgroundStyle}
		>
			<img src={blob} alt="" />
			<div className="py-20 mx-auto max-w-2xl text-center margin-auto">
				<h2 className=" text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Create Your React App
				</h2>
				<p className="mt-6 text-lg leading-8 text-gray-300">
					ReacType is a prototyping tool that allows users to visualize their
					application architecture dynamically, employing a drag-and-drop canvas
					display and an interactive, real-time component code preview.
				</p>
			</div>
			{content.map((item, index) => (
				<div
					key={index}
					className="grid gap-8 gap-y-20 lg:grid-cols-2 items-center justify-items-center"
				>
					<div className={index % 2 === 0 ? 'w-full' : 'lg:order-last w-full'}>
						<Image
							className="w-full rounded-lg border border-slate-400"
							width={600}
							height={320}
							quality={100}
							src={item.image}
							alt={item.alt}
							unoptimized={true}
						/>
					</div>
					<div className={index % 2 === 0 ? 'lg:order-last' : ''}>
						<div className="flex flex-col justify-center items-center">
							<div className="mb-6 text-center max-w-sm">
								<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl sm:leading-none">
									{item.title}
								</h2>
								<p className="text-base text-center text-gray-400 md:text-lg">
									{item.paragraph}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Content;
