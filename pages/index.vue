<script setup>
  import { ref } from "vue";
  const { data } = await useFetch('https://restcountries.com/v3.1/name/peru')
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
      <section class="mt-6">
        <ul>
          <li v-for="(country, i) in countries" :key="i">
            <img :src="country.flags.svg" />
            <p>{{country.name.common}}</p>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
