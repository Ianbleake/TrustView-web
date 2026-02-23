type updateWidgetPayload = {
  store_id: string;
  widget_config: WidgetStyles;
}

type UpdateWidgetResponse = {
  susscess: boolean;
  data: WidgetStyles;
  meta: undefined;
}