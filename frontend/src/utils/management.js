import { pushToLocalJSONAPI } from '../network/genericJSONRequest';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';

import messages from '../views/messages';

export const updateEntity = (endpoint, entity, payload, token, onSuccess, onFailure) =>
  pushToLocalJSONAPI(endpoint, JSON.stringify(payload), token, 'PATCH')
    .then(() => {
      toast.success(
        <FormattedMessage
          {...messages.entityInfoUpdationSuccess}
          values={{
            entity,
          }}
        />,
      );
      onSuccess && onSuccess();
    })
    .catch((error) => {
      toast.error(
        <FormattedMessage
          {...messages.entityInfoUpdationFailure}
          values={{
            entity,
          }}
        />,
      );
      onFailure && onFailure(error);
    });
