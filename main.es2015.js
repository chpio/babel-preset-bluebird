import promiseToBluebird from 'babel-plugin-transform-promise-to-bluebird';
import asyncToBluebird from 'babel-plugin-transform-async-to-bluebird';

export const plugins = [
	promiseToBluebird,
	asyncToBluebird,
];
