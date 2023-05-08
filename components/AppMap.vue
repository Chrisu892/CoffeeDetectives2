<script>
  export default {
    props: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    },
    mounted() {
      const map = new mapboxgl.Map({
        container: 'map',
        projection: 'equalEarth',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [this.lng, this.lat],
        zoom: 15,
        maxZoom: 20,
        minZoom: 5,
      })

      map.addControl(new mapboxgl.NavigationControl())

      const marker = new mapboxgl.Marker()
        .setLngLat([this.lng, this.lat])
        .addTo(map)
    }
  }
</script>

<template>
  <div id="map" class="map"></div>
</template>

<style scoped lang="scss">
  .map {
    overflow: hidden;
    padding-top: 48%;
    position: relative;
  }
</style>