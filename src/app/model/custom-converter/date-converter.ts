import { ICustomConverter } from '../../my-json-typescript-mapper';

const dateCustomConverter: ICustomConverter = {

	fromJson(data: any): any {
		if (data === null || data === undefined) {
			return undefined;
		}
		if (typeof (data) === 'string') {
			return new Date(data);
		} else {
			throw new Error('Not a valid type for number conversion' + data);
		}
	},

	toJson(data: any): any {
		if (data === null || data === undefined) {
			return undefined;
		}
		if (data instanceof Date) {
			return data.toISOString();
		} else {
			throw new Error('Not a valid type for number conversion' + data);
		}
	}
};

export default dateCustomConverter;

