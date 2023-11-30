"use client"
import { useEffect, useState } from "react";

export default function Loading() {
    const toolTipArray = ["Did you know that you are loved by at least 1 person?", "Funfact: You are awesome!", "You are a wonderful person!"];
    const [toolTip, changeToolTip] = useState(toolTipArray[Math.floor(Math.random() * toolTipArray.length)]);

    useEffect(() => {
        const interval = setInterval(() => {
            changeToolTip(toolTipArray[Math.floor(Math.random() * toolTipArray.length)]);
        }, 5000);
        return () => clearInterval(interval);
    });

    return <><p>Loading...</p><br/><p>{toolTip}</p></>
  }