import React from "react";
import Adressmail from "./Component/Profile/adress";
import FullName from "./Component/Profile/AloulouKarim";
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import style from "./style.css"

const App = () => (
 <>
<div className="profile">
   <ProfilePhoto />
   <FullName/>
   <Adressmail/>
   </div>
 </>
);
export default App;