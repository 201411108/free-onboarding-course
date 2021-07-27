import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }: any) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return <>{ isDesktop && children }</>
}

const Mobile = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return <>{ isMobile && children }</>
}

export { Desktop, Mobile }