import React, { useState, useMemo } from "react";

const Memo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(5);

    //multiply count call unnecessary when click on item update if we don't use memo

    const mulcountMemo = useMemo(
        function multiplyCount() {
            console.log("multiply Count");
            return count * 5;
        },
        [count],
    );

    return (
        <div>
            <h1>Count {count}</h1>
            <h1>Item {item}</h1>
            <h1> {mulcountMemo}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </div>
    );
};

export default Memo;
