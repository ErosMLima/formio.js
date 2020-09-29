import * as dayjs from 'dayjs';

import { Transformer } from './Transformer';

export class SetDateToEndOfComponentTransformer extends Transformer {
  static get title() {
    return 'Set Date To End of Component';
  }

  static get name() {
    return 'setDateToEndOfComponent';
  }

  static get arguments() {
    return [
      {
        name: 'Unit',
        key: 'unit',
        required: true,
      },
    ];
  }

  transform(value, args) {
    const {
      unit,
    } = args;

    return dayjs(value).endOf(unit);
  }
}