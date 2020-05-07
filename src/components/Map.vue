<template>

<div style="height: 500px; width: 100%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker v-for = "m in search(markers, myKey)" :key="m.name" :lat-lng="m.latlng" :icon="getIcon(m)" @click="showLongText(m)">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div>
            <button >{{ m.name }}</button>
            <p v-if="showParagraph[m.name]">
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
import * as L from 'leaflet';
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  props: ['data', 'myKey'],
  computed: {
    markers: function () {
      return this.data.map((o) => 
       {
        let obj = JSON.parse(JSON.stringify(o))
        obj.latlng = latLng(o.latlng[0], o.latlng[1])
        return obj
       })
    }
  },
  data() {
    return {
      markerExample: 
        { latlng: latLng(25.105497, 121.597366), showParagraph: false, name: '周亮', img: 'https://i.imgur.com/62FAmJj.jpg', des: '這是比較長的介紹' }
      ,
      zoom: 9,
      currentZoom: 9,
      center: latLng(25.105497, 121.597366),
      currentCenter: latLng(25.105497, 121.597366),
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
    search (list, k) {
      if (!k) { return list }
      var re = new RegExp(k)
      var l = list.filter((o) => { 
        let s = JSON.stringify(o)
        return re.test(s)
      })
      return l
    },
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
      this.currentZoom = zoom
      this.showParagraph = {}
    },
    centerUpdate(center) {
      this.currentCenter = center
      this.showParagraph = {}
    },
    showLongText(m) {
      if (this.showParagraph[m.name] === undefined) {
        this.showParagraph[m.name] = false
      }
      if (this.showParagraph[m.name]) {
        window.open(m.site)
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