import SetStateUsingFun from "./component/SetStateUsingFun";
import UseMemo from "./component/UseMemo";

function App() {
    return (
        <div className="App">
            {/* set initial value of state without using setState instead using function*/}
            <SetStateUsingFun />

            {/* UseMemo */}
            {/* <UseMemo /> */}
        </div>
    );
}

export default App;
