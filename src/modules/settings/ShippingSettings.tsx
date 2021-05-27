import { Table, icons, Modal } from '@tabetalt/kit';
import React, { useState } from 'react';
import { Box, Button, Heading, IconButton, Text } from 'theme-ui';
import Layout from '../../components/layout/Layout';
import { SettingsNavigation } from './SettingsNavigation';
import {
  CellProps,
  Hooks,
  useRowSelect,
  UseRowSelectInstanceProps,
} from 'react-table';
import { ShippingSettingsModalContent } from './ShippingSettingsModalContent';
import {
  GetDeliveryMethodsDocument,
  GetDeliveryMethodsQuery,
  useDeleteDeliveryMethodMutation,
  useGetDeliveryMethodsQuery,
} from '../../generated/graphql';
import { TenantItem } from '../../context/TenantContext';
import * as DineroHelper from '../../helpers';

export type DeliveryMethodItem =
  GetDeliveryMethodsQuery['deliveryMethods']['items'][0];

interface ShippingSettingsProps {
  tenant?: TenantItem | null;
}

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

const Shipping: React.FC<ShippingSettingsProps> = ({ tenant }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentDeliveryMethod, setCurrentDeliveryMethod] =
    useState<DeliveryMethodItem | null>(null);
  const { data } = useGetDeliveryMethodsQuery();
  const [deleteDeliveryMethod, { loading: deleteLoading }] =
    useDeleteDeliveryMethodMutation({
      refetchQueries: [{ query: GetDeliveryMethodsDocument }],
    });

  const actions = (deliveryMethod: DeliveryMethodItem) => (
    <Box sx={{ textAlign: 'right' }}>
      <IconButton
        onClick={() => {
          deleteDeliveryMethod({ variables: { id: deliveryMethod.id } });
        }}
        disabled={deleteLoading}
      >
        <icons.TrashIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          const modalState = !openModal;
          setOpenModal(modalState);
          if (modalState) {
            setCurrentDeliveryMethod(deliveryMethod);
          }
        }}
        disabled={deleteLoading}
      >
        <icons.PencilIcon />
      </IconButton>
    </Box>
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Leveringsmetode',
        accessor: 'name',
      },
      {
        Header: 'Pris',
        accessor: 'price.amount',
        Cell: ({
          row: { original: deliveryMethod },
        }: CellProps<DeliveryMethodItem>) =>
          DineroHelper.formatMoney(deliveryMethod?.price),
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({
          row: { original: deliveryMethod },
        }: CellProps<DeliveryMethodItem>) => actions(deliveryMethod),
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
            <Button
              sx={{ ml: 3 }}
              onClick={() => {
                setOpenModal(!openModal);
                setCurrentDeliveryMethod(null);
              }}
            >
              Legg til ny leveringsmetode
            </Button>
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
          options={{ columns, data: data?.deliveryMethods?.items || [] }}
          plugins={[useRowSelect, addCheckbox]}
        />
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          header="Ny leveringsmetode"
        >
          <ShippingSettingsModalContent
            currentDeliveryMethod={currentDeliveryMethod}
            onRequestClose={() => {
              setOpenModal(false);
              setCurrentDeliveryMethod(null);
            }}
            tenantId={tenant?.id}
          />
        </Modal>
      </Box>
    </Layout>
  );
};

export default Shipping;
