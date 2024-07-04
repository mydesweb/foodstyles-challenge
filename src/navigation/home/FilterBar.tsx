import React, {memo} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Chip} from '../../ui';

function FilterBar(): React.ReactElement {
  const actions = [
    {
      label: '2 mi',
      onPress: () => {},
    },
    {
      label: 'near me',
      icon: null,
      onPress: () => {},
    },
    {
      label: 'anytime',
      onPress: () => {},
    },
    {
      label: 'any price',
      onPress: () => {},
    },
    {
      label: 'any rating',
      onPress: () => {},
    },
  ];
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={actions}
      renderItem={({item, index}) => (
        <Chip
          label={item.label}
          onPress={() => {
            console.log('do something');
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  content: {
    paddingHorizontal: 18,
    gap: 8,
  },
});

export default memo(FilterBar);
