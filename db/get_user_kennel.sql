select ui.user_id, ui.username, ui.email, ui.profile_pic, s.region_code, s.state_name, b.breed_name, b.working_variation, b.show_variation, ki.kennel_id, ki.kennel_name, ki.registered_dogs, ki.registry, ki.female_dogs, ki.male_dogs, ki.breed_tests, ki.user_bio from user_info ui
left join kennel_info ki on (ui.user_id = ki.user_id)
left join breeds b on (ki.breed_id = b.breed_id)
left join states s on (ki.state_id = s.state_id)
where ui.user_id = $1;