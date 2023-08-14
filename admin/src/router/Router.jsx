import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react';
import Start from '../pages/Start/Start'

function Router() {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path='/start' element={<Start />}/>
            </Routes>
        </Suspense>
    )
}

export default Router