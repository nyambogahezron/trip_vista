import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoriesButtons from '@/components/CategoriesButtons';
import Listings from '@/components/Listings';
import TravelGroups from '@/components/TravelGroups';
import SearchInput from '@/components/SearchInput';
import LoadingScreen from '@/components/LoadingScreen';
import Animated from 'react-native-reanimated';
import { useGlobalContext } from '@/context/GlobalContext';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setLoading] = useState<boolean>(true);
  const { listingsData } = useGlobalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  async function onRefresh() {
    const timer = setTimeout(() => {
      setLoading(false);
      return () => clearTimeout(timer);
    }, 1000);
  }
  const data = [
    {
      key: 'topRated',
      component: (
        <Listings selectedCategory={selectedCategory} horizontal={true} />
      ),
    },
    {
      key: 'list',
      component: (
        <Listings
          selectedCategory={selectedCategory}
          horizontal={false}
          customCardStyle='w-full right-1'
          customImageStyle='w-full'
        />
      ),
    },
  ];

  return (
    <SafeAreaView className='bg-bgColor flex-1'>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Animated.FlatList
          refreshing={false}
          onRefresh={onRefresh}
          data={data}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <View>{item.component}</View>}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <View className='flex flex-row items-center justify-between py-2 px-4'>
                <TouchableOpacity onPress={() => router.replace('/profile')}>
                  <Image
                    source={{
                      uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
                    }}
                    className='w-10 h-10 rounded-full'
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.push('/')}
                  style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    borderRadius: 10,
                    shadowColor: '#171717',
                    shadowOffset: { width: 2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                  }}
                >
                  <Ionicons name='notifications' size={28} />
                </TouchableOpacity>
              </View>
              <View>
                <Text className='text-xl font-psemibold ml-4 my-2 text-red-700'>
                  Explore the beautiful world!
                </Text>
              </View>
              {/* Search Bar */}
              <View className='flex-row my-3'>
                <SearchInput />
                <View className='bg-main rounded-[10px] p-2 mr-3'>
                  <Ionicons name='options' size={25} color='#fff' />
                </View>
              </View>
              {/* Categories */}
              <View>
                <CategoriesButtons
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
                <View>
                  {/* <Listings selectedCategory={selectedCategory} /> */}
                </View>
              </View>
            </>
          )}
          ListFooterComponent={() => (
            <View>
              <TravelGroups />
            </View>
          )}
        />
      )}

      <StatusBar barStyle='dark-content' backgroundColor='#f3f3f3' />
    </SafeAreaView>
  );
};

export default HomePage;
