import React from "react";
import { Button, View, Text, ScrollView, TextInput } from "react-native";
import { Screen } from "react-native-screens";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#f4511e', height: '100%' }}>
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>Let's find a doctor</Text>
          <TextInput
            style={{ fontSize: 15, borderRadius: 10, borderWidth: 1, borderColor: '#fff', backgroundColor: '#fff', paddingHorizontal: 15, height: 40 }}
            value={''}
            placeholder="What type of appointment"
          />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <View style={{ width: (Screen.width - 50) / 2 - 10 / 2, }}>
            <View>
              <View style={{ borderWidth: 1, borderRadius: 50, backgroundColor: '#fff' }}>
                <Icon name='user' />
              </View>
              <Text>Category</Text>
            </View>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}