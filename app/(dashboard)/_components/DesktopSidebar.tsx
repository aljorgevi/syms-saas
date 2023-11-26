import Link from 'next/link'

const menu = [
	{
		text: 'Home',
		icon: <IconHome className='h-4 w-4' />,
		className:
			'flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50',
		href: '/dashboard'
	},
	{
		text: 'Data Importer',
		icon: <DataImportIcon className='h-4 w-4' />,
		className:
			'flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50',
		href: '/data-importer'
	},
	{
		text: 'Users',
		icon: <IconUsers className='h-4 w-4' />,
		className:
			'flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50',
		href: '#'
	},
	{
		text: 'Analytics',
		icon: <IconLinechart className='h-4 w-4' />,
		className:
			'flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50',
		href: '#'
	},
	{
		text: 'Settings',
		icon: <IconSettings className='h-4 w-4' />,
		className:
			'flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50',
		href: '#'
	}
]

export function DesktopSidebar() {
	return (
		<div className='hidden border-r bg-zinc-100/40 lg:block dark:bg-zinc-800/40'>
			<div className='flex h-full max-h-screen flex-col gap-2'>
				<div className='flex h-[60px] items-center border-b px-6'>
					<Link className='flex items-center gap-2 text-primary font-semibold' href='/dashboard'>
						<RyclinIcon />
						Syms Residuos
					</Link>
				</div>
				<div className='flex-1 overflow-auto py-2'>
					<nav className='grid items-start px-4 text-sm font-medium'>
						{menu.map((link, index) => (
							<Link key={index} className={link.className} href={link.href}>
								{link.icon}
								{link.text}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</div>
	)
}

const RyclinIcon = (props: any) => (
	<svg
		className='text-primary'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M12 17l-2 2l2 2' />
		<path d='M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1' />
		<path d='M8.536 11l-.732 -2.732l-2.732 .732' />
		<path d='M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024' />
		<path d='M15.464 11l2.732 .732l.732 -2.732' />
		<path d='M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976' />
	</svg>
)

function DataImportIcon(props: any) {
	return (
		<svg {...props} width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z'
				fill='currentColor'
				fillRule='evenodd'
				clipRule='evenodd'
			></path>
		</svg>
	)
}

function IconHome(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
			<polyline points='9 22 9 12 15 12 15 22' />
		</svg>
	)
}

function IconLinechart(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M3 3v18h18' />
			<path d='m19 9-5 5-4-4-3 3' />
		</svg>
	)
}

function IconSettings(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
			<circle cx='12' cy='12' r='3' />
		</svg>
	)
}

function IconUsers(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
			<circle cx='9' cy='7' r='4' />
			<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
			<path d='M16 3.13a4 4 0 0 1 0 7.75' />
		</svg>
	)
}
