import { View } from "react-native"
import AccordinItem from "./AccordinItem"
import { accordinData } from "./accordinData"


interface Props {
    name : string,
    image : string[],
    comment : string,

}

const AccordinNative = ({ image, comment, name} : Props) => {

    return (
        <View className="mx-2 my-2"
        style={{
            // flexDirection: "row",
            // padding: 2,
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            shadowColor: "#000000",
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
            // flex: 1,
            // alignItems: "center",
        }}
        >
            <AccordinItem 
                index={1} 
                label={name}
                body={image}
                comment={comment}
            />
        </View>
    )
}

export default AccordinNative