from django.db.models.query import Q
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.views import APIView

class ProjectAPIView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        super().get(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        super().post(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        super().put(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        super().delete(request, *args, **kwargs)
    
    def get_response(self):
        pass
    
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
        return self.get_serializer(objects, many=True).data