var maxinsurance=0;

const IA = [
  [
    [
      75.78, 75.92, 76.01, 77.18, 78.48, 80.51, 82.71, 84.96, 87.98, 90.99, 94.01, 96.21, 98.6, 102.38, 106.29, 110.39,
      114.75, 119.16, 123.26, 127.49, 131.85, 136.4, 141.08, 146.97, 153.05, 159.44, 162.68, 164.25, 166.14, 170.24,
      177.44, 188.66, 192.78, 104.54, 111.31, 117.45, 123.93, 130.77, 139.93, 148.43, 157.5, 167.13, 177.44, 187.36,
      197.82, 208.89, 220.57, 232.9, 250.97, 270.43, 291.42, 314.06, 338.47, 359.84, 382.61, 406.89, 432.72, 460.26,
      507.56, 559.67, 617.09, 680.33, 776.75,
    ],
    [
      95.22, 95.44, 96.66, 99.5, 102.33, 106.34, 110.43, 117.09, 122.22, 128.79, 135.63, 142.83, 148.95, 155.03, 161.28,
      167.9, 174.78, 183.69, 190.31, 197.19, 204.35, 211.73, 219.42, 230.76, 244.98, 260.06, 276.08, 293.09, 295.38,
      312.66, 330.93, 350.19, 370.67, 201.87, 216.68, 232.49, 247.19, 262.69, 282.49, 303.73, 323.64, 347.94, 374.04,
      398.52, 424.62, 448.36, 473.38, 499.77, 533.3, 568.96, 606.94, 647.33, 690.3, 733.66, 779.78, 828.81, 880.99,
      944.84, 1104.37, 1285.0, 1489.3, 1719.92, 1980.09,
    ],
  ],
  [
    [
      50.67, 51.03, 51.39, 54.18, 55.08, 57.51, 59.45, 60.84, 63.27, 65.75, 68.36, 71.69, 74.97, 77.63, 80.33, 83.21,
      86.18, 89.33, 92.7, 96.26, 99.9, 103.68, 107.73, 112.95, 118.49, 124.25, 130.28, 136.71, 139.37, 146.84, 152.1,
      157.46, 164.25, 88.4, 91.31, 96.82, 101.75, 106.94, 112.66, 118.64, 124.99, 131.67, 138.71, 145.76, 153.16,
      160.97, 169.2, 177.84, 188.98, 200.86, 213.5, 226.94, 241.27, 252.72, 264.67, 277.18, 290.25, 303.89, 343.53,
      387.95, 437.58, 497.68, 572.09,
    ],
    [
      70.34, 70.88, 71.42, 73.62, 75.83, 78.17, 79.88, 82.35, 86.4, 89.82, 93.33, 98.78, 103.55, 107.69, 112.01, 117.59,
      122.36, 128.43, 132.08, 141.39, 151.2, 161.51, 172.4, 182.3, 192.69, 203.81, 219.42, 234.14, 249.48, 265.86,
      283.23, 301.64, 315.54, 170.46, 181.1, 190.69, 200.84, 207.83, 217.26, 227.16, 237.51, 246.11, 257.33, 266.76,
      276.5, 286.61, 297.0, 305.01, 315.54, 326.6, 339.86, 350.55, 361.17, 379.55, 398.59, 414.59, 434.75, 451.53,
      495.43, 543.62, 596.54, 654.62, 718.34,
    ],
  ],
];

