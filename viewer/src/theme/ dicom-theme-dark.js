export const dicomDarkTokens = {
  // 基本色
  colorPrimary: "#4AA3FF", // 亮蓝 — 主要操作/选中/工具颜色
  colorInfo: "#4AA3FF",
  colorSuccess: "#3AD29F",
  colorWarning: "#FFB86B",
  colorError: "#FF6B6B",

  // 背景 / 面板
  colorBgBase: "#0B0F13", // 页面背景（viewer 画布外）
  colorBgContainer: "#0F1720", // 侧栏/面板背景
  colorBgElevated: "#131821", // 浮层 / 卡片背景
  colorBgSpotlight: "#0A0C0E", // 高对比暗区

  // 表面 / 边框
  colorBorder: "#2B333A",
  colorBorderSecondary: "#22292F",

  // 文本
  colorTextBase: "#E6EEF6", // 主文本（高亮）
  colorTextSecondary: "#9FB0C8", // 次级文本（工具提示、说明）
  colorTextDisabled: "#55636E",

  // 交互尺寸 / 辅助
  borderRadius: 6,
  controlHeight: 36,
  fontSize: 13,
  motionBase: 150, // 动画时长 ms

  // 特殊（viewer相关）
  dicomCanvasBg: "#0A0A0A", // 影像 canvas 背景（接近真黑）
  dicomCrosshair: "#FFD54F", // 十字线 / 游标（黄） — 高对比，非侵入
  dicomMeasurement: "#4AA3FF", // 标注 / 测量线（蓝）
  dicomActiveTool: "#3AD29F", // 激活工具状态（绿）
  dicomWarning: "#FFB86B", // 警告提示
};
