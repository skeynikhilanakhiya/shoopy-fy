<template>

  <div class="row">
      <div class="text-center col-12" style="margin-top: 30px;margin-bottom: 30px;">
        <h2>𝓑𝓮𝓼𝓽 𝓛𝓪𝓽𝓮𝓼𝓽 𝓟𝓻𝓸𝓭𝓾𝓬𝓽</h2>
      </div>
      <div class="col">
        <router-link to="/" class="" style="width: 210px;">
          <img
            src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg"
            alt="" style="width: 240px;">
        </router-link>
      </div>
      <div class="col">
        <router-link to="/" style="width: 210px;">
          <img
            src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg"
            alt="" style="width: 240px;">
        </router-link>
      </div>
      <div class="col">
        <router-link to="/" style="width: 210px;">
          <img
            src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg"
            alt="" style="width: 240px;">
        </router-link>
      </div>
      <div class="col">
        <router-link :to="{ name: 'Casual Shoes', params: { slug: 'Casual Shoes' } }" style="width: 210px;">
          <img
            src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg"
            alt="" style="width: 240px;">
        </router-link>
      </div>
      <div class="col">
        <router-link to="/" style="width: 210px;">
          <img
            src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg"
            alt="" style="width: 240px;">
        </router-link>
      </div>
      <div class="col">
        <router-link to="/" style="width: 210px;">
          <img
            src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg"
            alt="" style="width: 240px;">
        </router-link>
      </div>
      
    </div>
</template>

<script>
export default {
    name: "slider-page",
    mounted() {
      

    }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@800&display=swap');

h2 {
    float: center;
    margin-left: 32px;
    margin-top: 90px;
    font-family: fantasy;
}

</style>
