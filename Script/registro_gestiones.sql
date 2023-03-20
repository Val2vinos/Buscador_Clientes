select r.* from Request r
join RequestStatus re on r.RequestStatusId = re.Id
join Policy pol on r.PolicyId = pol.Id
join ProductService ps on r.ProductServiceId = ps.id
join Address a on r.AddressId = a.Id
join Person per on r.PersonId = per.Id
join ForecastType f on r.ForecastTypeId = f.Id
join ServiceType st on r.ServiceTypeId = st.Id
where r.id = '16E199DB-37B9-4A49-8B20-0000A90EAD76'


select re.Name,
pol.CertifiedFolio,
prod.Name,
s.Name,
r.[Order] 'num_orden',
a.Value 'direccion',
per.Name 'beneficiario',
f.Name 'prevision',
st.Name 'prestacion'
from Request r
join RequestStatus re on r.RequestStatusId = re.Id
join Policy pol on r.PolicyId = pol.Id
join ProductService ps on r.ProductServiceId = ps.id
join product prod on ps.ProductId = prod.Id
join Service s on ps.ServiceId = s.Id
join Address a on r.AddressId = a.Id
join Person per on r.PersonId = per.Id
join ForecastType f on r.ForecastTypeId = f.Id
join ServiceType st on r.ServiceTypeId = st.Id
where r.id = '16E199DB-37B9-4A49-8B20-0000A90EAD76'

select * from call c
join CallType ct on c.CallTypeId = ct.id
join CallReason cr on c.CallReasonId = cr.Id
