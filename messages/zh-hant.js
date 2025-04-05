// =========================================================================================
// Node-RED blocks
// =========================================================================================
Blockly.Msg.NODE_OBJECT_GET_JSON = "%1 %2 屬性 %3";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET_TOOLTIP = "取得物件的一個屬性。";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE_TOOLTIP = "移除物件的一個屬性。";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS_TOOLTIP = "檢查物件是否具有某個屬性。";
Blockly.Msg.NODE_OBJECT_GET_JSON_GET = "取得";
Blockly.Msg.NODE_OBJECT_GET_JSON_REMOVE = "移除";
Blockly.Msg.NODE_OBJECT_GET_JSON_HAS = "擁有";
Blockly.Msg.NODE_OBJECT_GET_WARNING = "確保屬性變數不返回巢狀值，例如 foo.bar。";
Blockly.Msg.NODE_OBJECT_SET_JSON = "設定 %1 屬性 %2 為 %3";
Blockly.Msg.NODE_OBJECT_SET_JSON_TOOLTIP = "設定物件的一個屬性。";
Blockly.Msg.NODE_OBJECT_SET_WARNING = "巢狀屬性只能用字串常值設定。";
Blockly.Msg.NODE_LOG = "記錄文字 %1，等級為 %2";
Blockly.Msg.NODE_LOG_TOOLTIP = "透過 Node-RED 函式 API 記錄訊息。";
Blockly.Msg.NODE_LOG_LOG = "記錄";
Blockly.Msg.NODE_LOG_WARNING = "警告";
Blockly.Msg.NODE_LOG_ERROR = "錯誤";
Blockly.Msg.NODE_LOG_DEBUG = "偵錯";
Blockly.Msg.NODE_LOG_TRACE = "追蹤";
Blockly.Msg.NODE_MSG = "msg";
Blockly.Msg.NODE_MSG_TOOLTIP = "取得 Node-RED 輸入訊息。";
Blockly.Msg.NODE_REMOVE_STATUS = "移除節點狀態";
Blockly.Msg.NODE_REMOVE_STATUS_TOOLTIP = "透過 Node-RED 函式 API 移除節點狀態。";
Blockly.Msg.NODE_CLONE = "複製 %1";
Blockly.Msg.NODE_CLONE_TOOLTIP = "透過 Node-RED 函式 API 複製訊息。";
Blockly.Msg.NODE_STATUS = "設定節點狀態為 文字 %1，顏色 %2，形狀 %3";
Blockly.Msg.NODE_STATUS_TOOLTIP = "透過 Node-RED 函式 API 設定節點狀態。";
Blockly.Msg.NODE_STATUS_RING = "環形";
Blockly.Msg.NODE_STATUS_DOT = "圓點";
Blockly.Msg.NODE_PROPERTIES = "取得節點 %1";
Blockly.Msg.NODE_PROPERTIES_TOOLTIP = "透過 Node-RED 函式 API 取得指定的節點屬性。";
Blockly.Msg.NODE_PROPERTIES_ID = "識別碼";
Blockly.Msg.NODE_PROPERTIES_NAME = "名稱";
Blockly.Msg.NODE_PROPERTIES_OUTPUT_COUNT = "輸出數量";
Blockly.Msg.NODE_PROPERTIES_PATH = "路徑";
Blockly.Msg.NODE_FLOW_MEMORY = "flow變數";
Blockly.Msg.NODE_FLOW_MEMORY_TOOLTIP = "存取 Node-RED 的 flow 流程變數。";
Blockly.Msg.NODE_CONTEXT_MEMORY = "context變數";
Blockly.Msg.NODE_CONTEXT_MEMORY_TOOLTIP = "存取 Node-RED 節點的 context 上下文變數。";
Blockly.Msg.NODE_GLOBAL_MEMORY = "gobal變數";
Blockly.Msg.NODE_GLOBAL_MEMORY_TOOLTIP = "存取 Node-RED 的 global 全域變數。";
Blockly.Msg.NODE_SEND = "發送 %1 到輸出 %2";
Blockly.Msg.NODE_SEND_TOOLTIP = "透過 Node-RED 函式 API 發送輸出訊息。";
Blockly.Msg.NODE_SEND_WARNING = "在迴圈中發送訊息時，\n請確保訊息是唯一的！";
Blockly.Msg.NODE_RETURN_MESSAGE = "回傳 %1 到輸出 %2";
Blockly.Msg.NODE_RETURN_MESSAGE_TOOLTIP = "發送輸出訊息並回傳以停止處理。";
Blockly.Msg.NODE_RETURN = "回傳";
Blockly.Msg.NODE_RETURN_TOOLTIP = "回傳以停止處理（不發送訊息）。";
Blockly.Msg.NODE_CLOSE = "當節點關閉時";
Blockly.Msg.NODE_CLOSE_1 = "%1";
Blockly.Msg.NODE_CLOSE_TOOLTIP = "當節點關閉時應執行的語句。";
Blockly.Msg.NODE_DONE = "訊息處理完成";
Blockly.Msg.NODE_DONE_TOOLTIP = "訊息處理已完成。";
Blockly.Msg.NODE_ENV = "取得環境變數 %1";
Blockly.Msg.NODE_ENV_TOOLTIP = "存取環境變數的值。";

