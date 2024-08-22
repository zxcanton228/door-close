import {FiHeart, FiShoppingCart} from 'react-icons/fi'

const HeaderBlock = () => {
	return <section className="header__block">
		<div className="header__phone">
			<img src="/phone.svg"/><p>+7 (966) 55 88 499</p>
		</div>
		<div className="header__icons">
			<FiHeart className="header__icon" />
			<FiShoppingCart className="header__icon" />
		</div>
	</section>
}
export default HeaderBlock