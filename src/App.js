import React, {useEffect} from 'react';
import './styling/App.scss';
import routes from "./routes";
import Header from "./components/Header";
import {useDispatch} from "react-redux";
import {loginUser} from "./redux/reducer";
import axios from 'axios';


function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get('/api/getUser')
            .then((res)=> dispatch(loginUser(res.data)))
            .catch(error => console.log(error))
    },[])

    return (
        <div className="App">
            <Header/>

            {routes}
            <div className='footer'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
                href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
}

export default App;
