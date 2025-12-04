import { StyleSheet, Text, View } from "react-native";

export default function BalanceItem({ member, amount }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {member}: ₹{amount.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 3,
    backgroundColor: "#dff0d8",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
