<template>

<div style="height: 500px; width: 100%">
    <div style="height: 200px overflow: auto;">
      <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker v-for = "m in markers" :key="m.name" :lat-lng="m.latlng" :icon="getIcon(m)" @click="showLongText(m)">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div>
            {{ m.name }}
            <p v-show="showParagraph[m.name]">
              <img class="med" :src="m.img"/>
              {{ m.des }}
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>

</template>

<script>
import * as L from 'leaflet'
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  props: ['data'],
  computed: {
    markers () {
      return this.data.map((o) => 
       {
        return o
       })
    }
  },
  data() {
    return {
      markerExample: 
        { latlng: latLng(47.41422, -1.250482), showParagraph: false, name: '周亮', img: 'https://i.imgur.com/62FAmJj.jpg', des: '這是比較長的介紹' }
      ,
      zoom: 13,
      currentZoom: 11.5,
      center: latLng(47.41322, -1.219482),
      currentCenter: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      showParagraph: {}
    };
  },
  methods: {
    getIcon(m) {
      return L.icon({
        iconUrl: m.img,
        shadowUrl: '',
        iconSize: [50, 50], // size of the icon
        shadowSize: [0, 0], // size of the shadow
        iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0], // the same for the shadow
        popupAnchor: [0, 0] // point from which the po
      })
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText(m) {
      if (this.showParagraph[m.name] === undefined) {
        this.showParagraph[m.name] = false
      }
      this.showParagraph[m.name] = !this.showParagraph[m.name];
      this.$forceUpdate()
    }
  }
};
</script>

<style type="text/css" scoped="">

img.med {
  width: 150px;
}

.vue2leaflet-map {
  z-index: 1;
}

</style>