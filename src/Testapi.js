import './App.css';
import API from './Api';
import Page404 from './Page404';

export const Testapi = async () => {
  try{
    const{data}=await API.get("question");
    return data;
  }
  catch{
    return <Page404 />;
  }
};