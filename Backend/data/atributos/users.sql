select u.id,u.NormalizedUserName name from abpusers u
join AbpUserRoles ur on ur.UserId = u.Id
join AbpRoles r on ur.RoleId = r.Id
where r.DisplayName = 'TO OPERACIONES'
and u.IsActive = 1
order by NormalizedUserName