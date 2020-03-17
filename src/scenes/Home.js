import React from 'react';
import {View, Text, Button} from 'react-native';

import DisplayJobs from '../components/DisplayJobs';

const Home = ({navigation}) => {
    return (
        <>
            <View>
                <Text>
                    Los siguientes empleos involucran GraphQL
                </Text>
               
                <DisplayJobs navigation={navigation} />
            </View>
        </>
    );
}
 
export default Home;