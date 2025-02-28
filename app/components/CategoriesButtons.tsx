import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useGlobalContext } from '@/context/GlobalContext';
import { ListingProps } from '@/types';

interface Props {
	setSelectedCategory: (category: string) => void;
	selectedCategory: string;
}

export default function CategoriesButtons({
	setSelectedCategory,
	selectedCategory,
}: Props) {
	const itemRefs = useRef<(any | null)[]>([]);
	const { listingsData } = useGlobalContext();
	const [customCategories, setCustomCategories] = useState<any[]>([]);

	const handleButtonPress = (title: string) => {
		setSelectedCategory(title);
	};

	//get custom categories form listings

	const getDistinctCategories = () => {
		const categories = listingsData.map((item: ListingProps) => item.category);
		const uniqueCategories = Array.from(new Set(categories));
		setCustomCategories(['All', ...uniqueCategories]);
	};

	useEffect(() => {
		getDistinctCategories();
	}, [listingsData]);

	return (
		<View className='fixed top-0 left-0 right-0 z-10'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='flex-row py-4 bg-bgColor '
			>
				<View className='flex flex-row gap-2 mr-10 w-full '>
					{customCategories &&
						customCategories.map((item, index: number) => (
							<TouchableOpacity
								ref={(ref) => (itemRefs.current[index] = ref)}
								key={index}
								onPress={() => handleButtonPress(item)}
								className={`flex items-center justify-center px-4 py-2 gap-2 rounded-xl  border-1 border-[#E5E5E5]
                ${
									selectedCategory === item
										? 'bg-main border-white'
										: 'bg-gray-200'
								}
                `}
							>
								<Text
									className={`capitalize text-black font-pmedium ${
										selectedCategory === item ? 'text-white' : 'text-black'
									}`}
								>
									{item}
								</Text>
							</TouchableOpacity>
						))}
				</View>
			</ScrollView>
		</View>
	);
}
