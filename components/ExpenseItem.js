import { StyleSheet, Text, View } from "react-native";

export default function ExpenseItem({ expense }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {expense.description} - ₹{expense.amount} by {expense.paidBy}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 3,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});
