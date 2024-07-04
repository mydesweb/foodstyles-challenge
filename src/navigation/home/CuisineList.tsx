import React, {useMemo, useState} from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
import Cuisine from './Cuisine';

function compare(a, b) {
  if (a.position < b.position) {
    return -1;
  }
  if (a.position > b.position) {
    return 1;
  }
  return 0;
}

function CuisineList({data, navigate, level, routes, cuisineLevels}) {
  const items = useMemo(() => {
    return data
      .filter(item => item.parentId === routes[level - 1].parentId)
      .sort(compare);
  }, [data, level, routes]);

  const {width} = useWindowDimensions();
  const itemWidth = width * 0.33;

  // console.log('items.length', items.length);

  let content = useMemo(() => {
    if (items.length < 3) {
      return items.map(item => (
        <Cuisine
          key={item.id}
          width={itemWidth}
          name={item.name}
          imagePath={item.imagePath}
          onPress={() => {
            navigate(item.id, item.name, item.imagePath);
          }}
        />
      ));
    }

    let rows = [];
    let columns = [];

    for (let i = 0; i < items.length; i++) {
      if (i % 2 === 0 && rows.length > 0) {
        columns.push(
          <View key={i} style={styles.column}>
            {rows}
          </View>,
        );
        rows = [];
      }
      rows.push(
        <Cuisine
          key={items[i].id}
          width={itemWidth}
          name={items[i].name}
          imagePath={items[i].imagePath}
          onPress={() => {
            navigate(items[i].id, items[i].name, items[i].imagePath);
          }}
        />,
      );
    }

    if (rows.length > 0) {
      columns.push(
        <View key={'last'} style={styles.column}>
          {rows}
        </View>,
      );
      rows = [];
    }

    return columns;
  }, [itemWidth, items]);

  return items.length > 0 ? (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {content}
      </ScrollView>
      <View style={[styles.indicator, {width: width * 0.13}]} />
    </>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 11,
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    gap: 10,
  },
  column: {
    gap: 11,
  },
  indicator: {
    alignSelf: 'center',
    height: 5,
    borderRadius: 100,
    backgroundColor: 'rgb(187,187,187)',
  },
});

export default CuisineList;
