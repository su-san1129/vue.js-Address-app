<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <Sidenav />

    <v-content>
      <v-container fluid fill-height align-start>
        <!-- ここからrouter view -->
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidenav from "./components/Sidenav";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Sidenav
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["toggleSideMenu"])
  }
};
</script>
