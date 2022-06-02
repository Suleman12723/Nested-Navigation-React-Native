


import React,{createContext,useState} from "react";
export const Context = createContext();


const generate = ()=>{
  const data=[];
  for(var i=0; i<15; i++){
    let obj = {
      id:`${i}`,
      displayName:`Person${i}`,
      profileImage:`..//assets/person${i}.jpg`,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vehicula erat. Fusce at libero congue, aliquam diam sed, aliquet risus. Phasellus accumsan tellus tellus, quis porttitor nisl vehicula vel. Phasellus sollicitudin magna lacus. Aliquam imperdiet aliquet venenatis. Phasellus sagittis, massa at dignissim rutrum, erat enim elementum urna, eget sollicitudin ipsum diam eu tortor. Curabitur eget erat eget magna rhoncus ornare. Nam ultricies magna tincidunt urna pellentesque, in facilisis nunc scelerisque. Sed elementum suscipit urna et semper. Suspendisse erat dolor, semper ut dapibus faucibus, eleifend id velit. Praesent at enim ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
      email:`p${i}.gmail.com`

    }
    data.push(obj);
  }
  return data;

}


export const ContextProvider = ({children})=>{
    const [userData, setUserData] = useState(()=>generate());
    const value={
        userInfo:userData,
        addUser:(obj)=>{ setUserData([...userData,obj])},
        deleteUser:(id)=>{setUserData(userData.filter(d=> d.id !== id))}
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}
