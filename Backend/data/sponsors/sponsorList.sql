-- SELECT id,name FROM SPONSOR
select sp.name 'sponsor',prod.name 'producto',s.name 'servicio', ps.Quantity, ps.[top] 'tope'
from product prod
join ProductService ps on prod.id = ps.ProductId
join service s on ps.ServiceId = s.Id
join sponsor sp on prod.SponsorId = sp.Id
where prod.name = 'CLINICA DOMICILIARIA'
and s.isdeleted = 0
and sp.name = 'la polar'