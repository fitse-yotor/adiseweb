<template>
  <div class="dashboard">
      <div>
        <v-row>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 cyan--text">
                            <h5 class="text-truncate text-uppercase">Sales</h5>
                            <h1>53</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="primary fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 primary--text">
                            <h5 class="text-truncate text-uppercase">Growth</h5>
                            <h1>23%</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="success fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 success--text">
                            <h5 class="text-truncate text-uppercase">Calls</h5>
                            <h1>213</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card height="170" scrollable elevation="4" class="overflow-y-auto">
                    <v-card-text>
                        <p>Codeply Kickstarter PBR 
                        asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan 
                        Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb 
                        readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy 
                        leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, 
                        forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                        <a href="//www.codeply.com" target="_new">Codeply</a>
                        <p>Codeply Kickstarter PBR 
                        asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan 
                        Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb 
                        readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy 
                        leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, 
                        forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="mx-auto text-center">
                    <v-card-title class="primary--text">
                        Sales
                    </v-card-title>
                    <v-sparkline 
                        :value="sparklineData" 
                        padding="18"
                        label-size="4"
                        color="cyan"
                        :gradient="['#007bff','cyan']" 
                        :line-width="2"
                        :stroke-linecap="'round'">
                    </v-sparkline>
                    <v-card-actions class="py-4 justify-center">
                        <v-btn color="primary" to="/reports">View Report</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      sparklineData: [
        423,
        446,
        675,
        510,
        590,
        610,
        423,
      ],
    }),
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.theme--light.v-application ::-webkit-scrollbar {
  width: 13px;
}

.theme--light.v-application ::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.theme--light.v-application ::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.theme--light.v-application ::-webkit-scrollbar-thumb:hover {
  background: black;
}

.theme--dark.v-application ::-webkit-scrollbar {
  width: 13px;
}

.theme--dark.v-application ::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.theme--dark.v-application ::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.theme--dark.v-application ::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>