const Speciality_Life = [
  [
    [
      30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0,
      30.0, 30.0, 30.0, 33.0, 33.0, 33.0, 33.0, 33.0, 42.2, 42.2, 42.2, 42.2, 42.2, 53.4, 53.4, 53.4, 53.4, 53.4, 71.4,
      71.4, 71.4, 71.4, 71.4, 108.6, 108.6, 108.6, 108.6, 108.6, 199.2, 199.2, 199.2, 199.2, 199.2, 324.4, 324.4, 324.4,
      324.4, 324.4, 0, 0, 0, 0, 0, 0,
    ],
    [
      30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 35.2, 35.2,
      35.2, 35.2, 35.2, 49.4, 49.4, 49.4, 49.4, 49.4, 75.0, 75.0, 75.0, 75.0, 75.0, 112.0, 112.0, 112.0, 112.0, 112.0,
      168.2, 168.2, 168.2, 168.2, 168.2, 261.2, 261.2, 261.2, 261.2, 261.2, 454.0, 454.0, 454.0, 454.0, 454.0, 650.8,
      650.8, 650.8, 650.8, 650.8, 0, 0, 0, 0, 0, 0,
    ],
  ],
  [
    [
      30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0,
      30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 34.8, 34.8, 34.8, 34.8, 34.8, 48.4,
      48.4, 48.4, 48.4, 48.4, 74.8, 74.8, 74.8, 74.8, 74.8, 130.8, 130.8, 130.8, 130.8, 130.8, 215.4, 215.4, 215.4,
      215.4, 215.4, 0, 0, 0, 0, 0, 0,
    ],
    [
      30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0,
      30.0, 30.0, 30.0, 32.5, 32.5, 32.5, 32.5, 32.5, 49.0, 49.0, 49.0, 49.0, 49.0, 72.8, 72.8, 72.8, 72.8, 72.8, 103.2,
      103.2, 103.2, 103.2, 103.2, 151.6, 151.6, 151.6, 151.6, 151.6, 242.0, 242.0, 242.0, 242.0, 242.0, 350.6, 350.6,
      350.6, 350.6, 350.6, 0, 0, 0, 0, 0, 0,
    ],
  ],
];

const SSQ = [
  [
    [
      69.48, 70.43, 71.33, 73.22, 75.06, 76.95, 78.8, 80.69, 84.33, 87.98, 91.58, 95.22, 98.87, 102.51, 106.11, 109.71,
      113.36, 116.96, 121.28, 125.55, 129.87, 134.15, 138.47, 143.28, 148.1, 152.91, 157.73, 162.54, 168.89, 175.23,
      181.58, 187.97, 194.31, 206.33, 218.39, 230.4, 242.46, 254.48, 272.7, 290.93, 309.11, 327.33, 345.56, 366.66,
      387.81, 408.92, 430.02, 451.17, 474.66, 498.2, 521.73, 545.27, 568.76, 312.5, 338.38, 364.25, 390.11, 415.98,
      443.75, 471.51, 499.28, 527.04, 554.81,
    ],
    [
      84.29, 88.61, 92.97, 97.11, 101.3, 105.48, 109.67, 113.85, 119.21, 124.61, 129.96, 135.36, 140.72, 147.15, 153.59,
      160.02, 166.46, 172.89, 179.96, 186.98, 194.04, 201.11, 208.13, 219.74, 231.3, 242.91, 254.48, 266.04, 280.13,
      294.21, 308.25, 322.34, 336.42, 356.63, 376.83, 397.04, 417.24, 437.45, 475.7, 513.9, 552.15, 590.4, 628.61,
      650.79, 672.98, 695.16, 717.35, 739.49, 769.5, 799.52, 829.49, 859.5, 889.52, 469.51, 492.01, 514.51, 537.01,
      559.51, 596.99, 634.5, 672.01, 709.49, 747.0,
    ],
  ],
  [
    [
      60.84, 61.47, 62.01, 64.4, 66.78, 69.17, 71.55, 73.94, 75.69, 77.45, 79.25, 81.0, 82.76, 86.0, 89.24, 92.48,
      95.72, 98.96, 100.71, 102.42, 104.13, 105.89, 107.6, 113.58, 119.57, 125.55, 131.54, 137.52, 143.15, 148.77,
      154.4, 159.98, 165.6, 173.84, 182.07, 190.26, 198.5, 206.73, 219.51, 232.34, 245.16, 257.99, 270.81, 291.87,
      312.98, 334.04, 355.1, 376.2, 394.38, 412.52, 430.7, 448.88, 467.06, 255.89, 275.99, 296.1, 316.22, 336.33,
      358.67, 381.04, 403.4, 425.75, 448.11,
    ],
    [
      75.87, 79.25, 82.76, 85.23, 87.75, 90.23, 92.75, 95.22, 98.33, 101.48, 104.58, 107.69, 110.84, 116.33, 121.82,
      127.31, 132.8, 138.33, 145.31, 152.33, 159.3, 166.32, 173.34, 184.82, 196.34, 207.81, 219.33, 230.81, 240.12,
      249.48, 258.8, 268.11, 277.47, 292.37, 307.22, 322.11, 337.01, 351.86, 375.3, 398.7, 422.1, 445.5, 468.95, 480.92,
      492.84, 504.81, 516.78, 528.75, 550.62, 572.45, 594.32, 616.14, 638.01, 344.07, 366.89, 389.7, 412.52, 435.33,
      464.42, 493.49, 522.56, 551.63, 580.73,
    ],
  ],
];

