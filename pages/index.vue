<script setup>
  import { ref } from "vue";
  const { data } = await useFetch('https://restcountries.com/v3.1/all')
  const countries = ref(data.value)
  console.log(countries)
</script>


<template>
  <main class=" w-full flex justify-center bg-[#F2F2F2]">
    <div class=" w-[100%] p-4">
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
        
        <ul class="w-full flex items-center justify-evenly flex-wrap gap-8">
          <li class="  h-[340px] " v-for="(country, i) in countries" :key="i">
            <img class="w-full h-[170px]" :src="country.flags.svg" />
            <div class="p-5 bg-[#fff]">
              <h2 class="mb-3 font-bold">{{country.name.common}}</h2>
              <p><span class="font-semibold">Population:</span> {{country.population}}</p>
              <p><span class="font-semibold">Region:</span> {{country.region}}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
