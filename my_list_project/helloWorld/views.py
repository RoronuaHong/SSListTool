from django.shortcuts import render

# Create your views here.
def index(request):
    print('请求处理中...')

    return render(request, 'index.html')
