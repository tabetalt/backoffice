import { Table, icons } from '@tabetalt/kit';
import React from 'react';
import { Box, Button, Heading, IconButton, Text } from 'theme-ui';
import Layout from '../../components/layout/Layout';
import { SettingsNavigation } from './SettingsNavigation';
import { Hooks, useRowSelect, UseRowSelectInstanceProps } from 'react-table';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }: any, ref: any) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const Shipping: React.FC = () => {
  const data = Array(4).fill({
    name: 'PostNord',
    price: '299,90 NOK',
    status: 'Aktiv',
    actions: (
      <Box sx={{ textAlign: 'right' }}>
        <IconButton>
          <icons.TrashIcon />
        </IconButton>
        <IconButton>
          <icons.PencilIcon />
        </IconButton>
      </Box>
    ),
  });

  const columns = React.useMemo(
    () => [
      {
        Header: 'Leveringsmetode',
        accessor: 'name',
      },
      {
        Header: 'Pris',
        accessor: 'price',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: '',
        accessor: 'actions',
      },
    ],
    []
  );

  const addCheckbox = (hooks: Hooks<any>) => {
    hooks.visibleColumns.push((columns: Array<any>) => [
      {
        id: 'selection',
        Header: ({
          getToggleAllRowsSelectedProps,
          selectedFlatRows,
        }: UseRowSelectInstanceProps<any>) => {
          console.log(selectedFlatRows);
          return (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          );
        },
        Cell: ({ row }: any) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      ...columns,
    ]);
  };

  return (
    <Layout
      header={{
        links: [
          {
            name: 'Innstillinger',
            to: '/settings/general',
          },
        ],
        children: (
          <Box>
            <Button sx={{ ml: 3 }}>Legg til ny leveringsmetode</Button>
          </Box>
        ),
      }}
    >
      <Box sx={{ p: 5 }}>
        <SettingsNavigation />
        <Heading>Leveringsmetoder</Heading>
        <Text sx={{ mb: 4 }}>
          Hvilke leveringsmetoder vil du tilby? Her kan du administrere,
          sortere, legge til eller slette leveringsmetoder som kundene dine kan
          bruke.
        </Text>
        <Table
          options={{ columns, data }}
          plugins={[useRowSelect, addCheckbox]}
        />
      </Box>
    </Layout>
  );
};

export default Shipping;
