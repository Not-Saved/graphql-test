import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'

const Home: NextPage = () => {
	const { data } = useQuery(
		gql`query q {
			getBook(id: 5){
				id
				author{
					id
					name
				}
			}
		}
	  `,
	)

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to<Link href={"/"} passHref>Next.js!</Link>
				</h1>


			</main>
		</div>
	)
}
export default Home
