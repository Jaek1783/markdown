import AsideListComponent from "../aside/aside";
import HeaderComponent from "./header";
const LayoutComponent = ({children})=>{

return <>
    <HeaderComponent></HeaderComponent>
    <AsideListComponent />
    {children}
</>
};
export default LayoutComponent;