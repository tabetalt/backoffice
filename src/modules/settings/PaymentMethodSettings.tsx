import { Field } from '@tabetalt/kit';
import React from 'react';
import { Box, Button, Flex, Heading, Text } from 'theme-ui';
import Layout from '../../components/Layout';

const PaymentMethod = () => (
  <Layout>
    <Box sx={{ m: 5 }}>
      <Heading>Betalingsmetoder</Heading>
      <Text sx={{ mb: 4 }}>
        Hvilke betalingsmetoder vil du tilby? Her kan du administrere, sortere,
        legge til eller slette betalingsmetoder som kundene dine kan bruke.
      </Text>
      <Flex sx={{ bg: 'gray3', p: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Heading>Manuell fakturering</Heading>
          <Text>
            Håndter betalinger selv. Du velger hvordan du mottar betalinger
            eller fakturaer.
          </Text>
        </Box>
        <Box>
          <Button sx={{ bg: 'error' }}>Deaktiver</Button>
        </Box>
      </Flex>
      <Box sx={{ bg: 'gray3', p: 4, mt: 4 }}>
        <Heading>Swedbank Pay</Heading>
        <Text>
          Med en kredittkortavtale med PayEx kan du ta betalt med VISA eller
          MasterCard. Spesialpris for TaBetalt kunder! 1,95% + 2,45 NOK.
          <br />
          Oppstart 695 og 95 NOK i mndsavgift i 6 mnd (195 NOK etter 6 mnd).
        </Text>
        <Flex sx={{ '>div': { mt: 3 }, alignItems: 'center' }}>
          <Flex sx={{ flexGrow: 1, '>div': { mr: 3 } }}>
            <Box sx={{ width: '100%' }}>
              <Field
                sx={{ flex: 1 }}
                label="Marchant nr."
                placeholder="Skriv inn ditt Swedbank Merchant nummer"
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Field
                sx={{ flex: 1 }}
                label="Kryperingsnøkkel"
                placeholder="Skriv inn din Swedbank krypteringsnøkkel"
              />
            </Box>
          </Flex>
          <Box>
            <Button sx={{ bg: 'error', flex: 3 }}>Deaktiver</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Layout>
);

export default PaymentMethod;
