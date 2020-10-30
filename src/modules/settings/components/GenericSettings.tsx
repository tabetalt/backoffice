import { Field, LabeledSelect, PrefilledInput } from '@tabetalt/kit';
import { TextPosition } from '@tabetalt/kit/build/components/Input/components/prefilled-input-props';
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

type GenericSettingsProps = any;

const GenericSettings: React.FC<GenericSettingsProps> = ({ tenant = {} }) => (
  <>
    <Box sx={{ maxWidth: 820 }}>
      <Heading sx={{ mb: '44px' }}>Butikkinformasjon</Heading>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Field
          label="Navn på butikken"
          placeholder="Butikknavn"
          name="title"
          value={tenant.title}
        />
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ flexGrow: 4 }}>
            <PrefilledInput
              label="Butikkens URL"
              name="url"
              prefilledText=".tabetalt.no"
              prefilledTextPosition={TextPosition.RIGHT}
              placeholder="butikknavnet"
              text={tenant.url}
            />
          </Box>
          <Button
            sx={{ ml: '12px', height: '45px', flexGrow: 1 }}
            variant="outline"
          >
            Legg til eget domene
          </Button>
        </Flex>
        <LabeledSelect label="Språk og valuta" name="lang">
          <option>Norsk</option>
        </LabeledSelect>
        <PrefilledInput
          label="MVA-sats"
          name="vatSats"
          prefilledText="%"
          prefilledTextPosition={TextPosition.RIGHT}
          placeholder="XX"
          text={tenant.vatSats}
        />
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
        </Flex>
      </Box>
      <Heading sx={{ mt: '60px' }}>Kontaktinformasjon</Heading>
      <Text sx={{ mb: 3, mt: '6px', color: '#9AA0B5' }}>
        Denne informasjonen vises i nettbutikken, samt på kvitteringer og
        ordrebekreftelser.
      </Text>
      <Box sx={{ '>div': { mb: 3, mt: 3 } }}>
        <Flex sx={{ alignItems: 'center', mt: '26px' }}>
          <Input placeholder="Hent fra Brønnøysund" value={tenant.name} />
          <Button
            sx={{ ml: '12px', width: '90px', height: '45px' }}
            variant="outline"
          >
            Søk
          </Button>
        </Flex>
        <Field
          label="Firmanavn"
          name="companyName"
          placeholder="Butikknavn"
          value={tenant.companyName}
        />
        <Field
          label="Gateadresse"
          name="companyAddress"
          placeholder="Adresse"
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
      <Heading sx={{ mt: '60px' }}>Angrerettskjema</Heading>
      <Text sx={{ mb: 3, mt: '6px', color: '#9AA0B5' }}>
        Angrerettsskjemaet vil etter opplastning bli vedlagt med
        ordrebekreftelsen til kunden. Husk å legg inn din virksomhets
        informasjon på skjemaet. Du kan laste ned standard norsk
        angrerettsskjema og fylle inn dine detaljer. Les mer om kundens
        rettigheter og angrerettsskjema.
      </Text>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ ml: '12px', height: '45px', flexGrow: 3 }}>
            <Field
              label="Last opp"
              name="angrerettskjema"
              value={tenant.angrerettskjema}
            />
          </Box>
          <Button sx={{ ml: '12px', height: '45px', flexGrow: 1 }}>
            Last opp
          </Button>
        </Flex>
      </Box>
      <Heading sx={{ mt: '45px' }}>Sosiale Medier</Heading>
      <Text sx={{ mb: 3, mt: '6px', color: '#9AA0B5' }}>
        Denne informasjonen vises i footer i nettbutikken.
      </Text>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Field
          label="Facebook"
          name="facebook"
          placeholder="Din Facebook-side"
          value={tenant.facebook}
        />
        <Field
          label="Twitter"
          name="twitter"
          placeholder="Twitter konto"
          value={tenant.twitter}
        />
        <Field
          label="Google +"
          name="googlePlus"
          placeholder="Din Google+ side ID"
          value={tenant.googlePlus}
        />
        <Field
          label="Instagram"
          name="instagram"
          placeholder="Din Instagram konto"
          value={tenant.instagram}
        />
        <Field
          label="LinkedIn"
          name="linkedin"
          placeholder="Din LinkedIn konto"
          value={tenant.linkedin}
        />
      </Box>
      <Heading sx={{ mt: '51px' }}>Google Analytics</Heading>
      <Text sx={{ mb: 3, mt: '6px', color: '#9AA0B5' }}>
        Koble nettbutikken din opp mot Google Analytics.
      </Text>
      <Box sx={{ '>div': { mb: 3 } }}>
        <Field
          label="Tracking-ID"
          name="trackingId"
          placeholder="Butikknavn"
          value={tenant.trackingId}
        />
      </Box>
    </Box>
    <Box sx={{ border: '1px solid', p: 5, borderColor: 'error' }}>
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
  </>
);

export default GenericSettings;
