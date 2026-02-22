import Link from 'next/link';
import Image from 'next/image';
import { Dribbble, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const navLinks = [
	{ href: '/services', label: 'Services' },
	{ href: '/portfolio', label: 'Work' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" {...props}>
		<path
			fill="currentColor"
			d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.52 14.38c-.28-.14-1.64-.81-1.9-1.04-.25-.14-.43-.14-.62.14-.19.28-.72.91-.88 1.1-.16.19-.32.22-.59.07-.28-.14-1.18-.44-2.24-1.38-1.06-.94-1.78-2.1-2-2.46-.24-.37-.02-.57.12-.71.13-.13.28-.32.43-.48.14-.16.19-.28.28-.46.09-.19.05-.37-.02-.51s-.62-1.5-1-2.06c-.37-.56-.75-.48-1.02-.48h-.54c-.28 0-.75.12-1.14.54-1.11 1.18-1.33 2.76-1.33 4.28.01 1.58.62 3.1 1.78 4.67 1.15 1.56 2.53 2.82 4.61 3.72 2.55 1.1 3.63.93 4.89.57 1.26-.36 2.08-1.48 2.37-2.92.29-1.44.29-2.67.2-2.92-.09-.25-.27-.4-.54-.54z"
		/>
	</svg>
);

const socialLinks = [
	{
		name: 'Github',
		icon: <Github className="w-8 h-8" />,
		href: 'https://github.com/abbeyzerotheorem',
	},
	{
		name: 'Twitter',
		icon: <Twitter className="w-8 h-8" />,
		href: 'https://x.com/ZeroTheorem01?t=GaBiYlmbrPNi9tkTmm1l_Q&s=09',
	},
	{
		name: 'LinkedIn',
		icon: <Linkedin className="w-8 h-8" />,
		href: 'https://www.linkedin.com/in/abbey0',
	},
	{
		name: 'Dribbble',
		icon: <Dribbble className="w-8 h-8" />,
		href: 'https://dribbble.com/abbey0',
	},
	{
		name: 'WhatsApp',
		icon: <WhatsAppIcon className="w-8 h-8" />,
		href: 'https://wa.me/27641663906',
	},
];

export default function Footer() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-border/40 bg-background/95">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
					{/* Logo and Brand */}
					<div className="flex flex-col items-center md:items-start">
						<Link href="/" className="flex items-center space-x-2">
							{mounted && (
								<Image
									src={
										theme === 'dark'
											? '/zero-theorem-white.svg'
											: '/zero-theorem-black.svg'
									}
									alt="Zero Theorem Logo"
									width={300}
									height={300}
								/>
							)}
						</Link>
						<p className="text-muted-foreground text-lg mt-2 text-center md:text-left">
							Solving the equation of digital excellence.
						</p>
					</div>

					{/* Navigation Links */}
					<div className="flex justify-center">
						<div className="flex flex-col items-center">
							<h3 className="font-headline font-semibold mb-4 text-4xl">
								Explore
							</h3>
							<ul className="space-y-2">
								{navLinks.map((link) => (
									<li key={link.href} className="text-center text-lg">
										<Link
											href={link.href}
											className="text-muted-foreground hover:text-primary transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Social Links */}
					<div className="flex flex-col items-center md:items-end">
						<h3 className="font-headline font-semibold mb-4 text-4xl">
							Connect
						</h3>
						<div className="flex space-x-4">
							{socialLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-muted-foreground hover:text-primary transition-colors"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span className="sr-only">{link.name}</span>
									{link.icon}
								</Link>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-border/40 py-6 text-center">
					<p className="text-sm text-muted-foreground">
						&copy; {currentYear} Zero Theorem. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