const Empire_life = [
  [
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139.68, 145.44, 151.29, 157.32, 161.78, 165.42,
      168.03, 171.77, 177.08, 183.33, 188.1, 101.45, 107.24, 112.73, 118.35, 124.2, 132.66, 140.81, 149.22, 157.91,
      166.95, 177.95, 189.23, 200.79, 212.69, 224.89, 244.91, 265.61, 287.1, 309.4, 332.57, 359.51, 382.16, 405.56,
      429.75, 454.79, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 217.13, 229.5, 243.59, 258.12, 273.11, 288.63,
      293.13, 305.1, 317.66, 330.66, 344.25, 185.13, 196.38, 208.13, 219.31, 230.9, 247.16, 264.13, 280.44, 298.98,
      318.38, 341.37, 365.18, 387.81, 411.05, 435.02, 468.07, 502.18, 537.46, 573.93, 611.69, 653.38, 696.42, 740.9,
      786.98, 838.89, 0, 0, 0, 0, 0,
    ],
  ],
  [
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104.81, 109.04, 114.48, 120.66, 125.82, 131.94,
      135.63, 141.71, 146.7, 151.74, 155.34, 83.34, 86.45, 90.86, 94.95, 99.2, 105.82, 111.24, 116.82, 122.58, 128.52,
      135.56, 142.76, 150.17, 157.79, 165.6, 174.51, 187.02, 199.89, 213.19, 226.91, 239.9, 253.13, 266.65, 280.44,
      294.53, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 157.91, 167.22, 176.76, 186.66, 198.81, 210.51,
      221.45, 232.88, 244.85, 257.27, 267.48, 143.24, 150.8, 157.88, 165.17, 170.93, 179.69, 188.64, 197.84, 206.17,
      215.82, 225.05, 234.45, 244.04, 253.79, 262.31, 275.81, 290.09, 305.91, 320.22, 334.49, 355.46, 376.74, 396.52,
      418.37, 438.53, 0, 0, 0, 0, 0,
    ],
  ],
];

const CPP = [
  [
    [
      50.72, 51.33, 54.41, 58.5, 62.6, 66.69, 70.79, 74.93, 79.02, 83.12, 87.21, 91.31, 95.45, 99.54, 103.64, 107.73,
      111.83, 115.97, 120.06, 124.16, 128.25, 132.35, 136.49, 142.11, 147.78, 153.41, 159.08, 164.75, 168.12, 171.5,
      174.87, 178.25, 181.62, 191.3, 200.93, 210.56, 220.19, 229.86, 245.39, 260.91, 276.44, 292.01, 307.53, 331.7,
      355.86, 380.03, 404.19, 428.21, 472.28, 516.2, 560.12, 604.04, 647.96, 712.94, 758.03, 803.07, 848.16, 893.25, 0,
      0, 0, 0, 0,
    ],
    [
      63.14, 68.94, 75.74, 82.58, 89.46, 96.35, 103.19, 110.07, 116.91, 123.8, 130.64, 137.52, 144.36, 151.25, 158.13,
      164.97, 171.86, 178.7, 185.58, 192.42, 199.31, 206.15, 213.03, 226.44, 240.39, 254.39, 268.34, 282.33, 289.04,
      295.79, 302.54, 309.29, 315.99, 331.34, 346.73, 362.07, 377.42, 392.75, 418.23, 443.66, 469.13, 494.6, 520.02,
      563.04, 606.06, 649.08, 692.06, 735.08, 800.24, 865.35, 930.51, 995.67, 1060.79, 1140.75, 1220.67, 1300.59,
      1380.51, 1460.48, 0, 0, 0, 0, 0,
    ],
  ],
  [
    [
      40.82, 42.84, 45.05, 47.79, 50.54, 53.33, 56.07, 58.82, 61.56, 64.31, 67.05, 69.8, 72.54, 75.29, 78.08, 80.82,
      83.57, 86.31, 89.06, 91.8, 94.55, 97.29, 100.08, 103.32, 108.72, 114.12, 119.52, 125.37, 130.1, 134.78, 139.5,
      144.18, 144.59, 151.16, 157.77, 164.34, 170.91, 177.53, 192.51, 202.23, 211.91, 221.58, 231.3, 245.3, 259.34,
      273.33, 287.37, 301.37, 314.64, 340.92, 367.2, 393.44, 419.72, 448.74, 477.77, 506.79, 535.86, 564.89, 0, 0, 0, 0,
      0,
    ],
    [
      50.58, 54.63, 58.68, 62.82, 66.96, 71.15, 75.29, 79.43, 83.57, 87.51, 91.85, 95.99, 100.13, 104.31, 108.45,
      112.59, 116.73, 120.87, 125.01, 129.15, 133.29, 137.48, 141.62, 150.3, 158.99, 167.72, 176.4, 185.09, 191.61,
      198.09, 204.62, 211.1, 217.62, 226.62, 235.62, 244.62, 253.62, 262.67, 278.78, 294.84, 310.95, 327.06, 343.17,
      361.31, 379.4, 397.53, 415.62, 433.76, 466.74, 502.65, 538.52, 574.38, 610.25, 657.32, 704.39, 751.46, 798.53,
      845.6, 0, 0, 0, 0, 0,
    ],
  ],
];

