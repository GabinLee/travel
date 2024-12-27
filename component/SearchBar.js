import { StyleSheet, Text, TextInput, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchBarItem(props) {
  return (
    <>
      {props.keyword === "" ? 
        <View style={[styles.searchArea, styles.searchFocused]}>
          <MaterialIcons name="search" size={20} color="rgb(156, 163, 175)"/>
          <TextInput
            placeholder={props.placeholderText}
            value={props.searchText}
            onChangeText={(e) => props.onChangeText(e.trim())}
            returnKeyType="search"
            clearButtonMode="always"
            style={{...styles.searchInput}}
            selectionColor={'rgb(16, 185, 129)'}
            autoFocus={true}
            // onSubmitEditing={searchPlace}
          />
        </View>
      :
        <View style={{...styles.searchArea, backgroundColor: "rgb(242, 244, 246)"}}>
          <Ionicons name="location" size={20} color="rgb(17, 24, 39)" />
          <Text style={{marginLeft: 4, flex: 1, color: "rgb(17, 24, 39)", fontSize: 15}}>{props.keyword}</Text>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  searchArea: {
    width: 358,
    height: 48,
    marginHorizontal: "auto",
    marginBottom: 5,
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  searchFocused: {
    borderWidth: 2,
    borderColor: "rgb(17, 24, 39)",
  },
  searchInput: {
    flex: 1,
    marginLeft: 4,
  },
})