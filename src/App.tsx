import React, { useEffect, useState } from 'react';
import './App.css';

const baseUrl = 'http://localhost:3000/animal';
function App() {
        const [data, setData]: any = useState([]);

        useEffect(() => {
                fetch(baseUrl)
                        .then((response) => response.json())
                        .then((donnee) => setData(donnee))
                        .catch((erreur) => `${erreur}`);
        }, []);

        console.log(data.data);

        const affichage = data.map((data: any) => <div>{data.nom}</div>);

        return <div className='text-center'>{affichage}</div>;
}

export default App;
