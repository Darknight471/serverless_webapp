import boto3
import json

def lambda_handler(event, context):

  dynamodb = boto3.resource('dynamodb')

  showtable = dynamodb.Table('HelloWorldDatabase')

   

  response = showtable.scan()

   

  return {

    'statusCode': 200,

    'body': response['Items']

  }
