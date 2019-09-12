import { ICustomConverter } from '../../my-json-typescript-mapper';

const numberCustomConverter: ICustomConverter = {

	fromJson(data: any): any {
		if (data === null || data === undefined) {
			return undefined;
		}
		if (typeof (data) === 'string') {
			return Number(data);
		} else if (typeof (data) === 'number') {
			return data;
		} else {
			throw new Error('Not a valid type for number conversion' + data);
		}
	},

	toJson(data: any): any {
		if (data === null || data === undefined) {
			return undefined;
		}
		if (typeof (data) === 'string') {
			return data;
		} else if (typeof (data) === 'number') {
			return String(data);
		} else {
			throw new Error('Not a valid type for number conversion' + data);
		}
	}
};

export default numberCustomConverter;

