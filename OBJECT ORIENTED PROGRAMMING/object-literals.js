const user = {

    name : 'jhone',
    email: 'jhone123@gmail.com',
    signin: function(){
        console.log('user is signed in ')
    },
    signout(){
        console.log('user is signed out')
    }


}
console.log(user.name, user.email)




const usertwo = {

    name : 'same',
    email: 'same123@gmail.com',
    signin: function(){
        console.log('user is signed in ')
    },
    signout(){
        console.log('user is signed out')
    }


}
console.log(usertwo.name, usertwo.email)



const userthree = new user('oliver','oliver123@gmail.com')

