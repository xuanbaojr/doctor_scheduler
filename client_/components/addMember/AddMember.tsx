import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

interface User {
  id: number;
  name: string;
}

const AddMember = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const handleAddUser = () => {
    if (name.trim()) {
      setUsers([...users, { id: Date.now(), name: name.trim() }]);
      setName("");
    }
  };

  const renderItem = ({ item }: { item: User }) => <Text>{item.name}</Text>;

  return (
    <View>
      <Text>Thêm người dùng mới</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhập tên người dùng"
      />
      <Button title="Thêm" onPress={handleAddUser} />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default AddMember;