// =========================================================================================
// Buffer blocks
// =========================================================================================
Blockly.Msg.BUFFER_FROM_STRING = "從字串 %1 產生緩衝區，使用編碼 %2";
Blockly.Msg.BUFFER_FROM_STRING_TOOLTIP = "從字串產生一個緩衝區。";
Blockly.Msg.BUFFER_TO_STRING = "從緩衝區 %1 產生字串，使用編碼 %2";
Blockly.Msg.BUFFER_TO_STRING_TOOLTIP = "從緩衝區產生一個字串。";
Blockly.Msg.BUFFER_FROM_LIST = "從串列 %1 產生緩衝區";
Blockly.Msg.BUFFER_FROM_LIST_TOOLTIP = "從串列產生一個緩衝區。";
Blockly.Msg.BUFFER_TO_LIST = "從緩衝區 %1 產生串列";
Blockly.Msg.BUFFER_TO_LIST_TOOLTIP = "將緩衝區轉換為字串。";
Blockly.Msg.BUFFER_LENGTH = "取得緩衝區 %1 的長度";
Blockly.Msg.BUFFER_LENGTH_TOOLTIP = "取得緩衝區的長度（以位元組計算）。";
Blockly.Msg.BUFFER_ALLOC = "建立長度為 %1 的緩衝區";
Blockly.Msg.BUFFER_ALLOC_TOOLTIP = "建立指定長度的緩衝區。";
Blockly.Msg.BUFFER_FILL = "使用數值 %2 填充緩衝區 %1";
Blockly.Msg.BUFFER_FILL_TOOLTIP = "使用指定數值填充緩衝區。";
Blockly.Msg.BUFFER_CHECK = "檢查 %1 是否為緩衝區";
Blockly.Msg.BUFFER_CHECK_TOOLTIP = "檢查輸入值是否為緩衝區。";
Blockly.Msg.BUFFER_COPY = "從緩衝區 %1 複製到緩衝區 %2";
Blockly.Msg.BUFFER_COPY_TOOLTIP = "將第一個緩衝區的內容複製到第二個緩衝區。";
Blockly.Msg.BUFFER_CONCATENATE = "合併緩衝區 %1 和 %2";
Blockly.Msg.BUFFER_CONCATENATE_TOOLTIP = "合併兩個緩衝區以建立新緩衝區。";
Blockly.Msg.BUFFER_EMPTY = "空緩衝區";
Blockly.Msg.BUFFER_EMPTY_TOOLTIP = "建立一個空的緩衝區（大小為 0）。";
Blockly.Msg.BUFFER_BYTE = "位元組 %1";
Blockly.Msg.BUFFER_BYTE_TOOLTIP = "一個位元組數值。";
Blockly.Msg.BUFFER_GET_INDEX = "取得緩衝區 %2 中索引 %1 的數值";
Blockly.Msg.BUFFER_GET_INDEX_TOOLTIP = "取得指定索引的緩衝區數值。";
Blockly.Msg.BUFFER_SET_INDEX = "將緩衝區 %2 中索引 %1 的位元組設為數值 %3";
Blockly.Msg.BUFFER_SET_INDEX_TOOLTIP = "設定指定索引的緩衝區位元組數值。";

