import DateTimePicker from "@react-native-community/datetimepicker";
import { appState } from "../../helpers/const/appState";

export default function TimePicker({
  show,
  updateOpen,
  updateClose,
}: appState["interfaceTimePicker"]) {
  return (
    <>
      {(show?.open || show?.close) && (
        <DateTimePicker
          value={new Date()}
          onChange={show.open ? updateOpen : updateClose}
          mode={"time"}
          is24Hour={true}
        />
      )}
    </>
  );
}
