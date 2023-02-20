import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useSockets } from '../context/socket.context';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { socket } = useSockets();
  return (
    <div>{socket.id}</div>
  )
}
