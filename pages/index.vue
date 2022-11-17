<script setup>
  import { ref } from "vue";
  const { data } = await useFetch('https://restcountries.com/v3.1/all')
  const countries = ref(data.value)
  console.log(countries)
</script>


<template>
  <main class=" w-full h-screen flex justify-center">
    <div class="border border-t-VeryDarkBlueBG w-[90%] p-4">
      <section class="flex items-center justify-between">
        <input type="text" placeholder="Search for a country..." />
        <select >
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </section>
      <section class="mt-6 w-full">
        <ul class="w-full flex items-center justify-center flex-wrap gap-8">
          <li class="border border-black w-[300px]" v-for="(country, i) in countries" :key="i">
            <img class="w-full" :src="country.flags.svg" />
            <div>
              <h2>{{country.name.common}}</h2>
              <p>Population: {{country.population}}</p>
              <p>Region: {{country.region}}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
