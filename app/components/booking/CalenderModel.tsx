import { color } from "@/app/utils/color";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    height: "50%",
    backgroundColor: "#121212",
    borderRadius: 14,
    paddingBottom: 10,
  },
  calendar: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: "90%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // paddingVertical: 7,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#1f1f1f",
    height: "12%",
  },
  cancel: {
    color: "#aaa",
    fontSize: 16,
  },
  ok: {
    color: color.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

const CalendarModal = ({ visible, onClose, onConfirm, selectedDate }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Calendar */}
          <Calendar
            current={selectedDate}
            onDayPress={(day) => onConfirm(day.dateString)}
            style={styles.calendar}
            theme={{
              backgroundColor: "#121212",
              calendarBackground: "#121212",
              textSectionTitleColor: "#777",
              selectedDayBackgroundColor: color.primary,
              selectedDayTextColor: "#000",
              todayTextColor: color.primary,
              dayTextColor: "#EAEAEA",
              textDisabledColor: "#444",
              monthTextColor: "#fff",
              textMonthFontSize: 18,
              textDayFontSize: 14,
              textDayHeaderFontSize: 12,
              arrowColor: color.primary,
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: color.primary,
              },
            }}
          />

          {/* Footer Buttons */}
          <View style={styles.footer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onConfirm(selectedDate)}>
              <Text style={styles.ok}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default CalendarModal;
