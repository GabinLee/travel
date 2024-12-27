import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonList(props) {
  return (
    <View style={[styles.container, props.styles]}>
      {props.btnList.map((btnItem, index) => (
        <TouchableOpacity style={styles.listItem} key={btnItem}>
          <Text style={styles.listItemText}>{btnItem}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap:"wrap",
    columnGap: 4,
    rowGap: 4,
    paddingHorizontal: 16,
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
})