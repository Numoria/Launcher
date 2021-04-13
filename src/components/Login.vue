<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Numoria
        </h1>
      </v-col>

      <v-col cols="12" class="mb-5">
        <v-form v-model="form" lazy-validation ref="form">
          <v-text-field
            v-model="pseudo"
            :counter="16"
            :rules="pseudoRules"
            label="Pseudo"
            required
            outlined
            rounded
            prepend-inner-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            :type="showPassword ? 'text' : 'password'"
            hint="Un mot de passe doit être composé de plus de 8 caractères"
            required
            outlined
            rounded
            prepend-inner-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-btn
            color="blue"
            class="ma-2 white--text"
            @click="submit"
          >
            <v-icon left dark>
              mdi-check
            </v-icon>
            Connexion
            
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { ipcRenderer } from 'electron'

  ipcRenderer.on("info", (event, data) => {
    console.log(data)
  })

  export default {
    name: 'Login',

    data: () => ({
      pseudo: "",
      password: "",
      showPassword: false,
      pseudoRules: [
        v => !!v || 'Vous devez saisir un pseudo',
        v => (v && v.length >= 3) || 'Un pseudo doit dépasser 3 caractères',
        v => (v && v.length <= 16) || 'Un pseudo ne doit pas dépasser 16 caractères',
        v => /^[a-zA-Z_0-9]{3,16}$/.test(v) || 'Un pseudo peut comporter uniquement des caractères alphanumériques et le caractère _',
      ],
      passwordRules: [
        v => !!v || 'Vous devez saisir un mot de passe',
        v => (v && v.length >= 8) || 'Un mot de passe doit être composé de plus de 8 caractères',
      ],
      form: true,
    }),
    methods: {
      submit() {
        this.validate()
        console.log("zezerze")
        ipcRenderer.send("login", {
          user: "testuser",
          password: "passwordtest"
        })
      },
      validate() {
        this.$refs.form.validate()
      },
    }
  }
</script>
