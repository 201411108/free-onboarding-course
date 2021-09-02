import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }: any) => {
    const isDesktop = useMediaQuery({ minWidth: 856 })
    return <>{ isDesktop && children }</>
}

const Mobile = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 855 })
    return <>{ isMobile && children }</>
}

export { Desktop, Mobile }