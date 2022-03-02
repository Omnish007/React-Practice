import React, { useState } from "react";

const SetStateUsingFun = () => {
    let [first] = useState(() => {
        const ok = "lol";
        return ok;
    });

    console.log(first);
    return <div>SetStateUsingFun</div>;
};

export default SetStateUsingFun;
