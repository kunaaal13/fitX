import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { bodyParts } from 'utils/constants';

function BodyPartsList() {
  return (
    <View className="mx-4 flex-1">
      <Text
        style={{
          fontSize: heightPercentageToDP('3%'),
        }}
        className="text-violet-500 font-semibold">
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item, index }) => {
          const animation = index % 2 === 0 ? FadeInLeft : FadeInRight;
          return (
            <Animated.View
              entering={animation
                .duration(400)
                .delay(index * 200)
                .springify()}
              className="">
              <TouchableOpacity
                onPress={() => router.push(`/exercises/${item.name}`)}
                style={{ width: widthPercentageToDP(44), height: widthPercentageToDP(52) }}
                className="flex justify-end p-4 mb-4">
                <Image
                  source={item.image}
                  style={{ width: widthPercentageToDP(44), height: widthPercentageToDP(52) }}
                  className="rounded-[35px] absolute"
                />

                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.9)']}
                  style={{ width: widthPercentageToDP(44), height: heightPercentageToDP(15) }}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  className="absolute bottom-0 rounded-b-[35px]"
                />

                <Text
                  style={{ fontSize: heightPercentageToDP(2.3) }}
                  className="text-white font-semibold text-center tracking-wide capitalize">
                  {item?.name}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

export default BodyPartsList;
