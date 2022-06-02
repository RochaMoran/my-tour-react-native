import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { styles } from "../../styles/TabBar"
import { Home, CreateSite, Search, MySites, Profile, SeeSite, UpdateSite } from "../../views"
import Icon from 'react-native-vector-icons/FontAwesome'
import { ItemBarButton, CreateSiteButton } from "../atoms"
import SitesContextProvider from "../../context/siteContext"
import { View } from "react-native"
import { colors } from "../../styles/global"
import { defaultCreateSiteValue } from "../../helpers/const/defaultCreateSite"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function Tabs () {
    return (
        <SitesContextProvider>
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
                    <Tab.Screen name="SeeSite" component={SeeSite} options={{tabBarButton:() => (<View style={{display:"none"}}></View>),  headerShown: false,
                      headerTintColor: "white",
                      headerStyle: {
                        backgroundColor: colors.primary,
                      },
                      headerShadowVisible: false}}/>
                    <Tab.Screen name="UpdateSite" component={UpdateSite} options={{tabBarButton:() => (<View style={{display:"none"}}></View>),  headerShown: false,
                      headerTintColor: "white",
                      headerStyle: {
                        backgroundColor: colors.primary,
                      },
                      headerShadowVisible: false}}/>
            </Tab.Navigator>
        </SitesContextProvider>
    )
}