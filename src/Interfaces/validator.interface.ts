export interface ValidatorInterface {
	fields: {
		fieldName: string,
		errorWrapper : string,
		validator?: {
			notEmpty: { message: string },
			isSameWith? : {
				fieldToCompare: HTMLInputElement
				message: string
			}
			stringLength?: { min: number, max: number, message: string },
			regexp?: { regexp: RegExp | boolean, message: string },
		},
	}[]
}
