import React from "react"
import Logo from "@/components/logo"
import Login from "./(components)/Login"
import { alreadyLoggedIn } from "@/lib/auth";


export default async function Component() {
    await alreadyLoggedIn();
    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
            <Login />
            <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
                <div className="flex items-center justify-center h-full">
                    <Logo />
                </div>
            </div>
        </div>
    )
}

