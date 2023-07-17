import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Animated, Button, Pressable, ScrollView } from 'react-native';
import LIST from './listData';

const renderItem = ({ item }) => (
  <Item text={item.text} />
);

const renderListItem = ({ item }) => (
  <View style={styles.listItem} id={item.id}>
    <Item text={item.text} />
    <Pressable onPress={pushToFridge(item.inFridge)} style={styles.got}><Text>Got it!</Text></Pressable>
  </View>
);

function pushToFridge(item) {
  console.log(item)
  item = true
}

const Item = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const ListsScreen = () => {
  return (
    <View>
      {/* {LIST.map(x => (
        x.inFridge ? <View>
          <Text style={styles.label}>Have</Text>
          <FlatList
            data={x.inFridge}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View> :
          <View>
            <Text style={styles.label}>Need</Text>
            <FlatList
              data={x.inFridge}
              renderItem={renderListItem}
              keyExtractor={(item) => item.id}
            />
          </View>
      ))} */}
      <View>
        <Text style={styles.label}>Have</Text>
        <FlatList
          data={LIST.filter(item => item.inFridge == true)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text style={styles.label}>Need</Text>
        <FlatList
          data={LIST.filter(item => item.inFridge == false)}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: 'tomato',
    /* label large */
    fontSize: 36,
    fontWeight: 500,
    lineHeight: 54, /* 150% */
    letterSpacing: 0.2,
  },
  got: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    width: 'auto',
    fontSize: 16
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    marginLeft: 10,
  }
})


export default ListsScreen;