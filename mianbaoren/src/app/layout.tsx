import React from "react";
import "@/app/globals.css";
import {description, keywords} from "@/app/const";
import {BaiduStatic} from "@/app/baiduStatic";


export const metadata = {
    title: "一车面包人 - 面包人MBTI导航",
    description: description,
    keywords: keywords
}

export const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {


    return (
        <html lang="zh-cn">
        <body>
        {children}
        </body>
        <BaiduStatic/>
        </html>
    )
}