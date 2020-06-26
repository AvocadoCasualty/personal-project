update kennel_info set kennel_name= $2, state_id = $3, breed_id = $4, registered_dogs = $5, registry = $6, female_dogs = $7, male_dogs =$8, breed_tests=$9, user_bio =$10
where kennel_id = $1;