// React Import
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Resource Import
import Landing from '../pages/Landing';

export default function Routing() {
    return (
        <Routes>
            <Route
            path="/"
            element={ <Landing /> }
            />
        </Routes>
    )
}