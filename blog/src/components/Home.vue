<!-- <template>
  <div>
    <h1 class="home">Email: {{ email }}</h1>
    <h1 class="home">Mobile: {{ mobileNo }}</h1>
    <h1 class="home">Mobile: {{ mobileNo === 45 }}</h1>
    <h2 class="home">Name: {{ getName() }}</h2>
    <h2 class="home">Name: {{ getName("Ashraf ali") }}</h2>
    <h2 class="home">Name: {{ getName2("Ashraf1") }}</h2>
    <h2 class="home">Name2: {{ getName2("Ali") }}</h2>
    <h2 class="home">Data: {{ getData() }}</h2>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      email: "ali@gmail.com",
      mobileNo: 45,
      getName: function (data) {
        return data;
      },
    };
  },
  methods: {
    getName2(val) {
      return val;
    },
    getData() {
      return {
        name: "Ashraf ali",
        email: this.email,
        name2: this.getName("kakozai"),
      };
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video 9 -->
<!-- <template>
  <div>
    <h1 v-on:mousemove="getConsole()">Home Component</h1>
    <button v-on:click="getData('Button 1 Click')">Click me</button>
    <button v-on:click="getData()">Click me</button>
    <button v-on:dblclick="getData('Button double Click')">Click me</button>
    <h2>{{ count }}</h2>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getData() {
      this.count += 1;
    },
    getConsole() {
      console.warn("function Called");
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-10 -->
<!-- <template>
  <div>
    <h1>Two way Binding</h1>
    <input type="text" v-model="count" />
    <h2>{{ count }}</h2>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      count: 10,
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-11 -->
<!-- <template>
  <div>
    <h1>Two input Fields</h1>
    <input type="text" placeholder="Enter Email" v-model="email" /><br /><br />
    <input
      type="password"
      placeholder="Enter Password"
      v-model="password"
    /><br /><br />
    <input type="text" v-model="count" />
    <h2>{{ count }}</h2>
    <button v-on:click="getData()" type="button">Get Values</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
    getData() {
      console.log("Function Called", this.email, this.password);
    },
  },
  data() {
    return {
      email: null,
      password: null,
      count: 0,
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-12 -->
<!-- <template>
  <div>
    <h1>CheckBox Radio Button</h1>
    <h3>Technology</h3>
    <label for="java">Java</label>
    <input type="checkbox" value="java" v-model="technology" id="java" />
    <label for="php">Php</label>
    <input type="checkbox" value="php" v-model="technology" id="php" />
    <label for="node">Node</label>
    <input type="checkbox" value="node" v-model="technology" id="node" />
    <br />
    <br />
    <h3>Who I am</h3>
    <label for="student">Student</label>
    <input type="radio" name="who" v-model="who" value="student" id="student" />
    <label for="developer">Developer</label>
    <input
      type="radio"
      name="who"
      v-model="who"
      value="developer"
      id="developer"
    />
    <br />
    <br />
    <h4>Selected Technology:{{ technology }}</h4>
    <h4>I am a {{ who }}</h4>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      technology: [],
      who: null,
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-13 -->
<!-- <template>
  <div>
    <h1 v-if="show">if Condition</h1>
    <h1 v-else>else Condition</h1>
    <button v-on:click="show = !show">Toggle</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-14 -->
<!-- <template>
  <div>
    <h1>For Loop in Vue js</h1>
    <h3>Technology</h3>
    <ul>
      <li v-for="item in technology" :key="item">{{ item }}</li>
    </ul>
    <h3>Users</h3>
    <ul>
      <li v-for="(item, index) in users" :key="index">
        Name is :{{ item.name }} and email is : {{ item.email }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      technology: ["java", "html", "javascript", "css"],
      users: [
        { name: "Usman", email: "usman@gmail.com", phoneNo: "03333894553" },
        { name: "Ashraf", email: "ashraf@gmail.com", phoneNo: "03333894552" },
        {
          name: "Abdul Rehman",
          email: "abdul@gmail.com",
          phoneNo: "03333894550",
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-15 -->
<!-- <template>
  <div>
    <h1>Pass Data to child Component</h1>
    <Child
      name="I am a Child Component Name is Sitemgar"
      :userDetails="user"
      :getDataFuc="getData"
    />
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  name: "Home",
  components: {
    Child,
  },
  data() {
    return {
      user: { name: "Ashraf", email: "ali@gmail.com" },
    };
  },
  methods: {
    getData() {
      console.log("Parent function Called");
      alert("Parent function Called");
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-16 -->
<!-- <template>
  <div>
    <h1>Reuse Component</h1>
    <ul>
      <li v-for="item in users" :key="item.name">
        <User :data="item" :getData="getData" />
        {{ item.name }} {{ item.email }}
      </li>
    </ul>
  </div>
</template>
<script>
import User from "./User.vue";
export default {
  name: "Home",
  components: {
    User,
  },
  methods: {
    getData(item) {
      alert(item);
    },
  },
  data() {
    return {
      users: [
        { name: "Ashraf", email: "ali@gmail.com" },
        { name: "Usman", email: "usman@gmail.com" },
        { name: "AbdulRehman", email: "abdul@gmail.com" },
        { name: "Shabaz", email: "shabaz@gmail.com" },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-17 -->
<!-- <template>
  <div>
    <h1>Html Binding</h1>
    <h1>{{ text }}</h1>
    <h1>{{ tag }}</h1>
    <div v-html="tag"></div>
    <div v-html="tag1"></div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      text: "Ashraf ali",
      tag: "<h1>Kakozai and Arambai</h1>",
      tag1: "<h1>Email: ali@gmail.com</h1>",
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-18 -->
<!-- <template>
  <div>
    <h1>Css Class Binding</h1>
    <h2 :class="applyStyle">Home Component</h2>
    <button v-on:click="colorfull = !colorfull">Apply style</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      colorfull: true,
    };
  },
  computed: {
    applyStyle() {
      return {
        green: this.colorfull,
        err: true,
        other: true,
      };
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
.green {
  background-color: green;
  width: 200px;
  padding: 10px;
}
.err {
  color: red;
}
.other {
  font-size: 50px;
}
</style> -->

<!-- video-19 -->
<!-- <template>
  <div>
    <h1>Props</h1>
    <Student :name="name" />
    <Teacher name="Ali" />
  </div>
</template>
<script>
import Student from "./Student.vue";
import Teacher from "./Teacher.vue";
export default {
  name: "Home",
  data() {
    return {
      name: "Kakozai",
    };
  },
  components: {
    Student,
    Teacher,
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-20 -->
<!-- <template>
  <div>
    <h1>Props from Child to Parent</h1>
    <h2>This Data form Child:{{ userName }}</h2>
    <User1 :nameHandler="getUserName" />
  </div>
</template>
<script>
import User1 from "./User1.vue";
export default {
  name: "Home",
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    getUserName(val) {
      this.userName = val;
    },
  },
  components: {
    User1,
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-21 -->
<!-- <template>
  <div>
    <h1>Ref in Vue js</h1>
    <input type="text" ref="input" />
    <button v-on:click="getData">Click me</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
    getData() {
      this.$refs.input.focus();
      this.$refs.input.style.color = "red";
      console.log(this.$refs.input.value);
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-22-23-24 -->
<!-- <template>
  <div>
    <h1>Simple Form</h1>
    <ul>
      <li v-for="item in error" v-bind:key="item">{{ item }} is Invalid</li>
    </ul>
    <form>
      <label>Email:</label>
      <input type="text" placeholder="Enter Email ..." v-model="form.email" />
      <br /><br />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Enter Password ..."
        v-model="form.password"
      />
      <br /><br />
      <select v-model="form.country">
        Select Country
        <option>Pakistan</option>
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
      </select>
      <br /><br />
      <h3>Technology</h3>
      <label>Java:</label>
      <input type="checkbox" value="Java" v-model="form.technology" /><br />
      <label>Javascript:</label>
      <input
        type="checkbox"
        value="Javascript"
        v-model="form.technology"
      /><br />
      <label>HTML:</label>
      <input type="checkbox" value="HTML" v-model="form.technology" /><br />
      <label>CSS:</label>
      <input type="checkbox" value="CSS" v-model="form.technology" /><br />
      <h3>Gender</h3>
      <label>Male:</label>
      <input
        type="radio"
        name="gender"
        value="Male"
        v-model="form.gender"
      /><br />
      <label>Female:</label>
      <input
        type="radio"
        name="gender"
        value="Female"
        v-model="form.gender"
      /><br />
      <button v-on:click="login" type="button">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      form: {
        email: "",
        password: "",
        country: "",
        technology: [],
        gender: "",
      },
      error: [],
    };
  },
  methods: {
    login() {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
      }
      if (this.error.length === 0) {
        alert("data submitted sucessfully");
      }
      console.log(this.form, this.error);
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-25 -->
<!-- <template>
  <div>
    <h1>Modifires/ Form Modifires</h1>
    <input type="number" v-model.lazy="data" />
    <input type="number" v-model.trim="data" />
    <input type="number" v-model.number.lazy="data" />
    <h1>Type is:{{ typeof data }}</h1>
    <h1>Data is:{{ data }}</h1>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      data: "",
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-26 -->
<!-- <template>
  <div>
    <h1>Props / Non Props Data</h1>
    <User2 data="Some Data" id="user-cmp" />
  </div>
</template>
<script>
import User2 from "./User2.vue";
export default {
  name: "Home",
  components: {
    User2,
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-27 -->
<!-- <template>
  <div>
    <h1>Compute Property</h1>
    <h3>{{ getResult }}</h3>
    <h3>{{ getResultMethod() }}</h3>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      dollar: 100,
      rupeeVal: 70,
      discount: 10,
    };
  },
  methods: {
    getResultMethod() {
      return this.dollar * this.rupeeVal - this.discount;
    },
  },
  computed: {
    getResult() {
      return this.dollar * this.rupeeVal - this.discount;
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-28 -->
<!-- <template>
  <div>
    <h1>Watchers</h1>
    <h1>{{ count }}</h1>
    <button v-on:click="count = count + 1">+</button>
    <button v-on:click="count = count - 1">-</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(val, prev) {
      if (val > 5 && val > prev) {
        // alert("Stop Counting");
        this.count = 0;
      }
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-29---30 -->
<!-- <template>
  <div class="parent">
    <h1>Slots</h1>
    <Child1>
      <template v-slot:header>
        <h2>ashraf ali</h2>
      </template>
      <template v-slot:main>
        <p>A vue js product</p>
      </template>
      <template v-slot:footer>
        <button>Buy Now</button>
      </template>
    </Child1>
    <Child1>
      <template v-slot:header>
        <h2>AbdulRehman</h2>
      </template>
      <template v-slot:main>
        <p>A vue js product2</p>
      </template>
      <template v-slot:footer> </template>
    </Child1>
    <Child1></Child1>
    <Child1
      ><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsfDQpTepdyJ_Fon7wjkJGfUDiIDYB4G1lyrXO7EgNthU_MsSncRyiu-rR4nD4a0vR54&usqp=CAU"
    /></Child1>
  </div>
</template>
<script>
import Child1 from "./Child1.vue";
export default {
  name: "Home",
  components: {
    Child1,
  },
};
</script>
<style scoped>
.parent {
  display: flex;
  justify-content: center;
  gap: 30px;
}
h1 {
  color: red;
}
</style> -->

<!-- video-31-->
<!-- <template>
  <div>
    <h1>Dynamic Component</h1>
    <button @click="tab = 'Java'">Load Java</button>
    <button @click="tab = 'Node'">Load Node</button>
    <button @click="tab = 'Php'">Load Php</button>
    <Java />
    <Node />
    <Php />
    <component :is="tab" />
  </div>
</template>
<script>
import Java from "./Java.vue";
import Node from "./Node.vue";
import Php from "./Php.vue";
export default {
  name: "Home",
  components: {
    Java,
    Php,
    Node,
  },
  data() {
    return {
      tab: "Java",
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-32-->
<!-- <template>
  <div>
    <h1>Teleport Component</h1>
    <teleport to="#footer">
      <Footer />
    </teleport>
  </div>
</template>
<script>
import Footer from "./Footer.vue";
export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-34-->
<!-- <template>
  <div>
    <h1>beforeCreated and created</h1>
    <p>{{ name }}</p>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    console.log("Created");
    return {
      name: "Ashraf",
    };
  },
  beforeCreate() {
    this.name = "Ali";
    alert("beforeCreate");
  },
  created() {
    this.name = "Ali";
    alert("created");
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-35-->
<!-- <template>
  <div>
    <h1>beforeMount and mounted</h1>
    <h1>{{ name }}</h1>
    <p>my name is Ashraf ali from arambai kakozai</p>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      name: "ashraf",
    };
  },
  beforeMount() {
    console.log("just Check", this.$el);
  },
  mounted() {
    console.log("just Check", this.$el);
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-36-->
<!-- <template>
  <div>
    <h1>beforeUpdate and updated</h1>
    <h1 ref="count">{{ counter }}</h1>
    <button v-on:click="counter++">Update Count</button>
  </div>
</template> -->
<!-- <script>
export default {
  name: "Home",
  data() {
    return {
      counter: 0,
    };
  },
  beforeUpdate() {
    console.log("beforeUpdate--", this.$refs["count"].textContent);
  },
  updated() {
    console.log("updated---", this.$refs["count"].textContent);
  },
};
</script> -->
<!-- <style scoped> h1 {
  color: red;
}
 </style> -->

<!-- video-37-->
<!-- <template>
  <div>
    <h1>beforeUnMount and unMounted</h1>
    <button v-on:click="show = !show">Toggle</button>
    <User3 v-if="show" />
  </div>
</template>
<script>
import User3 from "./User3.vue";
export default {
  name: "Home",
  data() {
    return {
      show: true,
    };
  },
  components: {
    User3,
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style> -->

<!-- video-38-->
<template>
  <div>
    <h1>Fetch Api</h1>
    <div class="allData">
      <img v-for="item in list" :key="item.id" :src="item.image" />
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://fakestoreapi.com/products");
    this.list = result.data;
    console.log(result);
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
img {
  width: 20%;
  height: 20%;
}
.allData {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
