type updateWidgetPayload = {
  store_id: string;
  widget_config: WidgetStyles;
}

type UpdateWidgetResponse = {
  susscess: boolean;
  data: {
    id: string;
    widget_config: WidgetStyles;
  };
  meta: undefined;
}