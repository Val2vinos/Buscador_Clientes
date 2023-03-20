select c.id,c.name 
from City c
join region r on c.RegionId = r.id
where r.Code = @region
order by c.name