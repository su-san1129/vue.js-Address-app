<template>
  <v-container fluid fill-height>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://connpass-tokyo.s3.amazonaws.com/thumbs/27/13/2713f1cde171b7b39f2e2c8acc5a2368.png"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> 鈴木 貴大 </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "ホーム", icon: "mdi-home", link: { name: 'home'} },
        { title: "連絡先一覧", icon: "mdi-menu", link: { name: 'addresses'} }
      ]
    };
  }
};
</script>
