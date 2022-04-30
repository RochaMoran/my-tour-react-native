import { View } from "react-native";
import { styles } from "../../styles/Home";
import Site from "../moleculs/site";
import ContainerSites from "./containerSites";

export default function BodyHome () {
    return (
        <View style={styles.bodyHome}>
        <ContainerSites title="Los mas visitados">
            <Site type="lg" country="Peru" uri="http://enviajes.cl/wp-content/uploads/2014/08/Viajes-a-Nicaragua-Leon.jpg" site="Catedral matagalpa" />
            <Site type="lg" country="Peru" uri="http://c.files.bbci.co.uk/E02E/production/_102809375_machu.jpg" site="Machu-Picchu" />
            <Site type="lg" country="Peru" uri="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2LIVAM325JHATPRGLQJLJVPRZI.jpg" site="Isletas de granada" />
        </ContainerSites>
        <ContainerSites title="Lo mas nuevo" style={[styles.moreVisited, styles.newSites]}>
            <Site type="hg" country="Nicaragua" uri="http://enviajes.cl/wp-content/uploads/2014/08/Viajes-a-Nicaragua-Leon.jpg" site="Catedral matagalpa" />
            <Site type="hg" country="Nicaragua" uri="http://c.files.bbci.co.uk/E02E/production/_102809375_machu.jpg" site="Machu-picchu" />
            <Site type="hg" country="Nicaragua" uri="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2LIVAM325JHATPRGLQJLJVPRZI.jpg" site="Isletas granada" />
        </ContainerSites>
        <ContainerSites title="No te lo puedes perder">
            <Site type="lg" country="España" uri="http://enviajes.cl/wp-content/uploads/2014/08/Viajes-a-Nicaragua-Leon.jpg" site="Jinotega" />
            <Site type="lg" country="España" uri="http://c.files.bbci.co.uk/E02E/production/_102809375_machu.jpg" site="Jinotega" />
            <Site type="lg" country="España" uri="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2LIVAM325JHATPRGLQJLJVPRZI.jpg" site="Jinotega" />
        </ContainerSites>
      </View>
    )
}