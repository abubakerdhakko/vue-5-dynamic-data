Vue.component("v-select", VueSelect.VueSelect);

const app = new Vue({
  el: "#app",
  data: {
    editFriend: null,
    friends: [],
    addFriend: false
  },
  methods: {
    //     deleteFriend(id, i) {
    //         fetch("https://jsonplaceholder.typicode.com/todos" + id, {
    //                 method: "DELETE"
    //             })
    //             .then(() => {
    //                 this.friends.splice(i, 1)
    //                 console.log('deleted')
    //             })
    //     },
    //     updateFriend(friend) {
    //         fetch("https://jsonplaceholder.typicode.com/todos" + friend.id, {
    //                 body: JSON.stringify(friend),
    //                 method: "PUT",
    //                 headers: {
    //                     "content/type": "applicstion/json",
    //                 },
    //             })
    //             .then(() => {
    //                 this.editFriend = null;
    //                 console.log('data updated')
    //             })
    //     },
    //     insertFriend(friend) {
    //         fetch("https://jsonplaceholder.typicode.com/todos/" + friend, {
    //                 body: JSON.stringify(friend),
    //                 method: "POST",
    //                 headers: {
    //                     "content/type": "applicstion/json",
    //                 },
    //             })
    //             .then(() => {
    //                 // this.editFriend = null;
    //                 alert('data added')
    //                 console.log('data updated')
    //                 addFriend = false
    //             })
    //     }
    getdata: function() {
      fetch("https://jsonplaceholder.typicode.com/todos/5")
        .then(response => response.json())
        .then(data => {
          this.friends = data;
          alert("kkkk");
        });
    }
  },
  mounted() {
    getdata();
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // alert('kkkk')
  },

  template: `
    <div>
    <ul >
    <v-select :getdata="getdata"></v-select>
    <li v-for="friend in friends">>{{friend.title}}</li>
    </ul>
    </div>
    `
});
