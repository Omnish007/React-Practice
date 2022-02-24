import React, { useState } from "react";

const SetStateUsingFun = () => {
    let [first] = useState();

    const lol = () => {
        first = "lol";
    };
    lol();
    console.log(first);
    return <div>SetStateUsingFun</div>;
};

export default SetStateUsingFun;
