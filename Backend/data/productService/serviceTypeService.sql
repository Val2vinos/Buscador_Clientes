select st.id,st.name from service s
join servicetypeservice sts on sts.serviceid = s.id
join ServiceType st on sts.ServiceTypeId = st.Id
where s.id = @serviceid
and s.isdeleted = 0
and st.IsDeleted = 0