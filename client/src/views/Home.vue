<template>
  <v-main>
    <div class="home-title-img">
      <v-main>
        <v-row>
          <v-col>
            <v-card
                elevation="0"
                style="background-color:#FBFAFF; text-align:left; font-family:Nunito, sans-serif; border-radius:15px; margin-left:10em"
                min-width="250" max-width="600"
                min-height="150" max-height="500"
                class="my-15 py-10"
            >
              <v-card-text style="font-size:5em; font-family:Quicksand, sans-serif; font-weight:bold; color:#313131">Cambri<span style="color:#806CE5">Junior</span></v-card-text>
              <v-card-text class="pt-7" style="font-family:Montserrat,sans-serif; font-size:3em;  font-weight:bold; color:#313131; line-height:1em">Развитие малыша<br>от А до Я</v-card-text>
              <v-card-text class="pt-5 pb-5" style="font-family:Nunito, sans-serif; font-size:1.5em; color:#a0a0a0">Авторский курс для детей от 0 до 3 лет</v-card-text>
              <v-btn
                  x-large
                  color="#FBFAFF"
                  rounded
                  style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                  class="pill mx-5 my-5 py-5 px-10"
                  @click="scrollToMainSection('mainsection')"
              >
                <v-icon style="font-size:2em; color:#806CE5">mdi-play</v-icon>
                <v-card-text style="font-size:1em; font-family:Montserrat, sans-serif; font-weight:bold; letter-spacing: 0.1em">Начать</v-card-text>
              </v-btn>
            </v-card>
          </v-col>
          <v-col>
            <v-card
                elevation="0"
                style="background-color:#FBFAFF"
                min-width="250" max-width="600"
                min-height="150" max-height="500"
                class="mx-10"
            >
              <v-img
                  src="../assets/title-image.png"
                  width="600"
                  height="600"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </div>
    <div class="home-title-description">
      <v-main>
        <v-row
            style="align-items:center; justify-content:center;"

        >
          <v-col
              cols="3"
              offset="1"
          >
            <p><v-icon style="color:#313131; font-size:2.5em" class="pr-3">mdi-brain</v-icon>Прокачает психологическое мышление</p>
          </v-col>
          <v-col
              cols="3"
              offset="1"

          >
            <p><v-icon style="color:#313131; font-size:2.5em" class="pr-3">mdi-account-group</v-icon>Научит находится в обществе</p>
          </v-col>
          <v-col
              cols="3"
              offset="1"
          >
            <p><v-icon style="color:#313131; font-size:2.5em" class="pr-3">mdi-weather-night</v-icon>Займет вас с пользой</p>
          </v-col>
        </v-row>
      </v-main>
    </div>

    <v-divider class="mt-15"></v-divider>

    <div class="home-title-suggestion">
      <v-main>
        <h1 class="py-1 px-5" style="font-family:Montserrat, sans-serif; font-size: 3em; font-weight:bold; color:#313131">
          Хотите, чтобы ваш ребенок гармонично развивался,<br> был здоровым и успешным?
        </h1>
        <br>
        <h3 class="py-1 px-5" style="font-size: 1.5em; font-weight:normal; color:#313131">
          Желаете дать своему ребёнку всё самое лучшее?<br>
          Но, как правило, не хватает времени, сил и возможностей...
          Какой же выход?
        </h3>
      </v-main>
    </div>
    <div class="home-icons-suggestion">
      <v-main>
        <v-row
            style="justify-content:space-evenly; align-self:center"
            class="py-5"
        >
          <v-col
              cols="auto"
              offset="0"
              style="background-color: #f6f6f6; width:150px; height:150px; box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(0, 0, 0, 0.05);"
              class="rounded-circle"
          >
            <v-icon class="py-8 px-8" style="font-size: 3.5em; color:#806CE5">mdi-rocket-launch</v-icon>
          </v-col>
          <v-col
              cols="auto"
              offset="1"
              style="background-color: #f6f6f6; width:150px; height:150px; box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(0, 0, 0, 0.05);"
              class="rounded-circle"
          >
            <v-icon class="py-8 px-8" style="font-size: 3.5em; color:#806CE5">mdi-thumb-up</v-icon>
          </v-col>
          <v-col
              cols="auto"
              offset="1"
              style="background-color: #f6f6f6; width:150px; height:150px; box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(0, 0, 0, 0.05);"
              class="rounded-circle"
          >
            <v-icon class="py-8 px-8" style="font-size: 3.5em; color:#806CE5">mdi-human-handsup</v-icon>
          </v-col>
        </v-row>
        <v-row
            style="justify-content:space-evenly; align-self:center"
            class="py-5"
        >
          <v-col
              cols="3"
              offset="auto"
          >
            <h5 style="text-align:center; font-family:Nunito, sans-serif; font-size:1.1em; font-weight:normal; color:#313131">Сэкономьте свое время,<br>силы и деньги</h5>
          </v-col>
          <v-col
              cols="3"
              offset="auto"
          >
            <h5 style="text-align:center; font-family:Nunito, sans-serif; font-size:1.1em; font-weight:normal; color:#313131">Быстро и легко разберётесь с самыми важными моментами в развитии и воспитании малыша</h5>
          </v-col>
          <v-col
              cols="3"
              offset="auto"
          >
            <h5 style="text-align:center; font-family:Nunito, sans-serif; font-size:1.1em; font-weight:normal; color:#313131">Не упустите самое важное время в развитии ребенка - 0-3 лет, чтобы потом не ликвидировать последствия бездействия</h5>
          </v-col>
        </v-row>
      </v-main>
    </div>
