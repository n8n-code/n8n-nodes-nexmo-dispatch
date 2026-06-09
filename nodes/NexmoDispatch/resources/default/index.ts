import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Create Workflow",
					"value": "Create Workflow",
					"action": "Create a workflow",
					"description": "Create a workflow",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Workflow"
					]
				}
			}
		},
		{
			"displayName": "Template",
			"name": "template",
			"type": "options",
			"default": "failover",
			"description": "The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover",
			"options": [
				{
					"name": "Failover",
					"value": "failover"
				}
			],
			"routing": {
				"send": {
					"property": "template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Workflow"
					]
				}
			}
		},
		{
			"displayName": "Workflow",
			"name": "workflow",
			"type": "json",
			"default": "[\n  {\n    \"failover\": {\n      \"condition_status\": \"delivered\",\n      \"expiry_time\": 600\n    },\n    \"from\": {\n      \"id\": \"0123456789012345\",\n      \"number\": \"447700900000\",\n      \"type\": \"sms\"\n    },\n    \"message\": {\n      \"content\": {\n        \"audio\": {\n          \"url\": \"https://example.com/audio.mp3\"\n        },\n        \"file\": {\n          \"caption\": \"Additional text to accompany the image.\",\n          \"url\": \"https://example.com/file.zip\"\n        },\n        \"image\": {\n          \"caption\": \"Additional text to accompany the image.\",\n          \"url\": \"https://example.com/image.jpg\"\n        },\n        \"template\": {\n          \"name\": \"whatsapp:hsm:technology:vonage:verify\",\n          \"parameters\": [\n            {\n              \"default\": \"1234\"\n            }\n          ]\n        },\n        \"text\": \"Vonage Verification code: 64873. Valid for 10 minutes.\",\n        \"type\": \"text\",\n        \"video\": {\n          \"url\": \"https://example.com/video.mp4\"\n        }\n      },\n      \"messenger\": {\n        \"category\": \"message_tag\",\n        \"tag\": \"ticket_update\"\n      },\n      \"viber_service_msg\": {\n        \"category\": \"transaction\",\n        \"ttl\": 600\n      },\n      \"whatsapp\": {\n        \"locale\": \"en-GB\",\n        \"policy\": \"deterministic\"\n      }\n    },\n    \"to\": {\n      \"id\": \"0123456789012345\",\n      \"number\": \"447700900000\",\n      \"type\": \"sms\"\n    }\n  }\n]",
			"description": "Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs.",
			"routing": {
				"send": {
					"property": "workflow",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Workflow"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Workflow"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for basicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Workflow"
					]
				}
			}
		},
];
