import { Field, OptionView, Switch } from '@tabetalt/kit';
import React from 'react';
import { Box, Flex, Heading, Text } from 'theme-ui';

type LayoutSettingsProps = any;

// TODO: add list component of option views
// TODO: add children components for option view. Do it need to be in kti project?
// TODO: make methods optionally
const LayoutSettings: React.FC<LayoutSettingsProps> = ({ tenant = {} }) => {
  const handleThemeChoose = (
    event: React.FormEvent<Element>,
    done: () => void
  ) => {
    done();
  };
  const handleFontChoose = (
    event: React.FormEvent<Element>,
    done: () => void
  ) => {
    done();
  };
  const handleColorChoose = (
    event: React.FormEvent<Element>,
    done: () => void
  ) => {
    done();
  };

  const handleThemePreview = (event: React.FormEvent<Element>) => {
    console.log(event);
  };
  const handleFontPreview = (event: React.FormEvent<Element>) => {
    console.log(event);
  };
  const handleColorPreview = (event: React.FormEvent<Element>) => {
    console.log(event);
  };
  return (
    <>
      <Box sx={{ maxWidth: 820 }}>
        <Heading sx={{ mb: '44px' }}>Logo og favicon</Heading>
        <Box sx={{ '>div': { mb: '80px' } }}>
          <Flex>
            <Text sx={{ mr: '107px' }}>Logo</Text>
            <Text sx={{ color: '#9AA0B5' }}>
              Logo mangler, ditt butikknavn vil bli benyttet i stedet.
            </Text>
          </Flex>
        </Box>
        <Heading sx={{ mb: '40px' }}>Visningsvalg</Heading>
        <Box sx={{ '>div': { mb: 3 } }}>
          <Field
            as={Switch}
            label="Menyvisning"
            name="menuDisplay"
            value={tenant.menuDisplay}
          />
          <Field
            as={Switch}
            label="Produktsøk"
            name="productSearch"
            value={tenant.productSearch}
          />
          <Field
            as={Switch}
            label="Produktsortering"
            name="productSort"
            value={tenant.productSort}
          />
          <Field
            as={Switch}
            label="Produktfiltrering"
            name="productFiltration"
            value={tenant.productFiltration}
          />
        </Box>
        <Heading sx={{ mt: '60px' }}>Tema</Heading>
        <Text sx={{ mb: 3, mt: '6px', color: '#9AA0B5' }}>
          Her kan du velge tema for din nettbutikk.
        </Text>
        <Flex>
          <OptionView
            completedText="Valgt"
            contentName="Fonts"
            loadingText="Bruk"
            onPreviewClick={handleThemePreview}
            onSelectClick={handleThemeChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
          <OptionView
            completedText="Valgt"
            contentName="Fonts"
            loadingText="Bruk"
            onPreviewClick={handleThemePreview}
            onSelectClick={handleThemeChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
          <OptionView
            completedText="Valgt"
            contentName="Fonts"
            loadingText="Bruk"
            onPreviewClick={handleThemePreview}
            onSelectClick={handleThemeChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
        </Flex>
        <Heading sx={{ mt: '80px' }}>Fonter</Heading>
        <Text sx={{ mb: 3, mt: '6px', color: '#9AA0B5' }}>
          Her kan du bytte fonter. Dette påvirker ikke valgt tema.
        </Text>
        <Flex>
          <OptionView
            completedText="Valgt"
            contentName="IBM Plex Sans + IBM Plex Serif"
            loadingText="Bruk"
            onPreviewClick={handleFontPreview}
            onSelectClick={handleFontChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
          <OptionView
            completedText="Valgt"
            contentName="IBM Plex Sans + IBM Plex Serif"
            loadingText="Bruk"
            onPreviewClick={handleFontPreview}
            onSelectClick={handleFontChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
          <OptionView
            completedText="Valgt"
            contentName="Work Sans + Roboto"
            loadingText="Bruk"
            onPreviewClick={handleFontPreview}
            onSelectClick={handleFontChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
        </Flex>
        <Heading sx={{ mt: '80px' }}>Farger</Heading>
        <Text sx={{ mb: 3, mt: '6px', color: '#9AA0B5' }}>
          Her kan du bytte farger. Dette påvirker ikke valgt tema.
        </Text>
        <Flex>
          <OptionView
            completedText="Valgt"
            contentName=""
            loadingText="Bruk"
            onPreviewClick={handleColorPreview}
            onSelectClick={handleColorChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
          <OptionView
            completedText="Valgt"
            contentName=""
            loadingText="Bruk"
            onPreviewClick={handleColorPreview}
            onSelectClick={handleColorChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
          <OptionView
            completedText="Valgt"
            contentName=""
            loadingText="Bruk"
            onPreviewClick={handleColorPreview}
            onSelectClick={handleColorChoose}
            previewText="Forhåndsvis"
          >
            <></>
          </OptionView>
        </Flex>
      </Box>
    </>
  );
};

export default LayoutSettings;