const Edge_Benefits = [
  [
    [
      29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42,
      29.42, 31.82, 31.82, 31.82, 31.82, 31.82, 43.54, 43.54, 43.54, 43.54, 43.54, 61.2, 61.2, 61.2, 61.2, 61.2, 84.96,
      84.96, 84.96, 84.96, 84.96, 119.88, 119.88, 119.88, 119.88, 119.88, 190.84, 190.84, 190.84, 190.84, 190.84, 291.9,
      291.9, 291.9, 291.9, 291.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42, 29.42,
      29.42, 31.82, 31.82, 31.82, 31.82, 31.82, 43.54, 43.54, 43.54, 43.54, 43.54, 61.2, 61.2, 61.2, 61.2, 61.2, 84.96,
      84.96, 84.96, 84.96, 84.96, 119.88, 119.88, 119.88, 119.88, 119.88, 190.84, 190.84, 190.84, 190.84, 190.84, 291.9,
      291.9, 291.9, 291.9, 291.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  ],
  [
    [
      19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26,
      19.26, 27.34, 27.34, 27.34, 27.34, 27.34, 32.28, 32.28, 32.28, 32.28, 32.28, 46.06, 46.06, 46.06, 46.06, 46.06,
      61.8, 61.8, 61.8, 61.8, 61.8, 83.72, 83.72, 83.72, 83.72, 83.72, 125.02, 125.02, 125.02, 125.02, 125.02, 192.66,
      192.66, 192.66, 192.66, 192.66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26, 19.26,
      19.26, 27.34, 27.34, 27.34, 27.34, 27.34, 32.28, 32.28, 32.28, 32.28, 32.28, 46.06, 46.06, 46.06, 46.06, 46.06,
      61.8, 61.8, 61.8, 61.8, 61.8, 83.72, 83.72, 83.72, 83.72, 83.72, 125.02, 125.02, 125.02, 125.02, 125.02, 192.66,
      192.66, 192.66, 192.66, 192.66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  ],
];

function myFunction() {
  var Rates = [
    ["IA", 0, 0, 0],
    ["Speciality_Life", 0, 0, 0],
    ["SSQ", 0, 0, 0],
    ["Empire_life", 0, 0, 0],
    ["CPP", 0, 0, 0],
    ["Edge_Benefits", 0, 0, 0],
  ];

  var age = parseInt(document.getElementById("age").value);
  document.getElementById("myList").innerHTML = "";
  document.getElementById("myList2").innerHTML = "";
  var sumofinsurance = 0;

  if (age >= 18 && age <= 80) {
    //IA
    if (age >= 18 && age <= 50) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 50K from Industrial Alliance");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[0][1] = 50;
      sumofinsurance += 50;
    } else {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 25K from Industrial Alliance");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[0][1] = 25;
      sumofinsurance += 25;
    }

    //Speciality Life Insurance
    if (age >= 18 && age <= 74) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 25K from Speciality Life Insurance");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[1][1] = 25;
      sumofinsurance += 25;
    } else {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("Sry You cant get any insurance from Speciality Life Insurance");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[1][1] = 0;
    }

    //SSQ
    if (age >= 18 && age <= 70) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 50K from SSQ");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[2][1] = 50;
      sumofinsurance += 50;
    } else {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 25K from SSQ");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[2][1] = 25;
      sumofinsurance += 25;
    }

    //EmpireLife
    if (age >= 40 && age <= 50) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 50K from EmpireLife");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[3][1] = 50;
      sumofinsurance += 50;
    } else if (age >= 51 && age <= 75) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 25K from EmpireLife");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[3][1] = 25;
      sumofinsurance += 25;
    } else {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("Sry You cant get any insurance from EmpireLife");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[3][1] = 0;
    }

    //CPP
    if (age >= 18 && age <= 75) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 50K from CPP");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[4][1] = 50;
      sumofinsurance += 50;
    } else {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("Sry You cant get any insurance from CPP");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[4][1] = 0;
    }

    //EDGE
    if (age >= 18 && age <= 69) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("You can maximum get 50K from EDGE");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[5][1] = 50;
      sumofinsurance += 50;
    } else {
      var node = document.createElement("LI");
      var textnode = document.createTextNode("Sry You cant get any insurance from EDGE");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      Rates[5][1] = 0;
    }
  } else {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(
      "Sry You cant get any insurance from any company. Please Enter Age Between 18-80"
    );
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
  }

  var node = document.createElement("HR");
  document.getElementById("myList").appendChild(node);

  var node = document.createElement("B");
  var textnode = document.createTextNode(
    "Summing up all, the Maximum Amount of Insurance you can maximum get is $" + sumofinsurance + "K"
  );
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);

  maxinsurance = sumofinsurance*1000;
  console.log(maxinsurance);
  document.getElementById("coverage").setAttribute("max", maxinsurance);


  var gender = document.getElementById("male").checked ? 0 : 1;
  var smoker = document.getElementById("nonsmoker").checked ? 0 : 1;
  var coverage = parseInt(document.getElementById("coverage").value);

  if (document.getElementById("age").value !== "" && document.getElementById("coverage").value !== "") {
    Rates[0][2] = IA[gender][smoker][age - 18];
    Rates[1][2] = Speciality_Life[gender][smoker][age - 18];
    Rates[2][2] = SSQ[gender][smoker][age - 18];
    Rates[3][2] = Empire_life[gender][smoker][age - 18];
    Rates[4][2] = CPP[gender][smoker][age - 18];
    Rates[5][2] = Edge_Benefits[gender][smoker][age - 18];

    for (let i = 0; i < 6; i++) {
      if (Rates[i][1] === 50) {
        Rates[i][3] = Rates[i][2] / 2;
      } else {
        Rates[i][3] = Rates[i][2];
      }
    }

    Rates.sort(function (a, b) {
      return a[3] - b[3];
    });

    console.table(Rates);
    coverage = coverage / 1000;

    var node = document.createElement("LI");
    var textnode = document.createTextNode("Required Insurance: " + coverage + "K");
    node.appendChild(textnode);
    document.getElementById("myList2").appendChild(node);

    var sumcharge = 0;
    for (let i = 0; i < 6; i++) {
      if (Rates[i][1] === 0) {
        continue;
      } else {
        if (coverage <= Rates[i][1]) {
          var node = document.createElement("LI");
          var textnode = document.createTextNode(
            "You can buy " + coverage + "K from " + Rates[i][0] + " for $" + Rates[i][2] / (Rates[i][1] / coverage)
          );
          node.appendChild(textnode);
          document.getElementById("myList2").appendChild(node);

          sumcharge += Rates[i][2] / (Rates[i][1] / coverage);
          break;
        } else {
          var node = document.createElement("LI");
          var textnode = document.createTextNode(
            "You can buy " + Rates[i][1] + "K from " + Rates[i][0] + " for $" + Rates[i][2]
          );
          node.appendChild(textnode);
          document.getElementById("myList2").appendChild(node);
          coverage -= Rates[i][1];
          sumcharge += Rates[i][2];
        }
      }
    }

    //document.getElementById("Charge")={"$" + sumcharge.toFixed(2)};
    var node = document.createElement("HR");
    document.getElementById("myList2").appendChild(node);

    var node = document.createElement("B");
    var textnode = document.createTextNode("Summing up all, the Total Premium is $" + sumcharge.toFixed(2));
    node.appendChild(textnode);
    document.getElementById("myList2").appendChild(node);
  }
}
