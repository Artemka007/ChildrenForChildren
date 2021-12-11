from django.db.models.query import Q

class SearchMixin:
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