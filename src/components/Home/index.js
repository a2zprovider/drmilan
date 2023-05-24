import React from "react";
import { Button, View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { SCREEN } from "../../configs/constants.config";
import { Icon } from "react-native-vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#f4511e', height: '100%' }}>
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginTop: 0 }}>Let's find a doctor</Text>
          <TextInput
            style={{ fontSize: 15, borderRadius: 8, borderWidth: 1, borderColor: '#fff', backgroundColor: '#fff', paddingHorizontal: 15, height: 50, marginTop: 15 }}
            value={''}
            placeholder="What type of appointment"
          />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: 20,
          marginBottom: 20,
        }}>
          <View style={{ width: (SCREEN.width - 50) / 4 - 0 / 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <View style={{ height: 65, width: 65, borderRadius: 50, backgroundColor: '#fff' }}>

              </View>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 5 }}>Fever</Text>
            </View>
          </View>
          <View style={{ width: (SCREEN.width - 50) / 4 - 0 / 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <View style={{ height: 65, width: 65, borderRadius: 50, backgroundColor: '#fff' }}>

              </View>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 5 }}>Heart</Text>
            </View>
          </View>
          <View style={{ width: (SCREEN.width - 50) / 4 - 0 / 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <View style={{ height: 65, width: 65, borderRadius: 50, backgroundColor: '#fff' }}>

              </View>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 5 }}>Lungs</Text>
            </View>
          </View>
          <View style={{ width: (SCREEN.width - 50) / 4 - 0 / 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <View style={{ height: 65, width: 65, borderRadius: 50, backgroundColor: '#fff' }}>

              </View>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 5 }}>More</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', paddingVertical: 20, borderRadius: 30 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 15 }}>Doctors
            </Text>
            <View>
              <View style={{
                padding: 10, marginBottom: 15, backgroundColor: '#fff', borderWidth: .5, shadowColor: '#000', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 1, shadowRadius: 3, borderColor: '#ccc', borderRadius: 8
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: '30%' }}>
                    <View style={{ height: 70, width: 70, backgroundColor: '#ebebeb', borderRadius: 50 }}></View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Anna Titarenko</Text>
                    <Text style={{ fontSize: 13, color: '#aaa' }}>Gynecologist</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>4.9</Text>
                  </View>
                </View>
              </View>
              <View style={{
                padding: 10, marginBottom: 15, backgroundColor: '#fff', borderWidth: .5, shadowColor: '#000', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 1, shadowRadius: 3, borderColor: '#ccc', borderRadius: 8
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: '30%' }}>
                    <View style={{ height: 70, width: 70, backgroundColor: '#ebebeb', borderRadius: 50 }}></View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Anna Titarenko</Text>
                    <Text style={{ fontSize: 13, color: '#aaa' }}>Gynecologist</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>4.9</Text>
                  </View>
                </View>
              </View>
              <View style={{
                padding: 10, marginBottom: 15, backgroundColor: '#fff', borderWidth: .5, shadowColor: '#000', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 1, shadowRadius: 3, borderColor: '#ccc', borderRadius: 8
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: '30%' }}>
                    <View style={{ height: 70, width: 70, backgroundColor: '#ebebeb', borderRadius: 50 }}></View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Anna Titarenko</Text>
                    <Text style={{ fontSize: 13, color: '#aaa' }}>Gynecologist</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>4.9</Text>
                  </View>
                </View>
              </View>
              <View style={{
                padding: 10, marginBottom: 15, backgroundColor: '#fff', borderWidth: .5, shadowColor: '#000', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 1, shadowRadius: 3, borderColor: '#ccc', borderRadius: 8
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: '30%' }}>
                    <View style={{ height: 70, width: 70, backgroundColor: '#ebebeb', borderRadius: 50 }}></View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Anna Titarenko</Text>
                    <Text style={{ fontSize: 13, color: '#aaa' }}>Gynecologist</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>4.9</Text>
                  </View>
                </View>
              </View>
              <View style={{
                padding: 10, marginBottom: 15, backgroundColor: '#fff', borderWidth: .5, shadowColor: '#000', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 1, shadowRadius: 3, borderColor: '#ccc', borderRadius: 8
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: '30%' }}>
                    <View style={{ height: 70, width: 70, backgroundColor: '#ebebeb', borderRadius: 50 }}></View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Anna Titarenko</Text>
                    <Text style={{ fontSize: 13, color: '#aaa' }}>Gynecologist</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>4.9</Text>
                  </View>
                </View>
              </View>
              <View style={{
                padding: 10, marginBottom: 15, backgroundColor: '#fff', borderWidth: .5, shadowColor: '#000', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 1, shadowRadius: 3, borderColor: '#ccc', borderRadius: 8
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: '30%' }}>
                    <View style={{ height: 70, width: 70, backgroundColor: '#ebebeb', borderRadius: 50 }}></View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Anna Titarenko</Text>
                    <Text style={{ fontSize: 13, color: '#aaa' }}>Gynecologist</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>4.9</Text>
                  </View>
                </View>
              </View>
              <View style={{
                padding: 10, marginBottom: 15, backgroundColor: '#fff', borderWidth: .5, shadowColor: '#000', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 1, shadowRadius: 3, borderColor: '#ccc', borderRadius: 8
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: '30%' }}>
                    <View style={{ height: 70, width: 70, backgroundColor: '#ebebeb', borderRadius: 50 }}></View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Anna Titarenko</Text>
                    <Text style={{ fontSize: 13, color: '#aaa' }}>Gynecologist</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16 }}>4.9</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}