import { View } from "react-native"
import AccordinItem from "./AccordinItem"
import { accordinData } from "./accordinData"


interface Props {

}

const AccordinNative = () => {

    return (
        <View>
            <AccordinItem 
            index={1} 
            label={accordinData[0].label}
            body={accordinData[0].body}
            />
        </View>
    )
}

export default AccordinNative