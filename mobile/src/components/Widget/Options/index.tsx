import React from 'react';
import { View, Text } from 'react-native';

import { Copyrights } from '../Copyrights';
import { Option } from '../Option';

import { feedbackTypes } from '../../../types/feedbackTypes';
import { styles } from './styles';
import { FeedbackType } from '../../Widget';

interface Props {
  onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}

export function Options({onFeedbackTypeChange}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deje su feedback
      </Text>
      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key,value])=>(
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={()=>onFeedbackTypeChange(key as FeedbackType)}
            />
          ))
        }
      </View>
      <Copyrights />
    </View>
  );
}