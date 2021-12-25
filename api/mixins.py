import datetime
from django.db.models.query import Q
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.views import APIView, Response

class ProjectAPIView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        try:
            super().get(request, *args, **kwargs)
        except Exception as e:
            return self.get_response(False, e.__str__(), {})
    def post(self, request, *args, **kwargs):
        try:
            super().post(request, *args, **kwargs)
        except Exception as e:
            return self.get_response(False, e.__str__(), {})
    def put(self, request, *args, **kwargs):
        try:
            super().put(request, *args, **kwargs)
        except Exception as e:
            return self.get_response(False, e.__str__(), {})
    def delete(self, request, *args, **kwargs):
        try:
            super().delete(request, *args, **kwargs)
        except Exception as e:
            return self.get_response(False, e.__str__(), {})
    def get_response(self, result, message, data={}):
        return Response ({'result': result, 'message': message, 'data': data})
    
class SearchMixin:
    '''
    The mixin that return filtered objects.
    ---
    For the mixin know, by which fields do
    filter, view should has two attrs:
    * `search_fields` - array of fields for filter by query string
    * `detail_search_fields` - array of fields for filter by query obj
    ---
    Use: `objects = self.get_objects(q)` where q is query string or object
    '''
    def get_objects(self, q):
        if not self.detail_search_fields:
            raise Exception("SearchOffers object has no attribute detail_search_fields")
        if not self.search_fields:
            raise Exception("SearchOffers object has no attribute search_fields")
        if q is None:
            return self.get_serializer(self.get_queryset(), many=True).data
        filters = Q()
        if isinstance(q, str):
            for field in self.search_fields:
                filters |= Q(**{f'{field}__contains': q})
        else:
            for field in self.detail_search_fields:
                filters &= Q(**{f'{field}__contains': q.get(field)})
        objects = self.get_queryset().filter(filters)
        return objects