import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.5:3000/products');
                setData(response.data);
                console.log(data && data[0]['name'])
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            
            <Text>{data && <Text>{data[0]['description']}</Text>}</Text>
        </View>
    );
};

export default App;
