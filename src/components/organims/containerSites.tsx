import { View, Text, ScrollView } from "react-native";
import { styles } from "../../styles/Home";

interface interfaceSite {
    title: string,
    children: any,
    [x:string]: any
}

export default function ContainerSites ({title, children, ...rest }:interfaceSite) {
    return (
        <View style={styles.moreVisited} {...rest}>
          <Text style={styles.containerTitle}>{title}</Text>
          <ScrollView style={styles.sitesHorizontal} horizontal={true}   showsHorizontalScrollIndicator={false}>
            {children}
          </ScrollView>
        </View>
    )
}