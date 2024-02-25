var guessNumber = function (n) {
  let start = 0,
    end = n - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};
[
  null,
  null,
  null,
  null,
  1,
  2,
  null,
  3,
  null,
  4,
  5,
  null,
  null,
  6,
  null,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  null,
  null,
  null,
  null,
  15,
  null,
  null,
  null,
  16,
  17,
  18,
  19,
  20,
  21,
  null,
  22,
  23,
  24,
  25,
  26,
  27,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  28,
  29,
  30,
  null,
  31,
  32,
  null,
  33,
  null,
  34,
  35,
  null,
  null,
  36,
  37,
  null,
  38,
  39,
  40,
  null,
  41,
  42,
  43,
  44,
  45,
  null,
  46,
  47,
  48,
  49,
  null,
  null,
  null,
  null,
  null,
  50,
  null,
  null,
  null,
  null,
  null,
  null,
  51,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  52,
  null,
  53,
  null,
  54,
  null,
  24,
  null,
  null,
  null,
  51,
  55,
  null,
  56,
  null,
  null,
  null,
  null,
  57,
  null,
  null,
  58,
  59,
  60,
  61,
  null,
  null,
  62,
  63,
  64,
  65,
  null,
  66,
  null,
  null,
  null,
  67,
  68,
  null,
  69,
  null,
  70,
  null,
  71,
  72,
  null,
  null,
  27,
  null,
  73,
  null,
  null,
  74,
  null,
  42,
  75,
  76,
  null,
  null,
  77,
  78,
  null,
  null,
  79,
  80,
  null,
  81,
  null,
  82,
  null,
  83,
  84,
  null,
  null,
  85,
  null,
  null,
  19,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  null,
  null,
  93,
  null,
  null,
  94,
  95,
  null,
  52,
  null,
  96,
  null,
  null,
  97,
  null,
  98,
  99,
  null,
  89,
  100,
  101,
  102,
  103,
  104,
  null,
  null,
  105,
  null,
  106,
  107,
  108,
  null,
  null,
  null,
  null,
  109,
  null,
  null,
  null,
  110,
  null,
  111,
  null,
  null,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  null,
  null,
  null,
  null,
  120,
  121,
  122,
  null,
  123,
  124,
  125,
  null,
  null,
  null,
  null,
  null,
  126,
  null,
  127,
  128,
  null,
  null,
  129,
  null,
  null,
  99,
  null,
  null,
  null,
  130,
  null,
  131,
  132,
  133,
  134,
  null,
  null,
  68,
  null,
  135,
  null,
  136,
  137,
  138,
  null,
  null,
  null,
  91,
  null,
  106,
  null,
  139,
  140,
  null,
  94,
  141,
  null,
  null,
  142,
  143,
  144,
  null,
  145,
  146,
  null,
  133,
  null,
  null,
  128,
  147,
  null,
  null,
  null,
  null,
  148,
  null,
  null,
  null,
  55,
  149,
  null,
  null,
  68,
  150,
  151,
  152,
  153,
  154,
  155,
  156,
  null,
  null,
  null,
  null,
  null,
  null,
  108,
  157,
  null,
  158,
  159,
  160,
  null,
  161,
  162,
  163,
  null,
  null,
  164,
  null,
  165,
  null,
  166,
  167,
  null,
  168,
  null,
  null,
  null,
  138,
  169,
  null,
  null,
  null,
  null,
  null,
  17,
  42,
  170,
  171,
  172,
  173,
  null,
  13,
  174,
  175,
  null,
  176,
  null,
  177,
  null,
  null,
  null,
  27,
  178,
  179,
  null,
  180,
  null,
  null,
  null,
  32,
  181,
  182,
  183,
  184,
  null,
  null,
  10,
  185,
  null,
  null,
  186,
  187,
  null,
  188,
  null,
  null,
  null,
  null,
  189,
  190,
  null,
  null,
  null,
  56,
  null,
  191,
  192,
  193,
  194,
  null,
  195,
  196,
  197,
  198,
  null,
  null,
  92,
  null,
  80,
  null,
  199,
  null,
  null,
  200,
  201,
  null,
  202,
  203,
  204,
  205,
  null,
  null,
  null,
  null,
  206,
  207,
  208,
  209,
  210,
  null,
  211,
  null,
  null,
  null,
  null,
  212,
  213,
  null,
  null,
  null,
  214,
  null,
  3,
  215,
  null,
  16,
  null,
  null,
  216,
  217,
  null,
  125,
  218,
  219,
  null,
  null,
  null,
  58,
  217,
  null,
  null,
  220,
  null,
  null,
  23,
  null,
  221,
  null,
  null,
  null,
  null,
  null,
  null,
  143,
  222,
  null,
  223,
  null,
  224,
  225,
  226,
  227,
  null,
  228,
  229,
  null,
  null,
  null,
  null,
  null,
  41,
  230,
  231,
  null,
  232,
  null,
  null,
  null,
  194,
  null,
  233,
  234,
  null,
  null,
  235,
  null,
  236,
  237,
  238,
  null,
  239,
  240,
  null,
  93,
  null,
  241,
  242,
  243,
  244,
  null,
  150,
  null,
  null,
  null,
  null,
  null,
  245,
  246,
  247,
  248,
  249,
  250,
  251,
  null,
  null,
  252,
  253,
  254,
  null,
  255,
  256,
  null,
  245,
  257,
  258,
  259,
  260,
  null,
  173,
  261,
  262,
  263,
  null,
  264,
  265,
  266,
  null,
  267,
  268,
  269,
  270,
  null,
  271,
  272,
  273,
  274,
  275,
  null,
  null,
  33,
  null,
  null,
  80,
  null,
  276,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  39,
  119,
  null,
  null,
  277,
  null,
  null,
  278,
  null,
  279,
  280,
  null,
  281,
  282,
  283,
  284,
  285,
  null,
  286,
  287,
  null,
  null,
  20,
  288,
  null,
  null,
  null,
  158,
  null,
  233,
  289,
  290,
  null,
  null,
  291,
  null,
  null,
  null,
  null,
  75,
  101,
  null,
  128,
  null,
  242,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  76,
  292,
  293,
  294,
  null,
  null,
  null,
  null,
  295,
  null,
  null,
  231,
  296,
  null,
  null,
  null,
  297,
  298,
  299,
  300,
  301,
  302,
  303,
  304,
  305,
  null,
  23,
  null,
  306,
  307,
  null,
  null,
  308,
  null,
  309,
  null,
  310,
  311,
  null,
  null,
  312,
  313,
  null,
  250,
  null,
  null,
  314,
  315,
  null,
  251,
  316,
  317,
  318,
  319,
  320,
  null,
  null,
  null,
  5,
  152,
  null,
  null,
  null,
  null,
  120,
  153,
  321,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  44,
  null,
  168,
  null,
  null,
  168,
  289,
  null,
  null,
  null,
  null,
  null,
  null,
  71,
  null,
  null,
  null,
];
