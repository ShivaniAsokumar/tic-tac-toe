import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NewGamePage from '../components/NewGamePage';

export default function Home() {
	return (
		<div className={styles.container}>
			<NewGamePage />
		</div>
	);
}
