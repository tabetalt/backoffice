import { Field } from '@tabetalt/kit';
import React from 'react';
import { Box, Heading, Select, Text } from 'theme-ui';
import Layout from '../../components/layout/Layout';

const Page: React.FC = () => (
  <Layout>
    <Box sx={{ m: 5, maxWidth: 820 }}>
      <Heading>Legg til ny innholdsside</Heading>
      <Text sx={{ mb: 4 }}>
        Her kan du administrere, sortere, legge til eller slette rabatter og
        rabattkoder som kundene dine kan bruke.
      </Text>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Field label="Navn på siden" placeholder="Sidenavn" />
        <Field label="URL" name="slug" placeholder="sidenavn" />
        <Field label="Sidebeskrivelse" placeholder="Sidebeskrivelse" />
        <Field as={Select} label="Status">
          <option>Inaktiv</option>
        </Field>
      </Box>
    </Box>
  </Layout>
);

export default Page;
