select * from user_info ui
left join kennel_info ki on (ui.user_id = ki.user_id)
left join breeds b on (ki.breed_id = b.breed_id)
left join states s on (ki.state_id = s.state_id);
--where ui.user_id = $1;