import firebase_admin
from firebase_admin import firestore
import time

# Application Default credentials are automatically created.
app = firebase_admin.initialize_app()
db = firestore.client()

def hello_firestore(event, context):
     """Triggered by a change to a Firestore document.
     Args:
          event (dict): Event payload.
          context (google.cloud.functions.Context): Metadata for the event.
     """
     resource_string = context.resource
     # print out the resource string that triggered the function
     print(f"Function triggered by change to: {resource_string}.")
     # now print out the entire event object
     userId = str(event['value']['fields']['userId']['stringValue'])
     text = str(event['value']['fields']['text']['stringValue'])

     print("userId:" + userId + '\n' + "text:" + text)

     timestamp = int(time.time()*1000)

     data = {
          u'displayName': u'Los Angeles',
          u'timestamp': timestamp,
          u'text': u'hi',
          u'photoURL': u'https://illust8.com/wp-content/uploads/2021/04/ai_image_12986-768x768.png',
     }

     # Add a new doc in collection 'cities' with ID 'LA'
     reply = db.collection(u'chatbot').document()

     # Set the new document
     reply.set(data)