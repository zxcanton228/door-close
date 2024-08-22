import './Header.sass'
import HeaderDiscount from './HeaderDiscount.tsx'
import HeaderNav from './HeaderNav.tsx'
import HeaderBlock from './HeaderBlock.tsx'

const Header = () => {
	return (
		<header className='header'>
			<HeaderDiscount />
			<div className='header__container container'>
				<img src='/logo.svg' alt='Logo' />
				<HeaderNav />
				<HeaderBlock />
			</div>
		</header>
	)
}

export default Header
