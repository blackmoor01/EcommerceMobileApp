import {View, Text, Button, StyleSheet} from 'react-native';
import {useState,useEffect} from "react";
import {BarCodeScanner} from "expo-barcode-scanner";

{/*A function for the barcode scanner*/}
const BarcodeScanner = () => {
    const [hasPermission,setHasPermission] = useState(false);
    const [scanData,setScanData] = useState();

    useEffect(() => {
        (async()=>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (!hasPermission){
        return(
            <View>
                <Text>Please grant camera permission to app.</Text>
            </View>
        )
    }

    const handleBarCodeScanned = ({type,data})=>{
        setScanData(data);
        console.log(`Data:${data}`);
        console.log(`Type:${type}`)
    }
    return(
        <View>
            <BarCodeScanner style={StyleSheet.absoluteFillObject}
                            onBarCodeScanned={scanData? undefined : handleBarCodeScanned}
            />
            {scanData && <Button title={"Scan Again?"}/>}
        </View>
    )
};

export default BarcodeScanner;