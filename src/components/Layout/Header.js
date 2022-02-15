import react from 'react';
import styles from './Header.module.css';
import mealImage from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {

    return (
        <div >
            <header className={styles.header}>
                <h1>Meal Magic</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}> 
                <img src={mealImage} alt='A table full of delicious meals'/>
            </div>
        </div>
    )
}

export default Header;