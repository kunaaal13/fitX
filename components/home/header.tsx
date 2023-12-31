import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

function HomeHeader() {
  const date = new Date();
  const hours = date.getHours();

  const greeting = () => {
    if (hours < 12) {
      return 'Good Morning 🌞';
    } else if (hours < 18) {
      return 'Good Afternoon 🌤';
    } else {
      return 'Good Evening 🌙';
    }
  };

  return (
    <View className="flex flex-row mx-5 justify-between items-center">
      {/* Left */}
      <View className="space-y-1">
        <Text
          style={{
            fontSize: heightPercentageToDP('2.5%'),
          }}
          className="font-semibold capitalize">
          {greeting()}
        </Text>
        <Text
          style={{
            fontSize: heightPercentageToDP('3.3%'),
          }}
          className="font-semibold tracking-wide capitalize text-violet-500">
          Let's Workout?
        </Text>
      </View>

      {/* Right */}
      <View className="flex items-center">
        <Link href="/">
          <Image
            source={require('assets/images/avatar.jpeg')}
            className="rounded-full bg-cover"
            style={{
              height: heightPercentageToDP('6%'),
              width: heightPercentageToDP('6%'),
            }}
          />
        </Link>
      </View>
    </View>
  );
}

export default HomeHeader;
