import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


const temp = [
  { unit: "C", num: "1" },
  { unit: "F", num: "2" },
  { unit: "K", num: "3" }
];



function App() {

  const [convertFrom, setConvertFrom] = useState("C");
  const [convertTo, setConvertTo] = useState("F");
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: 'C', value: 'c' },
    { label: 'F', value: 'f' },
    { label: 'K', value: 'k' },
  ])

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'C', value: 'c' },
    { label: 'F', value: 'f' },
    { label: 'K', value: 'k' },
  ])
  const [data1,setData1] = useState();
  const [data2,setData2] = useState(0);

  const convert = (data1 ,item1, items2) => {
    
    if(item1 === "C" && items2 === "F"){
      const res = (9/5)*data1+32
      setData2(res.toFixed(2)+"°F")
    }
    else if(item1 === "C" && items2 === "K"){
      const res =1*data1+273.15
      setData2(res.toFixed(2)+" K")
    }
    else if(item1 === "F" && items2 === "C"){
      const res = (data1-32)*5/9
      setData2(res.toFixed(2)+"°C")
    }
    else if(item1 === "F" && items2 === "K"){
      const res = (data1-32)*5/9 + 273.15
      setData2(res.toFixed(2)+" K")
    }
    else if(item1 === "K" && items2 === "C"){
      const res = data1-273.15
      setData2(res.toFixed(2)+"°C")
    }
    else if(item1 === "K" && items2 === "F"){
      const res = (data1-273.15)*9/5+32
      setData2(res.toFixed(2)+"°F")
    }
    else{
      setData2(data1+".00°"+item1)
    }
  }

  const Open1 = useCallback(() => {
    setOpen2(false);
  }, []);

  const Open2 = useCallback(() => {
    setOpen1(false);
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 70, color: "#F0F0F0" }}>{data2}</Text>
      </View>
      <View>
        <Text
          style={{
            marginLeft: "3.5%",
            marginTop: "8%",
            fontSize: 30,
            fontWeight: 500,
            color: "#085364",
          }}
        >
          Enter Temprature
        </Text>

        <Text
          style={{
            marginLeft: "3.5%",
            marginTop: "6%",
            fontSize: 20,
            marginBottom: 10,
            fontWeight: 500,
            color: "#085364",
          }}
        >
          Degree
        </Text>
        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
          <TextInput
            style={styles.input}
            value={String}
            keyboardType="numeric"
            onChangeText={data1 => setData1(data1)}
          />

          <DropDownPicker
            containerStyle={{ width: "20%", borderTopLeftRadius: 0 }}
            open={open1}
            placeholder="-"
            value={value1}
            onSelectItem={(item) => {
              setConvertFrom(item.label);
            }}
            onOpen={Open1}
            items={items1}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
          />
        </View>

        <Text
          style={{
            marginLeft: "3.5%",
            marginTop: "18%",
            fontSize: 20,
            marginBottom: 10,
            fontWeight: 500,
            color: "#085364",
          }}
        >
          Convert In
        </Text>

        <DropDownPicker
          containerStyle={{ width: "90%", marginLeft: "3.5%",}}
          open={open2}
          placeholder="Select Unit"
          onOpen={Open2}
          value={value2}
          items={items2}
          setConvertTo={(items2) =>{setConvertTo(items2.label);}}
          onSelectItem={(item) => {
            setConvertTo(item.label);}}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
        />
        <TouchableOpacity style={styles.button} onPress={() => convert(data1, convertFrom, convertTo)}>
          <Text style={{ fontSize: 24, color: "#F0F0F0", fontWeight: "bold" }}>Convert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "35%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#007b83",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
  },
  input: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    width: "70%",
    height: 50,
    marginLeft: "3.5%",
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 5,
  },
  input2: {
    width: "20%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderWidth: 1,
    paddingLeft: 10,
    borderLeftWidth: 0,
    fontSize: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "#daddda",
  },
  button: {
    width: "90%",
    height: "13%",
    bottom: 0,
    marginLeft: "3.5%",
    marginTop: "18%",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007b83",
  },
  dropDownArea1: {
    width: "20%",
    height: "70%",
    marginLeft: "73.5%",
    marginTop: 1,
    elevation: 1,
    backgroundColor: "#FF0000",
  },
  tempUnit: {
    widht: "100%",
    height: 30,
    alignSelf: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#8e8e8e"
  },
});

export default App;
