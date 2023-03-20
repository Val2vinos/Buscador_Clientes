select code,convert(varchar,code) + '-' + convert(varchar,name) name
from region
order by Code