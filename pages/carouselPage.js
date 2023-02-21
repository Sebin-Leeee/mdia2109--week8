import Link from 'next/link'
import Carousel from "@/components/carousel"
import styles from '@/styles/Carousel.module.css'

export default function CarouselPage() {
    return(
        <>
        <div className = {styles.main}>
            <div className = {styles.carousel}>
            <Link style={{ textDecoration: 'none'}} href="/">Home</Link>
            <Carousel/>
            </div>
        </div>
        </>
    )
}