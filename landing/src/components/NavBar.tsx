import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Button from './Button';
import cx from 'classnames';
import { navigate } from 'astro/transitions/router';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';

interface Props {
	currentPage: string;
}

const NavBar: React.FC<Props> = ({ currentPage }) => {
	const [scrollY, setScrollY] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [
		isScreenGreaterThanOrEqualTo900px,
		setIsScreenGreaterThanOrEqualTo900px,
	] = useState(false);

	const variants = {
		open: {
			opacity: 1,
			transition: {
				ease: 'linear',
				duration: 0.15,
			},
		},
		closed: { opacity: 0 },
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);

		const handleResize = () => {
			const isScreenGreaterThanOrEqualTo900px = window.innerWidth >= 900;
			setIsScreenGreaterThanOrEqualTo900px(
				isScreenGreaterThanOrEqualTo900px,
			);
			if (isScreenGreaterThanOrEqualTo900px) {
				document.body.style.overflow = 'scroll';
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const isScreenGreaterThanOrEqualTo900px = window.innerWidth >= 900;
			setIsScreenGreaterThanOrEqualTo900px(
				isScreenGreaterThanOrEqualTo900px,
			);
			if (isScreenGreaterThanOrEqualTo900px) {
				document.body.style.overflow = 'scroll';
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div
			className={cx(
				'fixed top-0 w-full z-50 transition duration-100 overflow-hidden',
				scrollY > 20 ? 'backdrop-blur-lg safari-blur' : '',
			)}
		>
			<div className='bg-gradient-rainbow h-[4px] w-full' />
			<Container>
				<nav
					className={cx(
						'flex justify-between items-center transition-all duration-100',
						scrollY > 20 &&
							(!isMenuOpen || isScreenGreaterThanOrEqualTo900px)
							? 'py-3 mobile:py-4'
							: 'py-8',
					)}
				>
					<a
						href='/'
						className='focus:outline-none transition hover:scale-105 duration-300 ease-in-out delay-70 z-50'
					>
						<img
							src='/logoWithText.svg'
							alt='tembo log'
							className='w-[105px] mobile:w-[124px]'
						/>
					</a>
					<div className='mobile:flex hidden items-center gap-12'>
						<a
							href='/'
							className={cx(
								'font-secondary font-medium z-10',
								currentPage == '/'
									? 'text-neon'
									: 'text-white opacity-70',
							)}
						>
							Home
						</a>
						<a
							href='/docs'
							className={cx(
								'font-secondary font-medium z-10',
								currentPage == '/docs' || currentPage == '/dos/'
									? 'text-neon'
									: 'text-white opacity-70',
							)}
						>
							Docs
						</a>
						<a
							href='/blog'
							className={cx(
								'font-secondary font-medium z-10',
								currentPage == '/blog' ||
									currentPage == '/blog/'
									? 'text-neon'
									: 'text-white opacity-70',
							)}
						>
							Blog
						</a>
						<a
							href='https://github.com/tembo-io'
							target='_blank'
							rel='noreferrer'
							className='font-secondary font-medium z-10 text-white opacity-70'
						>
							Github
						</a>
					</div>
					<Button
						variant='neon'
						styles='hidden mobile:flex z-100'
						onClick={() => navigate('https://cloud.tembo.io')}
					>
						Try Free
					</Button>
					<button
						onClick={() => {
							document.body.style.overflow = !isMenuOpen
								? 'hidden'
								: 'scroll';
							setIsMenuOpen(!isMenuOpen);
						}}
						className={cx(
							'mobile:hidden flex flex-col gap-[2.5px] items-center justify-center bg-neon hover:bg-[#D1E278] rounded-full w-[32.57px] h-[32.57px] z-50',
							isMenuOpen ? 'p-2' : 'p-2.5',
						)}
					>
						{isMenuOpen ? (
							<>
								<img src={'/x.svg'} alt='close icon' />
							</>
						) : (
							<>
								<div className='bg-[#292D32] rounded-full w-full h-[1.5px]' />
								<div className='bg-[#292D32] rounded-full w-full h-[1.5px]' />
								<div className='bg-[#292D32] rounded-full w-full h-[1.5px]' />
							</>
						)}
					</button>
				</nav>
			</Container>
			<div
				className={cx(
					'absolute bottom-0 flex h-[1px] w-full flex-row items-center justify-center opacity-100 shine',
					scrollY > 20 ? 'flex' : 'hidden',
				)}
			/>
			<motion.div
				animate={isMenuOpen ? 'open' : 'closed'}
				variants={variants}
			>
				{isMenuOpen && <MobileMenu />}
			</motion.div>
		</div>
	);
};

export default NavBar;
