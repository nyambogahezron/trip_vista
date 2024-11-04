import Colors from '@/constants/Colors';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import images from '../constants/images';
import React from 'react';
const { width } = Dimensions.get('window');

interface ListingProps {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
  customCardStyle: string;
  customImageStyle: string;
  width: number;
  showFavIcon?: boolean;
}
const Listing: React.FC<ListingProps> = ({
  id,
  name,
  price,
  location,
  image,
  customCardStyle,
  customImageStyle,
  width,
  showFavIcon,
}) => {
  return (
    <View style={{ width: width }}>
      <Link href={`/listing/${id}`} asChild>
        <TouchableOpacity
          className={`w-60 bg-white p-2 rounded-lg mr-4 mb-4 shadow-sm shadow-orange-600 border border-[#f3f3f3] ${customCardStyle} `}
        >
          <View className='relative mb-3'>
            <Image
              source={{ uri: images[image as keyof typeof images] }}
              className={`h-52  w-56 rounded-lg p-2 ${customImageStyle}`}
            />
            {!showFavIcon && (
              <View className='absolute bottom-[-20px] right-4 bg-main p-3 rounded-full border-4 border-white'>
                <Feather name='bookmark' size={17} color={Colors.white} />
              </View>
            )}
          </View>

          <Text
            className='text-black ml-1 mt-3 font-pbold'
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {name}{' '}
          </Text>

          <View className='flex-row justify-between mt-3 mb-3 items-center'>
            <View className='flex-row gap-1 items-center'>
              <Ionicons
                name='location-outline'
                size={15}
                color={Colors.primaryColor}
              />
              <Text
                className='text-sm text-gray-500 font-pregular mt-2'
                numberOfLines={1}
              >
                {location}
              </Text>
            </View>
            <Text className='text-orange-500 font-psemibold'>${price}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};
export default Listing;
