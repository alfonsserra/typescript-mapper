import { ICustomConverter } from '../../my-json-typescript-mapper';

const booleanCustomConverter: ICustomConverter = {

  fromJson(data: any): any {
    if (data === null || data === undefined) {
      return undefined;
    }
    if (typeof (data) === 'string') {
      if ('Y' === data) {
        return true;
      } else if ('N' === data || '' === data) {
        return false;
      } else {
        throw new Error('Not a valid type for boolean conversion ' + data);
      }
    } else {
      throw new Error('Not a valid type for boolean conversion ' + data);
    }
  },
  toJson(data: any): any {
    if (data === null || data === undefined) {
      return undefined;
    }
    if (typeof (data) === 'boolean') {
      if (data === true) {
        return 'Y';
      } else {
        return 'N';
      }
    } else {
      throw new Error('Not a valid type for boolean conversion ' + data);
    }
  }
};

export default booleanCustomConverter;

