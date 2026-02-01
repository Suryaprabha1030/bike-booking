import React, { useRef, useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "@/app/utils/color";
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "88%",
    backgroundColor: "#121212",
    borderRadius: 20,
    padding: 22,
  },
  title: {
    color: "#fff",
    // fontSize: 18,
    textAlign: "center",
    marginBottom: 22,
  },
  spinnerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    alignItems: "center",
  },
  circleBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: color.primary,
    fontSize: 22,
    fontWeight: "600",
  },
  value: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 8,
  },
  colon: {
    color: "#444",
    fontSize: 34,
    marginHorizontal: 18,
  },
  segment: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    marginTop: 20,
    padding: 4,
  },
  segmentBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
  },
  segmentActive: {
    backgroundColor: color.primary,
  },
  segmentText: {
    color: "#888",
    textAlign: "center",
    // fontSize: 16,
  },
  segmentTextActive: {
    color: "#000",
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },
  cancel: {
    color: "#777",
    // fontSize: 16,
  },
  confirm: {
    color: color.primary,
    // fontSize: 16,
    fontWeight: "600",
  },
});

export default function TimePickerModal({ visible, onClose, onConfirm }: any) {
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(30);
  const [ampm, setAmPm] = useState<"AM" | "PM">("AM");

  const hourInterval = useRef<any>(null);
  const minuteInterval = useRef<any>(null);

  const hold = (cb: () => void, ref: any) => {
    cb();
    ref.current = setInterval(cb, 120);
  };

  const release = (ref: any) => clearInterval(ref.current);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title} className="text-md">
            Select Time
          </Text>

          {/* Time spinner */}
          <View style={styles.spinnerRow}>
            {/* Hour */}
            <View style={styles.spinner}>
              <TouchableOpacity
                onPressIn={() =>
                  hold(
                    () => setHour((h) => (h === 12 ? 1 : h + 1)),
                    hourInterval,
                  )
                }
                onPressOut={() => release(hourInterval)}
                style={styles.circleBtn}
              >
                <Text style={styles.icon} className="text-md">
                  ＋
                </Text>
              </TouchableOpacity>

              <Text style={styles.value}>
                {hour.toString().padStart(2, "0")}
              </Text>

              <TouchableOpacity
                onPressIn={() =>
                  hold(
                    () => setHour((h) => (h === 1 ? 12 : h - 1)),
                    hourInterval,
                  )
                }
                onPressOut={() => release(hourInterval)}
                style={styles.circleBtn}
              >
                <Text style={styles.icon} className="text-md">
                  －
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.colon} className="text-md">
              :
            </Text>

            {/* Minute */}
            <View style={styles.spinner}>
              <TouchableOpacity
                onPressIn={() =>
                  hold(
                    () => setMinute((m) => (m === 55 ? 0 : m + 5)),
                    minuteInterval,
                  )
                }
                onPressOut={() => release(minuteInterval)}
                style={styles.circleBtn}
              >
                <Text style={styles.icon} className="text-md">
                  ＋
                </Text>
              </TouchableOpacity>

              <Text style={styles.value} className="text-md">
                {minute.toString().padStart(2, "0")}
              </Text>

              <TouchableOpacity
                onPressIn={() =>
                  hold(
                    () => setMinute((m) => (m === 0 ? 55 : m - 5)),
                    minuteInterval,
                  )
                }
                onPressOut={() => release(minuteInterval)}
                style={styles.circleBtn}
              >
                <Text style={styles.icon} className="text-md">
                  －
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* AM / PM */}
          <View style={styles.segment}>
            {["AM", "PM"].map((v) => (
              <TouchableOpacity
                key={v}
                onPress={() => setAmPm(v as any)}
                style={[styles.segmentBtn, ampm === v && styles.segmentActive]}
              >
                <Text
                  style={[
                    styles.segmentText,
                    ampm === v && styles.segmentTextActive,
                  ]}
                  className="text-md"
                >
                  {v}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel} className="text-md">
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                onConfirm(
                  `${hour.toString().padStart(2, "0")}:${minute
                    .toString()
                    .padStart(2, "0")}  ${ampm}`,
                )
              }
            >
              <Text style={styles.confirm} className="text-md">
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
