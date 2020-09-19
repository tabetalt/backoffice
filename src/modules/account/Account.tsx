import React from 'react';
import Layout from '../../components/Layout';
import { Heading, Box, Select, Flex } from 'theme-ui';
import { Field } from '@tabetalt/kit';
import { Link } from 'react-router-dom';

const Account = () => (
  <Layout>
    <Box sx={{ p: 5 }}>
      <Heading>Din informasjon</Heading>
      <Box sx={{ py: 3, '>div': { py: 2 } }}>
        <Field
          label="Navn"
          name="name"
          placeholder="This placeholder is missing 😬"
        />
        <Field
          label="E-post"
          name="email"
          type="email"
          placeholder="This placeholder is missing 😬"
        />
        <Field label="Språk" name="lang" as={Select}>
          <option>Hello</option>
        </Field>
      </Box>
      <Heading>Bytte passord</Heading>
      <Box sx={{ py: 3, '>div': { py: 2 } }}>
        <Field
          label="Passord"
          name="password"
          aria-label="existing password"
          placeholder="Nåværende passord"
        />
        <Field
          label="Nytt passord"
          name="new_password"
          aria-label="new password"
          placeholder="Skriv inn ønsket passord"
        />
        <Field
          label="Gjenta nytt"
          name="repeat_new_password"
          aria-label="repeat new password"
          placeholder="Gjenta det nye passordet"
        />
      </Box>
      <Heading>Dine godkjenninger</Heading>
      <Flex sx={{ py: 3, '> a:not(:first-child)': { px: 3 } }}>
        <Link to="/">Personvernerklæring</Link>
        <Link to="/">Vilkår og betingelser</Link>
      </Flex>
    </Box>
  </Layout>
);

export default Account;
