from django.utils.deprecation import MiddlewareMixin

class Md1(MiddlewareMixin):
    def process_request(self, request):
        print('request请求来了')

    def process_response(self, request, response):
        print('请求处理完毕, 将返回页面')

        return response
