import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { styles } from "../../styles/TabBar"
import { Home, CreateSite, Search, MySites, Profile } from "../../views"
import Icon from 'react-native-vector-icons/FontAwesome'
import { ItemBarButton, CreateSiteButton } from "../atoms"

const Tab = createBottomTabNavigator()

export default function Tabs () {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                ...styles.tab
            }
        }}>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({focused}) => (
                <ItemBarButton text="Inicio" nameIcon="home" focused={focused} />
            )}}/>
            <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({focused}) => (
                <ItemBarButton text="Buscar" nameIcon="search" focused={focused} />
            )}}/>
            <Tab.Screen name="CreateSite" component={CreateSite} options={{tabBarIcon: ({focused}) => (
                <Icon name="plus" color="white" size={25} />
            ), tabBarButton: (props) => (
                <CreateSiteButton {...props} />
            )}}/>
            <Tab.Screen name="MySites" component={MySites} options={{tabBarIcon: ({focused}) => (
                <ItemBarButton text="Mis Sitios" nameIcon="pagelines" focused={focused} />
            )}}/>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({focused}) => (
                <ItemBarButton text="Perfil" nameIcon="user" focused={focused} />
            )}}/>
        </Tab.Navigator>
    )
}