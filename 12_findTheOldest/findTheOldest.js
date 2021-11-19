const findTheOldest = function(people) {

    let peopleAges = [];
    let currentAge = 0;
    let oldest = 0;
    let d = new Date();

    for (let i = 0; i < people.length; ++i)
    {
        if (!people[i].yearOfDeath)
        {
            currentAge = d.getFullYear() - people[i].yearOfBirth;
            peopleAges.push(currentAge);

            if (peopleAges[oldest] < currentAge)
            {
                oldest = i;
            }
        }

        else
        {
            currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
            peopleAges.push(currentAge);

            if (peopleAges[oldest] < currentAge)
            {
                oldest = i;
            }
        }
    }

    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
