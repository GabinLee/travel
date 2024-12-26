import { useState } from "react";
import { Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const { height: DEVICE_HEIGHT} = Dimensions.get('screen');

export default function SearchPlaceView() {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("place");
  const [screenHeight, setScreenHeight] = useState(0);

  const modalOffsetFromTop = DEVICE_HEIGHT - screenHeight;
  
  const searchPlace = async () => {
  }

  return (
    <SafeAreaView style={styles.container}
      onLayout={(event) => {
        setScreenHeight(event.nativeEvent.layout.height);
      }}
    >
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={{flex: 1, paddingBottom: 10}}
        behavior={Platform.OS === 'ios' && "padding"}
        keyboardVerticalOffset={modalOffsetFromTop + 10}
      >
        <View style={styles.head}>
          <TouchableOpacity style={styles.headButtonClose}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="clear" size={24}  />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>여행지 찾기</Text>
        </View>
        
        <View style={styles.searchArea}>
          <MaterialIcons name="search" size={20} color="rgb(156, 163, 175)"/>
          <TextInput
            onSubmitEditing={searchPlace}
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
            }}
            returnKeyType="search"
            placeholder="어디로 떠나고 싶으신가요?"
            style={{...styles.searchInput, marginRight: searchText === "" ? 8 : ''}}
            selectionColor={'rgb(16, 185, 129)'}
            autoFocus={true}
          />
          {searchText !== "" && (
            <TouchableOpacity
              onPress={() => {
                setSearchText("");
              }}
              style={{widht: 36, minWidth: 36, height: 36, alignItems: "center", justifyContent: "center"}}
            >
              <Ionicons name="close-circle" size={20} color="rgb(156, 163, 175)" />
            </TouchableOpacity>
          )}
        </View>
          
        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text style={styles.listTitle}>이런 곳은 어떠세요?</Text>
            <View style={styles.list}>
              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listItemText}>부산</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listItemText}>도쿄</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listItemText}>파리</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.listTitle}>어디로 갈 지 망설여지시나요?</Text>
            <View style={styles.list}>
              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listItemText}>내 주변 여행지 찾기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listItemText}>랜덤 추천</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={{...styles.buttonSearchType, backgroundColor: searchType === "place" ? "rgb(16, 185, 129)" : "transparent"}}
            onPress={() => setSearchType("place")}
          >
            <Text style={{color: searchType === "place" ? "#fff" : ""}}>장소로 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.buttonSearchType, backgroundColor: searchType === "theme" ? "rgb(16, 185, 129)" : "transparent"}}
            onPress={() => setSearchType("theme")}
          >
            <Text style={{color: searchType === "theme" ? "#fff" : ""}}>테마로 찾기</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 8,
  },
  head: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 56,
  },
  headButtonClose: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 8,
  },
  searchArea: {
    width: 358,
    height: 48,
    marginHorizontal: "auto",
    marginBottom: 21,
    borderWidth: 2,
    borderColor: "rgb(17, 24, 39)",
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  searchInput: {
    flex: 1,
    marginLeft: 4,
  },
  listTitle: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  list: {
    flexDirection: "row",
    columnGap: 4,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  listItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgb(229, 231, 235)",
    backgroundColor: "#fff",
  },
  listItemText: {
    color: "rgb(17, 24, 39)",
    lineHeight: 20,
  },
  buttonGroup: {
    width: 365,
    height: 40,
    marginRight: 12,
    marginLeft: 13,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
  },
  buttonSearchType: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
})