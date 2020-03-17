import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
    return (
        <>
            <View>
                <Text>
                    Desde Home
                </Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Jobs')}
                />
            </View>
        </>
    );
}
 
export default Home;