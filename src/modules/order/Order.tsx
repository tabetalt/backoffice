import React, { useCallback } from 'react';
import { Badge, Box, Button, Flex, Heading, Link, Text } from 'theme-ui';
import { CellProps, icons, Table } from '@tabetalt/kit';
import Layout from '../../components/layout/Layout';
import { useNavigate, useParams } from 'react-router';
import {
  GetOrdersDocument,
  OrderUpdateInput,
  useDeleteOrderMutation,
  useGetOrderQuery,
  useUpdateOrderMutation,
} from '../../generated/graphql';
import * as DineroHelper from '../../helpers';
import moment from 'moment';

const columns = [
  {
    Header: 'Produkt',
    accessor: 'product.title',
  },
  {
    Header: 'Pris',
    Cell: ({ row: { original: order } }: CellProps<any>) =>
      DineroHelper.formatPrice(order?.product.price).netAmount,
  },
  {
    Header: 'Antall',
    accessor: 'count',
  },
  {
    Header: 'Totalt',
    accessor: 'total.netAmount.amount',
    Cell: ({ row: { original: order } }: CellProps<any>) =>
      DineroHelper.formatPrice(order?.total).netAmount,
  },
];

const Order: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const orderId = Number(params.orderId);

  const { data } = useGetOrderQuery({
    variables: {
      id: orderId,
    },
  });
  const [updateOrder] = useUpdateOrderMutation();
  const [deleteOrder] = useDeleteOrderMutation({
    refetchQueries: [{ query: GetOrdersDocument }],
  });

  const handleOrderStatusChange = useCallback((name: string, value: string) => {
    const input: OrderUpdateInput = { [name]: value };
    updateOrder({ variables: { id: orderId, input } });
  }, []);

  const handleDeleteOrder = useCallback(async () => {
    await deleteOrder({ variables: { id: orderId } });
    navigate(`/order`, {
      replace: true,
    });
  }, []);

  function setStatus(status = ''): string {
    switch (status) {
      case 'PAID':
      case 'CONFIRMED':
        return 'success';
      case 'PENDING':
      case 'UNCONFIRMED':
        return 'warning';
      default:
        return 'error';
    }
  }

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Flex sx={{ width: '100%' }}>
          <Box sx={{ flex: '7', mr: 4 }}>
            <Heading sx={{ mb: 3 }}>Oppsummering av ordre</Heading>
            <Text sx={{ mb: 4 }}>
              Bestilt den{' '}
              {moment(data?.order.orderTime).format('DD.MM.YYYY hh:mm')}
            </Text>
            <Flex
              sx={{
                mt: 4,
                pt: 4,
                borderTop: '1px solid',
                borderTopColor: 'highlight',
                '> div': {
                  width: '100%',
                },
              }}
            >
              <Box>
                <Heading as="h5">Kunde</Heading>
                <Text>{data?.order.clientName}</Text>
                <Text>{data?.order.clientEmail}</Text>
              </Box>
              <Box>
                <Heading as="h5">Betalingsadresse</Heading>
                <Text>{data?.order.clientName}</Text>
                <Text>{data?.order.orderAddress}</Text>
              </Box>
              <Box>
                <Heading as="h5">Leveringsadresse</Heading>
                <Text>{data?.order.clientName}</Text>
                <Text>{data?.order.deliveryAddress}</Text>
              </Box>
            </Flex>
          </Box>
          <Box sx={{ bg: 'gray2', flex: '3', p: 4 }}>
            <Box sx={{ mb: 5 }}>
              <Flex sx={{ width: '100%', justifyContent: 'center' }}>
                <Heading as="h3" sx={{ flexGrow: 1 }}>
                  Betalingsstatus
                </Heading>
                <Badge variant={setStatus(data?.order.paymentStatus)}>
                  {data?.order.paymentStatus}
                </Badge>
              </Flex>
              <Flex sx={{ width: '100%', justifyContent: 'center', py: 3 }}>
                <Text sx={{ flexGrow: 1 }}>Betalingstype:</Text>
                <Text>Manuell fakturering</Text>
              </Flex>
              <hr />
              <Box sx={{ '> a': { mr: 2 } }}>
                {data?.order.paymentStatus !== 'PAID' && (
                  <Link
                    onClick={() =>
                      handleOrderStatusChange('paymentStatus', 'PAID')
                    }
                  >
                    Marker som PAID
                  </Link>
                )}
                {data?.order.paymentStatus !== 'FAILED' && (
                  <Link
                    onClick={() =>
                      handleOrderStatusChange('paymentStatus', 'FAILED')
                    }
                  >
                    Marker som FAILED
                  </Link>
                )}
                {data?.order.paymentStatus !== 'PENDING' && (
                  <Link
                    onClick={() =>
                      handleOrderStatusChange('paymentStatus', 'PENDING')
                    }
                  >
                    Marker som PENDING
                  </Link>
                )}
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              <Flex sx={{ width: '100%', justifyContent: 'center' }}>
                <Heading as="h3" sx={{ flexGrow: 1 }}>
                  Ordrestatus
                </Heading>
                <Badge variant={setStatus(data?.order.status)}>
                  {data?.order.status}
                </Badge>
              </Flex>
              <Flex sx={{ width: '100%', justifyContent: 'center', py: 3 }}>
                <Text sx={{ flexGrow: 1 }}>Leveringsmetode:</Text>
                <Text>Hent i butikk</Text>
              </Flex>
              <hr />
              <Box sx={{ '> a': { mr: 2 } }}>
                {data?.order.status !== 'CONFIRMED' && (
                  <Link
                    onClick={() =>
                      handleOrderStatusChange('status', 'CONFIRMED')
                    }
                  >
                    Marker som sendt
                  </Link>
                )}
                {data?.order.status !== 'UNCONFIRMED' && (
                  <Link
                    onClick={() =>
                      handleOrderStatusChange('status', 'UNCONFIRMED')
                    }
                  >
                    Marker som bekreftet
                  </Link>
                )}
                {data?.order.status !== 'CANCELED' && (
                  <Link
                    onClick={() =>
                      handleOrderStatusChange('status', 'CANCELED')
                    }
                  >
                    Marker som avbryt
                  </Link>
                )}
              </Box>
            </Box>
            {/* <Box>
              <Heading as="h3" sx={{ flexGrow: 1 }}>
                Kommentar fra kunde
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque aliquet commodo erat non.
              </Text>
            </Box> */}
            <Box sx={{ mt: 5 }}>
              <Button
                variant="outline"
                sx={{ display: 'flex', alignItems: 'center' }}
                onClick={handleDeleteOrder}
              >
                <Text>Slett ordre</Text>
                <icons.TrashIcon sx={{ ml: 2 }} />
              </Button>
            </Box>
          </Box>
        </Flex>

        <Box sx={{ mt: 5 }}>
          <Table options={{ columns, data: data?.order.products || [] }} />
        </Box>
        <Box
          sx={{
            mt: 3,
            '> div': { '> div': { flex: 5, textAlign: 'right' } },
          }}
        >
          <Flex>
            <Text>Delsum</Text>
            <Text>
              {
                DineroHelper.formatPrice(data?.order.totalProductsPrice)
                  .netAmount
              }{' '}
              NOK
            </Text>
          </Flex>
          <Flex>
            <Text>Fraktavgifter</Text>
            <Text>
              {DineroHelper.formatMoney(data?.order.deliveryMethod?.price)} NOK
            </Text>
          </Flex>
          <Flex sx={{ mt: 4 }}>
            <Text>
              {data?.order.products[0]?.product.vatRate?.value.amount
                ? data?.order.products[0]?.product.vatRate?.value.amount
                : 0}
              % MVA
            </Text>
            <Text>
              {DineroHelper.formatPrice(data?.order.totalPrice).vatAmount} NOK
            </Text>
          </Flex>
          <Flex>
            <Text>Pris eks. MVA</Text>
            <Text>
              {DineroHelper.formatPrice(data?.order.totalPrice).grossAmount} NOK
            </Text>
          </Flex>
          <Flex>
            <Text>Pris inkl. MVA</Text>
            <Text>
              {DineroHelper.formatPrice(data?.order.totalPrice).netAmount} NOK
            </Text>
          </Flex>
          <Flex sx={{ pt: 3, '> div': { fontSize: 2 } }}>
            <Text>Totalt</Text>
            <Text>
              {DineroHelper.formatPrice(data?.order.totalPrice).netAmount}
              {/* {data?.order.totalPrice.currency} */}
              NOK
            </Text>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Order;
