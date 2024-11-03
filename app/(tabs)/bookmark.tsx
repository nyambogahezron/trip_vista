import { Stack, router, useLocalSearchParams } from 'expo-router';
import { View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Listing from '../../components/Listing';
import listingData from '../../data/listingsData';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');

const Favorite = () => {
  return (
    <SafeAreaView className='flex-1'>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Favorites',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#333' },
          headerStyle: { backgroundColor: '#f2f2f3' },
          headerLeft: () => (
            <TouchableOpacity
              className='ml-3'
              onPress={() => router.back()}
              style={{
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View className='bg-[#fffefe] p-[8] rounded-[10px]'>
                <Feather name='arrow-left' size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View className=' bg-bgColor items-center mt-[-30px]'>
        <FlatList
          data={listingData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Listing
              id={item.id}
              name={item.name}
              price={item.price}
              location={item.location}
              image={item.image}
              customCardStyle='w-full m-1'
              width={width}
              showFavIcon={true}
              customImageStyle='h-60 w-full'
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default Favorite;
