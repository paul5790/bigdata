<template>
  <div class="about">
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[0] }}</h1>
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[1] }}</h1>
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[2] }}</h1>
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[3] }}</h1>
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[4] }}</h1>
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[5] }}</h1>
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[6] }}</h1>
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[7] }}</h1>
    <h1 v-for="data in DGPSData" :key="data.TimeStamp">{{ data.Value[8] }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const jsonData = [
  {
    Package: {
      Header: {
        ShipID: null,
        TimeSpan: {
          Start: "2023-08-21T05:33:09.407432Z",
          End: "2023-08-21T05:33:09.407432Z",
        },
        DateCreated: "2023-08-21T05:33:09.407432Z",
        DateModified: "2023-08-21T05:33:09.407432Z",
        Author: "DGPS/GLL",
        SystemConfiguration: [],
      },
      TimeSeriesData: [
        {
          DataConfiguration: {
            ID: "DataChannelID_Topic",
            TimeStamp: "2023-08-21T05:33:09.407432Z",
          },
          TabularData: [
            {
              NumberOfDataSet: "1",
              NumberOfDataChannel: "9",
              DataChannelID: [
                "MESSAGEID",
                "LATITUDE",
                "LATITUDEDIRECTION",
                "LONGITUDE",
                "LONGITUDEDIRECTION",
                "UTCTIME",
                "DATASETQUAILITY",
                "MODEINDICATOR",
                "CHECKSUM",
              ],
              DataSet: [
                {
                  TimeStamp: "2023-08-21T05:33:07.720189Z",
                  Value: [
                    "$GPGLL",
                    "3530.2737",
                    "N",
                    "12921.9206",
                    "E",
                    "053306.000",
                    "A",
                    "D",
                    "5E",
                  ],
                  Quality: null,
                },
              ],
            },
          ],
          EventData: {
            NumberOfDataSet: "",
            DataSet: [],
          },
        },
      ],
    },
  },
]

const DGPSData = ref([]);
for (const item of jsonData) {
  if (item.Package.Header.Author === "DGPS/GLL") {
    for (const dataSet of item.Package.TimeSeriesData[0].TabularData[0]
      .DataSet) {
      if (dataSet.Value[0] === "$GPGLL") {
        DGPSData.value.push(dataSet);
      }
    }
  }
}
</script>
