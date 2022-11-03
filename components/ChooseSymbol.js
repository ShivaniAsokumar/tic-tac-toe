import React from 'react';
import XOToggle from './XOToggle';
import styles from '../styles/ChooseSymbol.module.css';

const ChooseSymbol = () => {
	return (
		<React.Fragment>
			<div className={styles.container}>
				PICK PLAYER 1'S MARK
				<XOToggle />
				<div>REMEMBER: X GOES FIRST</div>
			</div>
		</React.Fragment>
	);
};

export default ChooseSymbol;
