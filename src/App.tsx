
import {CustomHeader} from "./components/CustomHeader/CustomHeader.tsx";
import {CustomFooter} from "./components/CustomFooter/CustomFooter.tsx";
import {CustomPage} from "./components/CustomPage/CustomPage.tsx";

function App() {
    return (
        <>
            <CustomHeader>Kata React Storybook</CustomHeader>
            <CustomPage/>
            <CustomFooter>MyCompany@2026</CustomFooter>
        </>
    )
}

export default App