// =========================================================================================
// Objects (JSON) blocks
// =========================================================================================
Blockly.Msg.OBJECT_FROM_JSON = "從 JSON 文字 %1 取得物件";
Blockly.Msg.OBJECT_FROM_JSON_TOOLTIP = "從 JSON 格式的文字字串建立物件。";
Blockly.Msg.OBJECT_TO_JSON = "從物件 %1 取得 JSON 文字";
Blockly.Msg.OBJECT_TO_JSON_TOOLTIP = "從物件建立 JSON 格式的文字字串。";
Blockly.Msg.OBJECT_CREATE = "建立物件";
Blockly.Msg.OBJECT_CREATE_TOOLTIP = "建立一個新物件，可選擇設定部分屬性值。";
Blockly.Msg.OBJECT_FIELD_NAME = "屬性名稱";
Blockly.Msg.OBJECT_KEYS = "從 %1 取得所有鍵值";
Blockly.Msg.OBJECT_KEYS_TOOLTIP = "取得物件中的所有鍵值。";

// =========================================================================================
// Extra blocks
// =========================================================================================
Blockly.Msg.TEXT_SPECIAL_CHARACTER = "特殊字元 %1";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TOOLTIP = "不應該以 '\\' 前綴進行轉義的特殊字元。";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_LF = "換行 (LF) (\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CR = "回車 (CR) (\\r)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_CRLF = "回車換行 (CRLF) (\\r\\n)";
Blockly.Msg.TEXT_SPECIAL_CHARACTER_TAB = "製表符 (TAB) (\\t)";
Blockly.Msg.TIMER_CONDITIONAL = "每 %1 秒重複執行，直到 %2 %3";
Blockly.Msg.TIMER_CONDITIONAL_TOOLTIP = "以固定時間間隔重複執行，直到條件滿足為止。";
Blockly.Msg.TIMER_COUNTING = "每 %2 秒重複執行 %1 次 %3 %4";
Blockly.Msg.TIMER_COUNTING_TOOLTIP = "以固定時間間隔重複執行指定次數。";
Blockly.Msg.SWITCH = "當輸入值 %1 為 %2 時，執行 %3";
Blockly.Msg.SWITCH_TOOLTIP = "根據輸入值執行對應的操作。";
Blockly.Msg.SWITCH_DEFAULT = "預設";
Blockly.Msg.SWITCH_DEFAULT_TOOLTIP = "當沒有符合的情況時執行。";
Blockly.Msg.SWITCH_CASE = "當值為 %1";
Blockly.Msg.SWITCH_CASE_TOOLTIP = "當特定值符合時執行。";
Blockly.Msg.SWITCH_CASE_LIST = "當符合以下情況時";
Blockly.Msg.SWITCH_CASE_LIST_TOOLTIP = "列出所有可用的情況。";
Blockly.Msg.SWITCH_DO = "執行";
Blockly.Msg.MISC_JAVASCRIPT = "JavaScript 陳述式 %1;";
Blockly.Msg.MISC_JAVASCRIPT_TOOLTIP = "當沒有適合的積木時，輸入 JavaScript 程式碼。";
Blockly.Msg.MISC_JSEXPRESS = "JavaScript 表達式 %1";
Blockly.Msg.MISC_JSEXPRESS_TOOLTIP = "請謹慎使用。當沒有適合的積木時，輸入 JavaScript 程式碼。";
Blockly.Msg.MISC_COMMENT = "註解 %1";
Blockly.Msg.MISC_COMMENT_TOOLTIP = "添加註解來解釋邏輯如何運作。";
Blockly.Msg.MISC_JSMULTILINE = "多行 JavaScript 程式碼 %1";
Blockly.Msg.MISC_JSMULTILINE_TOOLTIP = "當沒有適合的積木時，輸入多行 JavaScript 程式碼。";

