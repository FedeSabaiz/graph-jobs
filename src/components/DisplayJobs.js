import React from 'react'
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import dataJobHook from '../hooks/dataJobHook';

const jobQuery = gql`
  query {
    jobs {
      id
      title
      createdAt
      cities {
        name
        country {
          name
        }
      }
    }
  }
`

function Item ({ title, applyUrl, cityName, navigation }) {
    const [result, setResult] = dataJobHook();

    const _handleOnPress = () => {
        navigation.navigate('Jobs');
        setResult({title})
    }
        // console.log(result);
  //   console.log(cityName[0] ? cityName[0].name : null)
  return (
    <TouchableOpacity
        onPress={_handleOnPress}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{applyUrl} </Text>
        <Text style={styles.title}>
          {cityName[0] ? cityName[0].name : 'No city'}
        </Text>
        
      </View>
    </TouchableOpacity>
  )
}
// onPress={() => navigation.navigate('Jobs')}
const DisplayJobs = graphql(jobQuery)(props => {
  const { error, jobs } = props.data
  if (error) {
    return <Text>{error}</Text>
  }
  if (jobs) {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <FlatList
            // horizontal
            data={props.data.jobs}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                applyUrl={item.applyUrl}
                cityName={item.cities}
                navigation={props.navigation}
              />
            )}
            windowSize={15}
            removeClippedSubviews={true}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </>
    )
  }

  return <Text>Loading...</Text>
})

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    marginVertical: 10,
    flex: 1,
    padding: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
    borderRadius: 5
  },
  title: {
    fontSize: 10,
    color: '#000'
  },
  container: {
    backgroundColor: '#ededed',
    margin: 0
    // justifyContent: 'center',
  }
})

export default DisplayJobs
