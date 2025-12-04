import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function GroupItem({ group, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.text}>{group.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#add8e6",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
