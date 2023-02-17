--productos, polizas por rut
select per.rut,per.Name,s.name 'Sponsor',prod.code,prod.name 'producto',pol.CertifiedFolio,pol.ContractDate,pol.ExpirationDate,pol.IsDeleted
from person per
join policy pol on pol.PersonId = per.Id
join sponsor s on pol.SponsorId = s.Id
join Product prod on pol.productid = prod.id
where per.rut = '88709101'


--servicios por producto- servicio vigente
select sp.name,prod.name,s.name, ps.Quantity,0 util, ps.[top] 'Tope'
from product prod
join ProductService ps on prod.id = ps.ProductId
join service s on ps.ServiceId = s.Id
join sponsor sp on prod.SponsorId = sp.Id
where prod.name = 'CLINICA DOMICILIARIA'
and s.isdeleted = 0
and sp.name = 'la polar'

--rut con mas polizas (sobre 4)
select per.rut,count(pol.certifiedfolio)
from policy pol
join person per on pol.PersonId = per.id
group by per.rut
having count(pol.certifiedfolio) > 4


--Detalle de servicios por producto
select per.rut,per.Name,s.name 'Sponsor',prod.code,prod.name 'producto',pol.CertifiedFolio,pol.ContractDate,pol.ExpirationDate,
pol.IsDeleted,ser.Name,ps.Quantity,ps.[Top],ser.isdeleted
from person per
join policy pol on pol.PersonId = per.Id
join sponsor s on pol.SponsorId = s.Id
join Product prod on pol.productid = prod.id
join ProductService ps on prod.id = ps.ProductId
join service ser on ps.ServiceId = ser.id
where per.rut = '88709101'
and prod.code = '8SA2'
and pol.CertifiedFolio = '630389'
and ser.IsDeleted = 0