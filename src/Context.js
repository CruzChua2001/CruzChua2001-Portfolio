import React, { useState, useContext, useEffect } from 'react'

import Navigation from '../src/static/layout/Navigation';

const OverlayContext = React.createContext()

export const useOverlay = () => {
    return useContext(OverlayContext)
}

export const NavigationProvider = ({children}) => {
    const [page, setPage] = useState(Navigation.Home);

    return (
        <OverlayContext.Provider value={{ page: page, setPage: setPage }}>
            {children}
        </OverlayContext.Provider>
    )
}