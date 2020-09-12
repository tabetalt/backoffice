import React, { useState } from 'react';
import { Box, Heading } from 'theme-ui';
import Layout from '../../components/Layout';
import Tree, {
  moveItemOnTree,
  RenderItemParams,
  TreeData,
  TreeDestinationPosition,
  TreeSourcePosition,
} from '@atlaskit/tree'; // , { mutateTree, moveItemOnTree }

const Navigation = () => {
  const [tree, setTree] = useState<TreeData>({
    rootId: '1',
    items: {
      '1': {
        id: '1',
        data: {
          name: 'Alle produkter',
        },
        isExpanded: true,
        children: ['2', '3', '4', '5', '6'],
      },
      '2': {
        id: '2',
        isExpanded: true,
        data: {
          name: 'Gensere',
        },
        children: [],
      },
      '3': {
        id: '3',
        isExpanded: true,
        data: {
          name: 'Oppskrifter',
        },
        children: [],
      },
      '4': {
        id: '4',
        isExpanded: true,
        data: {
          name: 'Hekleoppskrifter',
        },
        children: [],
      },
      '5': {
        id: '5',
        isExpanded: true,
        data: {
          name: 'Hekleoppskrifter',
        },
        children: [],
      },
      '6': {
        id: '6',
        isExpanded: true,
        data: {
          name: 'Hekleoppskrifter',
        },
        children: [],
      },
    },
  });

  const renderTreeItem = ({ item, provided }: RenderItemParams) => (
    <Box
      sx={{ my: 2 }}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Box sx={{ p: 3, bg: 'gray_2' }}>{item.data.name}</Box>
    </Box>
  );
  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Heading sx={{ mb: 4 }}>Hovedmeny</Heading>

        <Tree
          tree={tree}
          renderItem={renderTreeItem}
          offsetPerLevel={15}
          onDragEnd={(
            source: TreeSourcePosition,
            destination?: TreeDestinationPosition
          ) =>
            destination && setTree(moveItemOnTree(tree, source, destination))
          }
          isDragEnabled
          isNestingEnabled
        />

        <Heading>Bunntekst</Heading>

        <Heading>Ikke i navigasjon</Heading>
      </Box>
    </Layout>
  );
};

export default Navigation;
