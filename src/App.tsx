
import {CustomHeader} from "./components/CustomHeader/CustomHeader.tsx";
import {CustomFooter} from "./components/CustomFooter/CustomFooter.tsx";
import {CustomPage} from "./components/CustomPage/CustomPage.tsx";

function App() {
    return (
        <>
            <CustomHeader title={'Kata React Storybook'}/>

            <CustomPage/>

            <CustomFooter label={'MyCompany@2026'}/>
        </>
    )
}

export default App
