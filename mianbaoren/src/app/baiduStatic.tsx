"use client"
import React, {useEffect} from "react";

export function BaiduStatic() {
    useEffect(() => {
        const hm = document.createElement("script");
        hm.async = true;
        hm.src = "https://hm.baidu.com/hm.js?226633151903ee300bf07167e414aa62";
        const s = document.getElementsByTagName("script")[0];
        s.parentNode?.insertBefore(hm, s);
    }, []);


    return <></>
}