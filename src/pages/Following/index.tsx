import React from 'react';
import { View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Catgories</Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <View /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <View /> },

      {
        key: 'CONTINUE_WHATCHING',
        render: () => <Title>Continue Whatching</Title>,
        isTitle: true,
      },
      { key: 'C3', render: () => <View /> },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <View /> },
    ];

    // Array que contem apenas os index dos elementos que são titulos
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
             // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
