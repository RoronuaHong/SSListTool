# from django.shortcuts import render, HttpResponse

# # Create your views here.
# def index(req):
#     print('请求处理中...')

#     return render(req, 'index.html')

# def blog(req, id):
#     return HttpResponse('id是' + str(id) + '的博客页面')

# def blog2(req, id):
#     return HttpResponse('id是' + str(id) + '的博客页面')


# views.py

from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse, HttpResponse


class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')

    def post(self, request, *args, **kwargs):
        # 处理POST请求
        data = {"message": "Hello from Django!"}
        print(data)
        return JsonResponse(data)
    

# django 5默认模板
def index(req):
    return render(req, 'http.html')

# get请求测试
def get_test(req):
    print(req.method)

    print(req.GET.get('name'))
    print(req.GET.get('pwd'))

    return HttpResponse('http get ok')

# get请求测试
def post_test(req):
    print(req.method)

    print(req.POST.get('name'))
    print(req.POST.get('pwd'))

    return HttpResponse('http post ok')
