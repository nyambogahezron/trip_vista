import Colors from '@/constants/Colors';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.black,
        tabBarActiveTintColor: '#ff7f36',
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: 'transparent',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name='compass' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='categories'
        options={{
          title: 'Categories',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name='space-dashboard' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={24}
              name='search-outline'
              color='#000'
              className='font-pblack text-black'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='bookmark'
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name='bookmark' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='user' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
