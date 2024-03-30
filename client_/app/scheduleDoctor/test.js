import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.5:3000/about');
                console.log(response.data[0].email)
                setData(response.data);
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            {data && <Text>{data[0].email}</Text>}
        </View>
    );
};

export default App;
