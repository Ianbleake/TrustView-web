import moment from "moment";

export default function formatDate(date: Date, format?: boolean): string {

  if(format) {
    return moment(date).format("D [de] MMMM [de] YYYY");
  }

  return moment(date).calendar(null, {
    sameDay: "[Hoy]",
    lastDay: "[Ayer]",
    sameElse: "D [de] MMMM [de] YYYY",
  });
  
}