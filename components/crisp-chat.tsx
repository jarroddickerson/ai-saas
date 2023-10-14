"use-client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("b383731b-2461-40c7-97f6-b6307e92446b");
    }, []);

    return null;
}