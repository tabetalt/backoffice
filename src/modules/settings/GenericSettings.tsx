import { Field } from '@tabetalt/kit';
import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Label,
  Select,
  Text,
} from 'theme-ui';
import Layout from '../../components/Layout';

type GenericSettingsProps = any;

const GenericSettings: React.FC<GenericSettingsProps> = ({ tenant = {} }) => (
  <Layout>
    <Box sx={{ m: 5, maxWidth: 820 }}>
      <Heading>Butikkinformasjon</Heading>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Field label="Navn på butikken" name="title" value={tenant.title} />
        <Field label="Butikkens URL" name="url" value={tenant.url} />
        <Field as={Select} label="Språk" name="lang">
          <option>Norsk</option>
        </Field>
        <Field label="MVA-sats" name="vatSats" value={tenant.vatSats} />
        <Flex sx={{ alignItems: 'center' }}>
          <Label htmlFor="" sx={{ width: 'auto', minWidth: '8.75rem' }}>
            Pris og valuta
          </Label>
          <Box sx={{ flex: 5 }}>
            <Select name="vat" sx={{ width: '100%' }}>
              <option>Inkl. MVA</option>
              <option>Eksl. MVA</option>
            </Select>
          </Box>
          <Box sx={{ flex: 5, ml: 3 }}>
            <Select name="currency" sx={{ width: '100%' }}>
              <option>NOK</option>
            </Select>
          </Box>
          {/* <Field label="Språk" name="lang" placeholder="Velg språk" as={Select}>
            <option>Hello</option>
          </Field> */}
        </Flex>
      </Box>
      <Heading>Kontaktinformasjon</Heading>
      <Text sx={{ mb: 3 }}>
        Denne informasjonen vises i nettbutikken, samt på kvitteringer og
        ordrebekreftelser.
      </Text>
      <Box sx={{ '>div': { mb: 3, mt: 3 } }}>
        <Field
          label="Firmanavn"
          name="companyName"
          value={tenant.companyName}
        />
        <Field
          label="Gateadresse"
          name="companyAddress"
          value={tenant.companyAddress}
        />
        <Flex sx={{ alignItems: 'center' }}>
          <Label htmlFor="" sx={{ width: 'auto', minWidth: '8.75rem' }}>
            Postnr. og sted
          </Label>
          <Box sx={{ flex: 3 }}>
            <Input
              name="postalCode"
              placeholder="1234"
              value={tenant.postalCode}
            />
          </Box>
          <Box sx={{ flex: 8, ml: 3 }}>
            <Input
              name="postalAddress"
              placeholder="Sted"
              value={tenant.postalAddress}
            />
          </Box>
        </Flex>
        <Field
          label="Evnt. org.nummer"
          name="vatNumber"
          placeholder="NO 123 456 789 MVA"
          value={tenant.vatNumber}
        />
        <Field
          label="Kontakt e-post"
          name="email"
          placeholder="epostadresse@post.no"
          value={tenant.email}
        />
      </Box>
      <Heading>Angrerettskjema</Heading>
      <Text sx={{ mb: 3 }}>
        Angrerettsskjemaet vil etter opplastning bli vedlagt med
        ordrebekreftelsen til kunden. Husk å legg inn din virksomhets
        informasjon på skjemaet. Du kan laste ned standard norsk
        angrerettsskjema og fylle inn dine detaljer. Les mer om kundens
        rettigheter og angrerettsskjema.
      </Text>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Field
          label="Last opp"
          name="angrerettskjema"
          value={tenant.angrerettskjema}
        />
      </Box>
      <Heading>Sosiale Medier</Heading>
      <Text sx={{ mb: 3 }}>
        Denne informasjonen vises i footer i nettbutikken.
      </Text>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Field label="Facebook" name="facebook" value={tenant.facebook} />
        <Field label="Twitter" name="twitter" value={tenant.twitter} />
        <Field label="Google +" name="googlePlus" value={tenant.googlePlus} />
        <Field label="Instagram" name="instagram" value={tenant.instagram} />
        <Field label="LinkedIn" name="linkedin" value={tenant.linkedin} />
      </Box>
      <Heading>Google Analytics</Heading>
      <Text sx={{ mb: 3 }}>
        Koble nettbutikken din opp mot Google Analytics.
      </Text>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Field
          label="Tracking-ID"
          name="trackingId"
          value={tenant.trackingId}
        />
      </Box>
    </Box>
    <Box sx={{ border: '1px solid', m: 5, p: 5, borderColor: 'error' }}>
      <Heading sx={{ fontWeight: 'normal', mb: 4 }}>FARESONEN</Heading>
      <Flex>
        <Box sx={{ flex: 1 }}>
          <Heading as="h4" sx={{ fontWeight: 'normal' }}>
            Deaktivér nettbutikken
          </Heading>
          <Text sx={{ mb: 3, color: 'muted' }}>
            Dersom du deaktiverer nettbutikken vil den skjules, men kostnadene
            fortsetter å løpe.
          </Text>
          <Button
            variant="outline"
            sx={{
              boxShadow:
                'inset 0 0 0 3px var(--theme-ui-colors-error, #E03B54)',
            }}
          >
            Deaktivér nettbutikken
          </Button>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Heading as="h4" sx={{ fontWeight: 'normal' }}>
            Overfør nettbutikken
          </Heading>
          <Text sx={{ mb: 3, color: 'muted' }}>
            Ønsker du å overføre nettbutikken til en annen person? Dette kan du
            gjøre under.
          </Text>
          <Button
            variant="outline"
            sx={{
              boxShadow:
                'inset 0 0 0 3px var(--theme-ui-colors-error, #E03B54)',
            }}
          >
            Overfør nettbutikken
          </Button>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Heading as="h4" sx={{ fontWeight: 'normal' }}>
            Slett min nettbutikk
          </Heading>
          <Text sx={{ mb: 3, color: 'muted' }}>
            Dersom du sletter nettbutikken din fjernes alt innhold og historikk,
            og nettbutikken slettes.
          </Text>
          <Button
            sx={{
              bg: 'red',
            }}
          >
            Slett min nettbutikk
          </Button>
        </Box>
      </Flex>
    </Box>
  </Layout>
);

export default GenericSettings;
