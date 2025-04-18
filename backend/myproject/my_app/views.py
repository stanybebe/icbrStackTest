from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Message
from .serializers import MessageSerializer
# @csrf_exempt
@api_view(['GET', 'POST'])
def latest_message(request):
    latest = Message.objects.last()
    if latest:
        serializer = MessageSerializer(latest)
        return Response(serializer.data)
    return Response({"detail": "No messages found."}, status=404)
    
@api_view(['GET', 'POST'])
def message_list(request):
    if request.method == 'GET':
        # Handle GET request to retrieve the message
        messages = Message.objects.all()  # You can filter this if needed
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        # Handle POST request to create a new message
        serializer = MessageSerializer(data=request.data)  # Assuming request.data will be provided
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)