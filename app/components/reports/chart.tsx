import { getAmountAnalytics } from "@/api/bikeApi";
import { color } from "@/app/utils/color";
import { fetchadminid } from "@/app/utils/data";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";

const screenWidth = Dimensions.get("window").width;

const DarkApexAnalyticsChart = () => {
  const [type, setType] = useState("month"); // days | month | year
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const adminId = await fetchadminid();

      const res = await getAmountAnalytics(type, adminId);

      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  if (loading)
    return (
      <ActivityIndicator
        size="large"
        color="#1E90FF"
        style={{ marginTop: 50 }}
      />
    );

  const labels = data.map((item) => item._id);
  const values = data.map((item) => item.totalAmount);

  const chartHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <style>
          body { margin: 0; background-color: #000; color: #fff; font-family: 'Segoe UI', sans-serif; }
          #chart { max-width: 100%; margin: auto; padding-top: 10px; }
        </style>
      </head>
      <body>
        <div id="chart"></div>
        <script>
          var options = {
            chart: {
              type: 'bar',
              height: 400,
              background: '#000',
              toolbar: { show: false },
              animations: { enabled: true, easing: 'easeinout', speed: 800 }
            },
            plotOptions: {
              bar: {
                borderRadius: 0,
                columnWidth: '50%',
              }
            },
            series: [{
              name: 'Amount',
              data: ${JSON.stringify(values)}
            }],
            colors: ['#4ca858'],
            dataLabels: {
              enabled: false,
              style: { colors: ['#fff'] },
              formatter: function(val) { return '₹' + val.toFixed(2); }
            },
            tooltip: {
              enabled: true,
              theme: 'dark',
              style: { fontSize: '14px' },
              y: { formatter: function(val) { return '₹' + val.toFixed(2); } }
            },
            xaxis: {
              categories: ${JSON.stringify(labels)},
              labels: { rotate: -45, style: { colors: '#ccc', fontSize: '12px' } },
              axisBorder: { show: true, color: '#555' },
              axisTicks: { show: true, color: '#555' }
            },
            yaxis: {
              title: { text: 'Amount (₹)', style: { color: '#ccc', fontSize: '12px' } },
              labels: { formatter: function(val) { return '₹' + val.toFixed(0); }, style: { colors: '#ccc' } }
            },
         grid: { show: false}

          };
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        </script>
      </body>
    </html>
  `;

  return (
    <ScrollView style={{ flex: 1, marginTop: 20 }} className="bg-black px-5">
      {/* Toggle Buttons */}
      <View
        className=""
        style={{
          flexDirection: "row",
          justifyContent: "start",
          marginBottom: 15,
        }}
      >
        {["days", "month", "year"].map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setType(t)}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              marginHorizontal: 5,
              borderRadius: 20,
              backgroundColor: t === type ? color.primary : "#444",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 3,
            }}
          >
            <Text
              style={{
                color: t === type ? "#000" : "#ccc",
                fontWeight: "bold",
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <WebView
        originWhitelist={["*"]}
        source={{ html: chartHTML }}
        style={{ height: 450, width: screenWidth, backgroundColor: "#000" }}
        javaScriptEnabled={true}
        scalesPageToFit={true}
      />
    </ScrollView>
  );
};

export default DarkApexAnalyticsChart;
