//Pure Function Rule B:
//pure funciton means the function should return new Object every time when we change the property of the object-Immuablity.

//this function is impure function :
// function updateProfile(profile, city) {
//     //update logic
//     profile.city = city
//     return profile;
// }

//function must return new Object every time: immutablity.
//there are various ways to create immutable object
//way 1: plain javascript pattern
// function updateProfile(profile, city) {
//     //return new Object
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }

// //way 2: Object.assign pattern
// function updateProfile(profile, city) {
//     //return new Object
//     return Object.assign({}, profile, { city: city })
// }

//way 3: ES 7 Spread notation pattern
function updateProfile(profile, city) {
    //return new Object
    return { ...profile, city: city }
}


const profile = {
    id: 1,
    name: 'Subramaian',
    city: 'New York'
}
console.log('Before update', profile)
const updatedProfile = updateProfile(profile, 'London')
//To test whether object is immutable or not 
console.log(profile === updatedProfile ? "Same object" : "Different Object")
console.log('After update', updatedProfile)
