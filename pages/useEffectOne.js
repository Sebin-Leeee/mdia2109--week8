import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '@/styles/useEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number+1);
    })

    return(
        <>
        <div className={styles.main}>
            <Link href="/">Home</Link>
            <div>
                useEffect One
            </div>
            <div>
                {number}
            </div>
        </div>
        </>
    )
}