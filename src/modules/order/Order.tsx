import React from 'react';
import { Badge, Box, Button, Flex, Heading, Link, Text } from 'theme-ui';
import { icons, Table } from '@tabetalt/kit';
import Layout from '../../components/layout/Layout';
import { useParams } from 'react-router';
import { useGetOrderQuery } from '../../generated/graphql';
import * as DineroHelper from '../../helpers';
import moment from 'moment';

const columns = [
  {
    Header: 'Produkt',
    accessor: 'product.title',
  },
  {
    Header: 'Pris',
    accessor: 'product.price.netAmount.amount',
  },
  {
    Header: 'Antall',
    accessor: 'count',
  },
  {
    Header: 'Totalt',
    accessor: 'total.netAmount.amount',
  },
];

const Order: React.FC = () => {
  const params = useParams();
  const orderId = Number(params.orderId);

  const { data } = useGetOrderQuery({
    variables: {
      id: orderId,
    },
  });

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
                <Badge variant={setStatus(data?.order.status)}>
                  {data?.order.paymentStatus}
                </Badge>
              </Flex>
              <Flex sx={{ width: '100%', justifyContent: 'center', py: 3 }}>
                <Text sx={{ flexGrow: 1 }}>Betalingstype:</Text>
                <Text>Manuell fakturering</Text>
              </Flex>
              <hr />
              <Box sx={{ '> a': { mr: 2 } }}>
                <Link>Marker som sendt</Link>
                <Link>Marker som betalt</Link>
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
                <Link>Marker som sendt</Link>
                <Link>Marker som bekreftet</Link>
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
              {data?.order.products[0]?.product.vatRate?.value.amount}% MVA
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
