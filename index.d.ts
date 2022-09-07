export default function arrify<ValueType>(
	value: ValueType
): ValueType extends (null | undefined)
	? []
	: ValueType extends readonly unknown[]
	? ValueType
	: ValueType extends string
	? [string]
	: ValueType extends Iterable<infer T>
	? T[]
	: [ValueType]
