import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function SearchResultPage() {
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>검색결과</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
})