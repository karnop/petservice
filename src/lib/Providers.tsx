"use client";

import React from 'react';
import {SessionProvider} from "next-auth/react";

function NextAuthProvider({children} : {children : any}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default NextAuthProvider;