import { Box, Button, Flex, Label } from '@theme-ui/components';
import { Form, Formik } from 'formik';
import React from 'react';
import { FormField } from '../../components/common/FormField';
import { FormCheckbox } from '../../components/common/FormCheckbox';
import {
  DeliveryMethodCreateInput,
  DeliveryMethodStatus,
  DeliveryMethodUpdateInput,
  GetDeliveryMethodsDocument,
  useCreateDeliveryMethodMutation,
  useUpdateDeliveryMethodMutation,
} from '../../generated/graphql';
import { DeliveryMethodItem } from './ShippingSettings';
import * as DineroHelper from '../../helpers';
import { FormSelect } from '../../components/common/FormSelect';
import * as Yup from 'yup';

const DeliveryMethodSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(255, 'Too Long!')
    .required('Required!'),
  price: Yup.number().required('Required!'),
  status: Yup.string().required('Required!'),
  digitalDelivery: Yup.bool(),
});

export const ShippingSettingsModalContent: React.FC<{
  currentDeliveryMethod: DeliveryMethodItem | null;
  tenantId: number | null | undefined;
  onRequestClose: () => void;
}> = ({ currentDeliveryMethod, onRequestClose, tenantId }) => {
  const [updateDeliveryMethod] = useUpdateDeliveryMethodMutation();
  const [createDeliveryMethod] = useCreateDeliveryMethodMutation();

  const update = async (
    currentDeliveryMethod: DeliveryMethodItem,
    input: DeliveryMethodUpdateInput
  ) => {
    await updateDeliveryMethod({
      variables: { id: currentDeliveryMethod.id, input },
      refetchQueries: [{ query: GetDeliveryMethodsDocument }],
    });
  };

  const create = async (input: DeliveryMethodCreateInput) => {
    if (tenantId != null) {
      await createDeliveryMethod({
        variables: { input: { ...input, tenantId } },
        refetchQueries: [{ query: GetDeliveryMethodsDocument }],
      });
    }
  };

  const onSubmit = async (input: DeliveryMethodUpdateInput) => {
    if (currentDeliveryMethod) {
      await update(currentDeliveryMethod, input);
    } else {
      await create(input as DeliveryMethodCreateInput);
    }

    onRequestClose();
  };
  return (
    <Formik
      initialValues={{
        name: currentDeliveryMethod?.name || '',
        price: DineroHelper.formatMoney(currentDeliveryMethod?.price) || '',
        status:
          currentDeliveryMethod?.status ||
          DeliveryMethodStatus.DeliveryMethodStatusUnspecified,
        digitalDelivery: currentDeliveryMethod?.digitalDelivery || false,
      }}
      validationSchema={DeliveryMethodSchema}
      onSubmit={async (values) => {
        const input = {
          name: values.name,
          price: DineroHelper.moneyFromString(String(values.price)),
          digitalDelivery: values.digitalDelivery,
          status: values.status,
        };
        onSubmit(input);
      }}
    >
      <Box sx={{ p: 5 }}>
        <Form>
          <Box sx={{ maxWidth: 820 }}>
            <Box sx={{ '>div': { mb: 3 } }}>
              <FormField
                name="name"
                label="Leveringsmetode"
                placeholder="Navn på leveringsmetoden"
              />
              <FormField
                name="price"
                type="number"
                label="Pris"
                placeholder="Leveringskostnad i kr."
              />
              <Flex sx={{ alignItems: 'center' }}>
                <Label htmlFor="" sx={{ width: 'auto', minWidth: '8.75rem' }}>
                  Status
                </Label>
                <Box sx={{ flex: 5, ml: 3 }}>
                  <FormSelect
                    name="status"
                    options={Object.values(DeliveryMethodStatus)}
                  />
                </Box>
              </Flex>

              <FormCheckbox name="digitalDelivery" label="Digital delivery" />
            </Box>
            <Box>
              <Button sx={{ mt: '50px', width: '130px' }} type="submit">
                Lagre
              </Button>
              <Button
                variant="outline"
                sx={{ ml: 3, width: '130px' }}
                onClick={onRequestClose}
              >
                Avbryt
              </Button>
            </Box>
          </Box>
        </Form>
      </Box>
    </Formik>
  );
};
