import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Animated, Button, Pressable } from 'react-native';
import LIST from './listData';
import FRIDGE from "./fridgeData";

const renderItem = ({item})=>(
  <Item text={item.text}/>
);

const renderListItem = ({item})=>(
  <View>
    <Item text={item.text}/>
    <Pressable onPress={pushToFridge(item.text)} title="Got it" style={styles.got}><Text>Got it!</Text></Pressable>
  </View>
);

const pushToFridge = (item) => {

}

const Item = ({text}) => {
  return(
    <View style={styles.item}>
    <Text style={styles.text}>{text}</Text>
    </View>
  );
}

// const ExpandableView = (file, { expanded = false }) => {
//   const [height] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(height, {
//       toValue: !expanded ? 200 : 0,
//       duration: 150,
//       useNativeDriver: false
//     }).start();
//   }, [expanded, height]);

//   // console.log('rerendered');
//   return (
//     <Animated.View
//       style={{ height, backgroundColor: "lightgray" }}
//     >
//       <Text>ayuda</Text>
//       <FlatList
//           data={file}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//         />
//     </Animated.View>
//   );
// };

const ListsScreen = () => {
  return (
    <View>
      <Text style={styles.label}>Have</Text>
      <FlatList
          data={FRIDGE}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      <Text style={styles.label}>Need</Text>
      <FlatList
          data={LIST}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section: { data } }) => (
          <>
            <ExpandableView expanded={isExpanded}>
              <Text>{data}</Text>
            </ExpandableView>
          </>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TouchableOpacity style={styles.label}
            onPress={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <Text style={styles.label}>{title}</Text>
          </TouchableOpacity>
        )}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: '#3A00E5',
    /* label large */
    fontSize: 36,
    fontWeight: 500,
    lineHeight: 54, /* 150% */
    letterSpacing: 0.2,
  },
  got: {
    flex: 1,
    justifyContent: 'flex-end',
    width: 75,
    backgroundColor: 'orange'
  }
})


export default ListsScreen;