// =========================================================================================
// Datetime blocks
// =========================================================================================
Blockly.Msg.DATETIME_INPUT = "日期 %1";
Blockly.Msg.DATETIME_INPUT_TOOLTIP = "一個日期。";
Blockly.Msg.DATETIME_TIMESTAMP = "%1 時間戳";
Blockly.Msg.DATETIME_TIMESTAMP_TOOLTIP = "取得當前的時間戳（即當前的日期和時間）。";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE = "從時間戳 %2 取得 %1";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TOOLTIP = "從時間戳中取得指定的資訊。";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_NR = "時間戳格式";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MSEC = "毫秒";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_SEC = "秒";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MIN = "分鐘";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_HOUR = "小時";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY = "日期";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_OF_WEEK = "星期幾";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH = "月份";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_YEAR = "年份";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_TEXT = "日期";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_FULL = "完整日期";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_DAY_NAME = "星期名稱";
Blockly.Msg.DATETIME_CONVERT_FROM_DATE_MONTH_NAME = "月份名稱";
Blockly.Msg.DATETIME_CONVERT_TO_DATE = "從 %1 建立日期";
Blockly.Msg.DATETIME_CONVERT_TO_DATE_TOOLTIP = "從指定值建立一個日期。";
Blockly.Msg.DATETIME_FORMAT = "將時間戳 %1 轉換為格式 %2";
Blockly.Msg.DATETIME_FORMAT_TOOLTIP = "將時間戳轉換為指定格式。";
Blockly.Msg.DATETIME_UTC = "協調世界時 (UTC)";
Blockly.Msg.DATETIME_LOCAL = "本地時間";

// =========================================================================================
// Timer blocks
// =========================================================================================
Blockly.Msg.TIMER_SET_TIMEOUT = "執行延遲 %1 在 %2 %3";
Blockly.Msg.TIMER_SET_TIMEOUT_1 = "%1";
Blockly.Msg.TIMER_SET_TIMEOUT_NAME = "延遲";
Blockly.Msg.TIMER_SET_TIMEOUT_TOOLTIP = "在指定的時間延遲後執行包含的區塊。";
Blockly.Msg.TIMER_CLEAR_TIMEOUT = "停止延遲 %1";
Blockly.Msg.TIMER_CLEAR_TIMEOUT_TOOLTIP = "取消延遲後的執行。";
Blockly.Msg.TIMER_SET_INTERVAL = "執行間隔 %1 每 %2 %3";
Blockly.Msg.TIMER_SET_INTERVAL_1 = "%1";
Blockly.Msg.TIMER_SET_INTERVAL_NAME = "間隔";
Blockly.Msg.TIMER_SET_INTERVAL_TOOLTIP = "以指定的時間間隔定期執行包含的區塊。";
Blockly.Msg.TIMER_CLEAR_INTERVAL = "停止間隔 %1";
Blockly.Msg.TIMER_CLEAR_INTERVAL_TOOLTIP = "取消區塊的週期性執行。";
Blockly.Msg.TIMER_TIMER_MS = "毫秒";
Blockly.Msg.TIMER_TIMER_SEC = "秒";
Blockly.Msg.TIMER_TIMER_MIN = "分鐘";
Blockly.Msg.TIMER_NONE_SELECTED = "無";
