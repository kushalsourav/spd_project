import React from 'react';
import { AuthProvider } from './AuthContext/AuthContext';
import { DataProvider } from './DataContext/DataContext';

const ContextProvider = ({children}) => {
    return (
       
            <AuthProvider>
                <DataProvider>
                    {children}
                </DataProvider>
            </AuthProvider>
        
    );
}

export default ContextProvider;
