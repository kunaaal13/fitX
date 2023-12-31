import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function Welcome() {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        source={require('assets/images/welcome.webp')}
        style={{
          height: hp('100%'),
          width: wp('100%'),
        }}
        className="absolute"
      />

      <LinearGradient
        colors={['transparent', '#181818']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInLeft.duration(350).springify()}
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide">
            Best <Text className="text-violet-500">Workouts</Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInRight.duration(350).springify()}
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide">
            For You
          </Animated.Text>
        </View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push('/home')}
            style={{
              width: wp(80),
              paddingVertical: hp(2),
            }}
            className="bg-violet-900 mx-auto rounded-md flex items-center">
            <Text
              style={{
                fontSize: hp(2.5),
              }}
              className="text-white font-medium tracking-widest">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

export default Welcome;
