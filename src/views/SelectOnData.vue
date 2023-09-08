<template>
  <div class="about">
    <h1>{{ UTCTime }}</h1>
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

  {
    Package: {
      Header: {
        ShipID: null,
        TimeSpan: {
          Start: "2023-08-21T05:33:02.317973Z",
          End: "2023-08-21T05:33:02.317973Z",
        },
        DateCreated: "2023-08-21T05:33:02.317973Z",
        DateModified: "2023-08-21T05:33:02.317973Z",
        Author: "DGPS/GGA",
        SystemConfiguration: [],
      },
      TimeSeriesData: [
        {
          DataConfiguration: {
            ID: "DataChannelID_Topic",
            TimeStamp: "2023-08-21T05:33:02.317973Z",
          },
          TabularData: [
            {
              NumberOfDataSet: "1",
              NumberOfDataChannel: "16",
              DataChannelID: [
                "MESSAGEID",
                "UTCTIME",
                "LATITUDE",
                "NSINDICATOR",
                "LONGITUDE",
                "EANEMOMETERICATOR",
                "POSITIONFIX",
                "SATELLITESUSED",
                "HDOP",
                "ALTITUDE",
                "ALTITUDEUNITS",
                "GEOIDSEPERATION",
                "SEPERATIONUNITS",
                "DGPSAGE",
                "DPGSSTATIONID",
                "CHECKSUM",
              ],
              DataSet: [
                {
                  TimeStamp: "2023-08-21T05:33:00.509417Z",
                  Value: [
                    "$GPGGA",
                    "053300.000",
                    "3530.2739",
                    "N",
                    "12921.9211",
                    "E",
                    "2",
                    "10",
                    "0.9",
                    "8.0",
                    "M",
                    "24.8",
                    "M",
                    "",
                    "0000",
                    "5C",
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
                    "053308.000",
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
];

const targetData = ref(null);
for (const item of jsonData) {
  if (item.Package.Header.Author === "DGPS/GLL") {
    for (const dataSet of item.Package.TimeSeriesData[0].TabularData[0]
      .DataSet) {
      if (dataSet.Value[0] === "$GPGLL") {
        targetData.value = dataSet;
        break;
      }
    }
  }
}

// targetData가 존재하면 UTCTime에 할당, 그렇지 않으면 null로 설정
const UTCTime = ref(targetData.value ? targetData.value.Value[5] : null);
</script>
