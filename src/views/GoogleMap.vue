<template>
  <div>
    <div ref="mapContainer" style="width: 350px; height: 350px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mapContainer = ref(null); // Ref for the map container element
const currentLocationMarker = ref(null); // Ref for the current location marker

onMounted(() => {
  const map = new google.maps.Map(mapContainer.value, {
    zoom: 8,
    center: { lat: 34.037247, lng: 126.710502 },
    mapTypeId: "terrain",
  });

  const flightPlanCoordinates = [
  { lat: 34.369247, lng: 126.300502 },
  { lat: 34.359247, lng: 126.340502 },
  { lat: 34.229247, lng: 126.280502 },
  { lat: 34.209247, lng: 126.210502 },
  { lat: 34.089247, lng: 126.044502 },
  { lat: 34.000001, lng: 126.080001 },
  { lat: 34.011111, lng: 126.155555 },
  { lat: 34.025247, lng: 126.204502 },
  { lat: 34.029247, lng: 126.210502 },
  { lat: 34.034247, lng: 126.290502 },
  { lat: 34.038247, lng: 126.299502 },
  { lat: 34.031247, lng: 126.450502 },
  { lat: 34.037247, lng: 126.710502 },
  ];

  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);

  // 현재 위치 마커 생성
  currentLocationMarker.value = new google.maps.Marker({
    position: { lat: 34.037247, lng: 126.710502 },
    map: map,
    title: '현재 위치',
    icon: {
      url: '/ship1.png', // 배 이미지의 경로
      scaledSize: new google.maps.Size(30, 15), // 아이콘 크기 조절
    },
  });
});
</script>
const center = ref({ lat: 34.389247, lng: 128.044502 });
// 경로 데이터 (위도와 경도의 배열)
const flightPathCoordinates = ref([
  { lat: 34.389247, lng: 128.044502 }, // 출발점
  { lat: 34.400000, lng: 128.050000 }, // 중간점
  { lat: 42.411111, lng: 132.055555 }, // 도착점
]);