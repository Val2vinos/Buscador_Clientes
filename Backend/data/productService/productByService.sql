select sp.name 'sponsor',prod.name 'producto',s.name 'servicio', ps.Quantity,0 util, coalesce(ps.[top],'Sin Tope') 'Tope'
from product prod
join ProductService ps on prod.id = ps.ProductId
join service s on ps.ServiceId = s.Id
join sponsor sp on prod.SponsorId = sp.Id
where prod.code = @code
and s.isdeleted = 0
and sp.name = @sponsor