<!--    <div class="home-form-logreg">
      <div class="wrapper">
        <v-main>
          <v-lazy
              v-model="isActive"
              :options="{
            threshold: .5
          }"
              min-height="500"
              transition="fade-transition"
          >
            <v-row
                style="align-items:center; justify-content:center; margin-top:15em"
            >
              <v-col
                  cols="4"
                  offset="0"
                  class="py-5 px-10"
              >
                <h1 style="color:#232323; font-family:Montserrat ,sans-serif; letter-spacing:0.1em; text-align:center">УЖЕ ЕСТЬ АККАУНТ?</h1>
                <v-form>
                  <v-text-field
                      v-model="login"
                      :rules="loginCounter"
                      label="ЛОГИН"
                      required
                      single-line
                      style="width:600px; height:70px;background-color:#FBFAFF;font-family:Nunito sans-serif; font-weight:bold; box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);"
                      class="rounded-pill my-5 px-10 py-2"
                  >
                  </v-text-field>
                </v-form>
                <v-form>
                  <v-text-field
                      v-model="passwordLog"
                      :rules="passwordCounter"
                      type="password"
                      label="ПАРОЛЬ"
                      required
                      single-line
                      style="width:600px; height:70px;background-color:#FBFAFF;font-family:Nunito, sans-serif; font-weight:bold; box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);"
                      class="rounded-pill my-10 px-10 py-2"
                  >
                  </v-text-field>
                  <v-row
                      style="align-items:center; justify-content:start;"
                  >
                    <v-btn
                        x-large
                        color="#FBFAFF"
                        rounded
                        style="box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3); font-family:Montserrat ,sans-serif; font-weight:bold; font-size:1em; color:#313131"
                        class="rounded-pill mx-5 my-5 px-10 py-5"
                    >
                      ВОЙТИ
                    </v-btn>
                    <v-checkbox

                        value="1"
                        color="#313131"
                        class="mx-10"
                    >
                      <template v-slot:label>
                        <div style="font-family:Nunito, sans-serif; font-color:#313131;font-weight:bold">Запомнить пароль</div>
                      </template>
                    </v-checkbox>
                  </v-row>
                </v-form>
              </v-col>
              <v-col
                  cols="4"
                  offset="1"
                  class="py-5 px-10"
              >
                <h1 style="color:#232323; font-family:Montserrat, sans-serif; letter-spacing:0.1em; text-align:center">РЕГИСТРАЦИЯ</h1>
                <v-form>
                  <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-MAIl"
                      required
                      single-line
                      style="width:600px; height:70px;background-color:#FBFAFF;font-family:Nunito ,sans-serif; font-weight:bold; box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);"
                      class="rounded-pill my-5 px-10 py-2"
                  >
                  </v-text-field>
                </v-form>
                <v-form>
                  <v-text-field
                      v-model="passwordReg"
                      :rules="passwordCounter"
                      type="password"
                      label="ПАРОЛЬ"
                      required
                      single-line
                      style="width:600px; height:70px;background-color:#FBFAFF;font-family:Nunito ,sans-serif; font-weight:bold; box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);"
                      class="rounded-pill my-10 px-10 py-2"
                  >
                  </v-text-field>
                  <v-row
                      style="align-items:center; justify-content:start;"
                  >
                    <v-btn
                        x-large
                        color="#FBFAFF"
                        rounded
                        style="box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3); font-family:Montserrat ,sans-serif; font-weight:bold; font-size:1em; color:#313131"
                        class="rounded-pill mx-5 my-5 px-10 py-5"
                    >
                      РЕГИСТРАЦИЯ
                    </v-btn>
                    <p class="mx-5 my-auto" style="font-family:Nunito, sans-serif">или</p>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                            target="_blank"
                            href="https://vuetifyjs.com"
                            @click.stop
                            v-on="on"
                            style="text-decoration:none;"
                        >
                          <v-img
                              src="@/icons/google.svg"
                              class="mx-5"
                          >
                          </v-img>
                        </a>
                      </template>
                      Регистрация через Google
                    </v-tooltip>
                  </v-row>
                </v-form>
              </v-col>
            </v-row>
          </v-lazy>
        </v-main>
      </div>
    </div>-->
    <div class="home-about-block">
      <v-main>
        <v-row
            style="align-items:center; justify-content:center;"
        >
          <v-col
              cols="auto"
              offset="0"
          >
            <v-img
                src="@/assets/image-about.jpg"
                height="500"
                width="500"
                class="rounded-circle"
                style="border: 1px solid #FFFFFF; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15), -5px -5px 15px rgba(255, 255, 255, 0.7);"
            >
            </v-img>
          </v-col>
          <v-col
              cols="auto"
              offset="2"
          >
            <div class="card">
              <v-card-title style="font-family:Montserrat, sans-serif; font-weight:bold; font-size:48px; line-height:55px" class="pt-5 px-7">Анна Елисеева /<br> Автор курса</v-card-title>
              <v-list
                  dense
                  flat
                  disabled
                  class="px-5"
                  color="transparent"
                  style="width:700px; flex-wrap:wrap"
              >
                <v-list-item-group
                    no-action
                    color="#FBFAFF"
                >
                  <v-list-item
                      v-for="(SkillsHistory, i) in SkillsHistory"
                      :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon color="#806CE5" v-text="SkillsHistory.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-subtitle style="font-family:Nunito, sans-serif; font-size:16px; color:#313131; line-height: 20px" v-html="SkillsHistory.text"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-main>
    </div>
    <div class="home-road-map">
      <v-main>
        <v-lazy
            v-model="isActive"
            :options="{
            threshold: .5
          }"
            min-height="500"
            transition="fade-transition"
        >
          <v-row>
            <v-col
                cols="auto"
                offset="0"
            >
              <v-stepper
                  v-model="e6"
                  vertical
                  flat
                  style="top:15vh; background-color:#FBFAFF;"
                  class="px-10"
              >
                <v-stepper-step
                    :complete="e6 > 1"
                    step="1"
                    color="#806CE5"
                >
                  <h4 class="mx-5" style="font-family:Montserrat, sans-serif">Психологические особенности и этапы развития ребенка в разных возрастных периодах</h4>
                </v-stepper-step>

                <v-stepper-content step="1">
                  <div class="card mx-5 my-5 py-5 px-5" style="weigth:500px; height:150px">
                    <v-card-text style="font-family:Nunito, sans-serif; font-size:0.9em; color:#313131">
                      Теоретический модуль.
                      Вы узнаете как развивается мозг малыша по мере взросления.
                      Оцените уровень развития своего малыша.
                      Сможете развивать ребенка своевременно, согласно с синзетивными периодами его взросления.
                    </v-card-text>
                  </div>
                  <v-btn
                      @click="e6 = 2"
                      medium
                      color="#FBFAFF"
                      style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                      fab
                      raised
                      class="rounded-cirle mx-5 my-5"
                  >
                    <v-icon style="color:#806CE5; font-size:2em">mdi-arrow-down</v-icon>
                  </v-btn>
                  <v-btn
                      medium
                      color="#FBFAFF"
                      style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                      fab
                      raised
                      class="rounded-cirle mx-5 my-5"
                      disabled
                  >
                    <v-icon style="color:#806CE5; font-size:2em">mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>

                <v-stepper-step
                    :complete="e6 > 2"
                    step="2"
                    color="#806CE5"
                >
                  <h4 class="mx-5" style="font-family:Montserrat, sans-serif">Эмоциональный интеллект ребёнка</h4>
                </v-stepper-step>

                <v-stepper-content step="2">
                  <div class="card mx-5 my-5 py-5 px-5" style="weigth:500px; height:150px">
                    <v-card-text
                        style="font-family:Nunito, sans-serif; font-size:0.9em; color:#313131"
                    >
                      Какова природа эмоций?
                      Почему у ребенка часто истерики?
                      Как справляться с капризами?
                      Как установить очень близкий эмоциональный контакт с ребенком?
                      5 шагов по развитию эмоционального интеллекта ребенка.
                      35 игр на развитие эмоционального интеллекта ребенка в каждом возрастном периоде.
                    </v-card-text>
                  </div>
                  <v-btn
                      @click="e6 = 3"
                      medium
                      color="#FBFAFF"
                      style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                      fab
                      raised
                      class="rounded-cirle mx-5 my-5"
                  >
                    <v-icon style="color:#806CE5; font-size:2em">
                      mdi-arrow-down
                    </v-icon>
                  </v-btn>
                  <v-btn
                      @click="e6 = 1"
                      medium
                      color="#FBFAFF"
                      style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                      fab
                      raised
                      class="rounded-cirle mx-5 my-5"
                  >
                    <v-icon style="color:#806CE5; font-size:2em">mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>

                <v-stepper-step
                    :complete="e6 > 3"
                    step="3"
                    color="#806CE5"
                >
                  <h4 class="mx-5" style="font-family:Montserrat,sans-serif">Составляем индивидуальный план развития ребенка</h4>
                </v-stepper-step>

                <v-stepper-content step="3">
                  <div class="card mx-5 my-5 py-5 px-5" style="weigth:500px; height:150px">
                    <v-card-text style="font-family:Nunito, sans-serif; font-size:0.9em; color:#313131">
                      Данный модуль поможет вам сформулировать цели в развитии малыша
                      и построить индивидуальный план его развития.
                    </v-card-text>
                  </div>
                  <v-btn
                      @click="e6 = 4"
                      medium
                      color="#FBFAFF"
                      style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                      fab
                      raised
                      class="rounded-cirle mx-5 my-5"
                  >
                    <v-icon style="color:#806CE5; font-size:2em">mdi-arrow-down</v-icon>
                  </v-btn>
                  <v-btn
                      @click="e6 = 2"
                      medium
                      color="#FBFAFF"
                      style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                      fab
                      raised
                      class="rounded-cirle mx-5 my-5"
                  >
                    <v-icon style="color:#806CE5; font-size:2em">mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>

                <v-stepper-step
                    :complete="e6 > 4"
                    step="4"
                    color="#806CE5"
                >
                  <h4 class="mx-5" style="font-family:Montserrat, sans-serif">Развиваем Soft Skills и Hard Skills</h4>
                </v-stepper-step>

                <v-stepper-content step="4">
                  <div class="card mx-5 my-5 py-5 px-5" style="weigth:500px; height:150px">
                    <v-card-text
                        style="font-family:Nunito, sans-serif; font-size:0.9em; color:#313131"
                    >
                      В данном модуле вы получите самый полный объем всех вариантов игр и занятий с малышом,
                      позволяющий развивать все сферы его интеллекта. Все игры даются по возрастам и от простого к сложному.
                    </v-card-text>
                  </div>
                  <v-btn
                      @click="e6 = 1"
                      medium
                      color="#FBFAFF"
                      style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                      fab
                      raised
                      class="rounded-cirle mx-5 my-5"
                  >
                    <v-icon style="color:#806CE5; font-size:2em">mdi-autorenew</v-icon>
                  </v-btn>
                  <v-btn
                      @click="e6 = 3"
                      medium
                      color="#FBFAFF"
                      style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05);"
                      fab
                      raised
                      class="rounded-cirle mx-5 my-5"
                  >
                    <v-icon style="color:#806CE5; font-size:2em">mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>
              </v-stepper>
            </v-col>
            <v-col
                cols="auto"
                offset="0"
                style="margin-top:10em;"
            >
              <v-img
                  src="@/assets/looking.png"
                  width="720"
                  height="600"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-lazy>
      </v-main>
    </div>
    <div class="home-learning-first-part">
      <v-main>
        <v-row
            style="align-items:center; justify-content:space-between"
        >
          <v-col
              cols="auto"
              offset="0"
              class="ml-15 my-10"
          >
            <v-img
                src="@/assets/learning1.png"
                width="730"
                height="600"
            >
            </v-img>
          </v-col>
          <v-col
              cols="auto"
              offset="0"
          >
            <div class="card mr-15">
              <v-card-title style="font-family:Montserrat, sans-serif; font-weight:bold; font-size:48px; line-height:55px" class="pt-5 px-7">КАК МЫ БУДЕМ<br>ЗАНИМАТЬСЯ</v-card-title>
              <v-list
                  dense
                  flat
                  disabled
                  class="px-5"
                  color="transparent"
                  style="width:700px; flex-wrap:wrap"
              >
                <v-list-item-group
                    no-action
                    color="#FBFAFF"
                >
                  <v-list-item
                      v-for="(WhatWeAreDoing, i) in WhatWeAreDoing"
                      :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon color="green" v-text="WhatWeAreDoing.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-subtitle style="font-family:Nunito, sans-serif; font-size:16px; color:#313131; line-height:20px;" v-html="WhatWeAreDoing.text"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-main>
    </div>
    <div class="home-learning-second-part">
      <v-main>
        <v-row style="align-items:center; justify-content:space-between">
          <v-col
              cols="auto"
              offset="0"
          >
            <div class="card ml-15">
              <v-card-title style="font-family:Montserrat, sans-serif; font-weight:bold; font-size:48px; line-height:55px" class="pt-5 px-7">МЕТОДИЧЕСКИЕ<br>МАТЕРИАЛЫ</v-card-title>
              <v-list
                  dense
                  flat
                  disabled
                  class="px-5"
                  color="transparent"
                  style="width:700px; flex-wrap:wrap"
              >
                <v-list-item-group
                    no-action
                    color="#FBFAFF"
                    class="py-0"
                >
                  <v-list-item
                      v-for="(MethodicMaterial, i) in MethodicMaterial"
                      :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon color="green" v-text="MethodicMaterial.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-subtitle style="font-family:Nunito, sans-serif; font-size:16px; color:#313131; line-height:20px;" v-html="MethodicMaterial.text"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-col>
          <v-col
              cols="auto"
              offset="0"
              class="mr-15 my-10"
          >
            <v-img
                src="@/assets/learning2.png"
                width="730"
                height="600"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-main>
    </div>
    <div class="home-buy-courses">
      <v-main>
        <v-row
            style="justify-content:center"
        >
          <v-col
              cols="auto"
              offset="0"
          >
            <div class="card" style="width:340px; height:450px; font-family:Montserrat, sans-serif; position:relative; justify-content:center;">
              <h1 style="font-weight:700; letter-spacing:0.5rem; color:#313131; opacity:15%;
                position:absolute; transform:rotate(90deg); top:6.5em; left:5.5em;">
                <span class="mr-5">6</span>МЕСЯЦЕВ
              </h1>
              <h2
                  class="pt-10 px-15"
                  style="font-weight:700;"
              >
                Пакет "Я сама"
                <p style="font-family:Montserrat, sans-serif; font-size: 24px; text-align:center; color:#806CE5">3900 руб.</p>
              </h2>
              <v-list
                  dense
                  flat
                  disabled
                  class="px-2"
                  color="transparent"
              >
                <v-list-item-group
                    no-action
                    color="#FBFAFF"
                    class="pt-0"
                >
                  <v-list-item
                      v-for="(PackageList, i) in PackageList"
                      :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon color="green" v-text="PackageList.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-subtitle style="font-family:Nunito, sans-serif; font-weight:bold; font-size:14px" v-html="PackageList.text"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <v-btn
                x-large
                color="#FBFAFF"
                rounded
                style="box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.7), 5px 5px 15px rgba(0, 0, 0, 0.05); margin-left: 20%"
                to="/profile"
                class="my-10 py-5"
            >
              <v-icon style="font-size:2em; color:#806CE5">mdi-cart-variant</v-icon>
              <v-card-text style="font-size:1em; font-family:Montserrat, sans-serif; font-weight:bold; letter-spacing: 0.05em">Выбрать</v-card-text>
            </v-btn>
          </v-col>
        </v-row>
      </v-main>
    </div>
    <template>
    <v-footer
        color="#F7F7F8"
        padless
    >
      <v-row
          justify="center"
          no-gutters
      >
        <v-btn
            v-for="(Icons, i) in Icons"
            :key="i"
            color="#313131"
            icon
            rounded
            class="my-10 px-5"
        >
          <v-icon
              color="#313131"
              v-text="Icons.icon"
          >
          </v-icon>
        </v-btn>
        <v-col
            class="py-5 text-center"
            cols="12"
            style="color:#313131"
        >
          {{ new Date().getFullYear() }} — <strong>КэмбриДжуниор</strong>
        </v-col>
      </v-row>
    </v-footer>
    </template>
  </v-main>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      isActive: false,
      e6: 1,
      SkillsHistory: [
        {
          text: `<span>По профессии специалист по связям с общественностью и<br> педагог-лингвист</span>`,
          icon: 'mdi-flag'
        },
        {
          text: `<span>Опытный преподаватель английского языка с пятилетним стажем<br> работы в школе и 8 летним стажем работы репетитором со школьниками<br>всех ступеней образования</span>`,
          icon: 'mdi-book-alphabet'
        },
        {
          text: `<span>Опыт работы классным руководителем школьников среднего звена</span>`,
          icon: 'mdi-human-male-board'
        },
        {
          text: `<span>Опыт работы воспитателем детей 2.5-5 лет в частном детском саду</span>`,
          icon: 'mdi-clock-outline'
        },
        {
          text: `<span>Специалист в области обучения детей билингво и развития<br> когнитивных навыков детей младшего возраста<br>посредством изучения второго иностранного языка</span>`,
          icon: 'mdi-check-circle'
        },
        {
          text: `<span>Эксперт в области организации детских праздников<br>и различных информационных мероприятий</span>`,
          icon: 'mdi-cake-variant'
        },
      ],
      WhatWeAreDoing: [
        {
          text: `<span style="-webkit-hyphens:auto;">Обучение будет проходить на базе платформы GetCourse.</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span style="-webkit-hyphens:auto;">Три раза в неделю вы получаете 10-15 минутный урок.<br>В каждом уроке есть задание. Его выполнение займет еще 10-15 минут.<br>Всего в курсе будет 25 таких уроков.</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>Практические задания чаще всего будут касаться деятельности с детьми,<br>а иногда это просто ваши наблюдения.</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>Любые вопросы задавайте в личном кабинете или в телеграм-чате.<br>Один раз в 3 недели мы собираемся вместе в прямом эфире на 1 час:<br>подводим итоги,я отвечаю на ваши вопросы,<br>рассказываю о самых распространенных ошибках и<br>сложностях каждого модуля.</span`,
          icon: "mdi-check-circle-outline"
        }
      ],
      MethodicMaterial: [
        {
          text: `<span>Рабочая тетрадь по созданию индивидуального плана развития малыша и<br>мониторингу его развития.</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>50 упражнений по развитию EI (эмоционального интеллекта) ребенка.</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>10 таблиц с набором игр по разным возрастам<br>для развития 10 видов интеллекта.</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>Дополнительная литература для самостоятельного обучения.</span`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>Большое количество практических инструментов для развития детей<br>в игре:конкретные приёмы, упражнения, правила, игры, техники,<br>дополнительные аудио,фото и видео материалы, сценарии занятий.</span`,
          icon: "mdi-check-circle-outline"
        }
      ],
      PackageList: [
        {
          text: `<span>Доступ к курсу - 6 месяцев</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>Участие в основной программе<br> 4 модуля (25 коротких уроков)</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>Домашние задания<br>в каждом уроке</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>Чек-листы</span>`,
          icon: "mdi-check-circle-outline"
        },
        {
          text: `<span>Рабочие тетради</span>`,
          icon: "mdi-check-circle-outline"
        }
      ],
      Icons: [
        {
          icon: "mdi-email",
        },
        {
          icon: "mdi-twitter",
        },
        {
          icon: "mdi-linkedin",
        },
        {
          icon: "mdi-instagram",
        },
      ],
    }),
    methods: {
      scrollToMainSection() {
        window.scrollTo({
          top: 1890,
          behavior: "smooth"
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
p{
  font-family: Nunito ,sans-serif;
  font-size: 1.2em;
  font-weight: bold;
  color: #313131;
}
.home-title-img{
  width: 100%;
  height: 75vh;
  background-color: #FBFAFF;
  background-size: cover;
  background-position: center;
}
.home-title-description{
  width: 100%;
  height: 15vh;
  background-color: #FBFAFF;
}
.home-title-suggestion{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #FBFAFF;

  font-family: Nunito, sans-serif;

  width: 100%;
  height: 50vh;

}
.home-icons-suggestion{
  width: 100%;
  height: 50vh;
  background:#f6f6f6;
}
.home-about-block{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #FBFAFF;
}
.home-road-map{
  width: 100%;
  height: 100vh;
}
.card{
  display: flex;
  flex-wrap: wrap;
  width:700px;
  height:700px;
  background-color:transparent;
  border-radius: 1em;
  box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.7), 10px 10px 10px rgba(0, 0, 0, 0.05);
}
.home-learning-first-part{
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 100vh;
}
.home-learning-second-part{
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 100vh;
}
.home-buy-courses{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  // background-image: url("../assets/buybckg.png");
  // background-position: center;
}
.chat-bot{
  width: 300px;
  height: 400px;
}
</style>
