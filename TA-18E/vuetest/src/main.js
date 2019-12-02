require("./index.html");
import Vue from 'vue';

import Box from "./Box.vue";

let app = new Vue({
    el: '#app',
    data: {
        /* DONELIST STUFF
        message: "Hello Vue",
        errorMessage: "",
        list: [
            {name:"Item 1", isDone: false, uid: 0},
            {name:"Item 2", isDone: true, uid: 1},
            {name:"Item 3", isDone: false, uid: 2},
        ],
        fname: "",
        lname: "",
        */
    },
    methods: {
        /* DONELIST STUFF
        addToList() {
            if (this.message != ""){
                this.list.push({
                    name: this.message,
                     isDone: false,
                      uid: this.list.length
                    });
                this.message = "";
                this.errorMessage = "";
            }
            else {
                this.errorMessage = "Text can't be empty.";
            }
        }
        */
    },
    computed: {
        /* DONELIST STUFF
        doneList(){
            return this.list.filter(el => el.isDone);
        },

        notDoneList(){
            return this.list.filter(el => !el.isDone);
        }
        */
    }
});

/* DONELIST HTML IN #APP
            <input type="text" v-model="message"> <!--DYNAMIC FIELD-->
            <button v-on:click="addToList()">Add</button>
            <br>
            {{message}}
            <br>
            {{errorMessage}}
            <br>

            <h2>All Items</h2>
            <ul>
                <li v-for="(el, index) in list" :key="'list' + el.uid"> <!--FOR LOOP IN VUE-->
                    <input type="checkbox" v-model="el.isDone">
                    {{el.name}}
                </li>
            </ul>

            <h2>Done Items</h2>
            <ul>
                <li v-for="(el, index) in doneList" :key="'doneList' + el.uid"> <!--FOR LOOP IN VUE-->
                    <input type="checkbox" v-model="el.isDone">
                    {{el.name}}
                </li>
            </ul>

            <h2>Not Done Items</h2>
            <ul>
                <li v-for="(el, index) in notDoneList" :key="'notDoneList' + el.uid"> <!--FOR LOOP IN VUE-->
                    <input type="checkbox" v-model="el.isDone">
                    {{el.name}}
                </li>
            </ul>
*/