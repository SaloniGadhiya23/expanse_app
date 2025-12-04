import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import GroupItem from "../components/GroupItem";
import { useExpense } from "../context/ExpenseContext";
import { styles } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  const { groups, addGroup } = useExpense();
  const [groupName, setGroupName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Group</Text>
      <TextInput
        style={styles.input}
        placeholder="Group Name"
        value={groupName}
        onChangeText={setGroupName}
      />
      <Button
        title="Add Group"
        onPress={() => {
          addGroup(groupName);
          setGroupName("");
        }}
      />

      <Text style={styles.heading}>Groups</Text>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupItem
            group={item}
            onPress={() => navigation.navigate("Group", { groupId: item.id })}
          />
        )}
      />
    </View>
  );
}
