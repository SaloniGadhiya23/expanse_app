import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import BalanceItem from "../components/BalanceItem";
import ExpenseItem from "../components/ExpenseItem";
import { useExpense } from "../context/ExpenseContext";
import { styles } from "../styles/globalStyles";
import { calculateBalances } from "../utils/calculateBalances";

export default function GroupScreen({ route }) {
  const { groupId } = route.params;
  const { groups, addExpense } = useExpense();
  const group = groups.find((g) => g.id === groupId);

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");

  const balances = calculateBalances(group);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{group.name}</Text>

      <TextInput
        style={styles.input}
        placeholder="Expense Description"
        value={desc}
        onChangeText={setDesc}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Paid By"
        value={paidBy}
        onChangeText={setPaidBy}
      />
      <Button
        title="Add Expense"
        onPress={() => {
          addExpense(groupId, desc, amount, paidBy);
          setDesc("");
          setAmount("");
          setPaidBy("");
        }}
      />

      <Text style={styles.heading}>Expenses</Text>
      <FlatList
        data={group.expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
      />

      {Object.keys(balances).map((member) => (
        <BalanceItem key={member} member={member} amount={balances[member]} />
      ))}

      <Text style={styles.heading}>Balances</Text>
      {Object.keys(balances).map((member) => (
        <Text key={member} style={styles.item}>
          {member}: ₹{balances[member].toFixed(2)}
        </Text>
      ))}
    </View>
  );
}
