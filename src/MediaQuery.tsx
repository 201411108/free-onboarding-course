import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }: any) => {
    const isDesktop = useMediaQuery({ minWidth: 1200 })
    return <>{ isDesktop && children }</>
}

// Tablet에서는 Desktop의 대부분을 유지, 글자 크기, 간격 등만 조정
const Tablet = ({ children }: any) => {
    const isTablet = useMediaQuery({ maxWidth: 1199, minWidth: 768 })
    return <>{ isTablet && children }</>
}

const Mobile = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return <>{ isMobile && children }</>
}

export { Desktop, Tablet,  Mobile }