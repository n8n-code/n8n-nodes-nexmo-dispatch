import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class NexmoDispatch implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'nexmo-dispatch',
		name: 'N8nDevNexmoDispatch',
		icon: { light: 'file:./nexmo-dispatch.svg', dark: 'file:./nexmo-dispatch.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Dispatch API enables the developer to specify a multiple message workflow. A workflow follows a template. The first one we are adding is the failover template. The failover template instructs t..',
		defaults: { name: 'nexmo-dispatch' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNexmoDispatchApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
