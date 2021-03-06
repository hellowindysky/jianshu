import {
  injectGlobal
} from 'styled-components';

injectGlobal `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1534576422697'); /* IE9*/
  src: url('./iconfont.eot?t=1534576422697#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXIAAsAAAAACGwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8i0pDY21hcAAAAYAAAABqAAABstK6nchnbHlmAAAB7AAAAcsAAAIEA7ua0GhlYWQAAAO4AAAALwAAADYSWxRJaGhlYQAAA+gAAAAcAAAAJAfeA4ZobXR4AAAEBAAAAA4AAAAUFAAAAGxvY2EAAAQUAAAADAAAAAwA9gF2bWF4cAAABCAAAAAfAAAAIAETADxuYW1lAAAEQAAAAUUAAAJtPlT+fXBvc3QAAAWIAAAAPgAAAE/jYMVVeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeib4IZG7438AQw9zA0AAUZgTJAQDlCQxLeJztkcENgDAIRR9tNabxarqEZ8+u0D08OXTTLSotHhzCTx6BH8IBgAnwyq4EkBuh61JXhu+Jww+c2kcWHK5sJZWj5tbgW78SnbPoW53tkplf68jn24V+PWPUydCLUQ6jf6dmA3kAgt0X5wAAeJw1kM9r02AYx5/nfZO8Ja3pWPOj1bSuy5J04NLQNomINhlUEITtJrqCA0EP86I40IsQ8VL9GzoEj5V629FRD97LTj148CT4P2yZb6rjhefl/Xwf3s/DAwTgIqX8wAo0AZA1UFOQBcwI+hj1nPbyqepG5GFONHK25/n0eJSmJ+fi4GxZk3+IfNvzDrdHxzRJ00Q8Pxl+fv//Ti4DyH0LOqUqaLnPdvmfHrpKLjY6YWToMYY2J5xzoiD9Mm1toTA/Gs8FYT4evPanQrEqZ1E6oXSSphNBmMhT/83gKM/zrq3WV5SrxReXKa8AAvde0BkFYFCGDWgDNC23ySzsVqjjWhKjYtjt1NEKLMlad4JejD1rnfEJNFXvdsI7SGbP7mWLu0+x/GTwXJSIyA5w4fdf3cTmthcdPE5utfdb9bWrtn96SiHbxHjFsSrZd9E8/NEO/c0HSum+/VA0a5rZsRsAy128o4/oW1DAAYgRY7yNlutIWhnRkMpE4vuvOBHnfaJfxway7BPSWoAfkAQk+/2rpP0smJ0CqZESXhN7xTW3tTqyde3KS5zdGCLZRcShkFU/qvKYsLpZwJKh4h95uFotSvKOscu9fwEGZXPWAHicY2BkYGAAYqPgn+7x/DZfGbhZGEDg+twXagj6fwMLA3MDkMvBwAQSBQAsBgqKAHicY2BkYGBu+N/AEMPCAAJAkpEBFbACAEcLAm54nGNhYGBgQcMAAQQAFQAAAAAAAAA4AHQAvgECeJxjYGRgYGBlMGBgYQABJiDmAkIGhv9gPgMADd0BUAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYGluCAzjystMS89JTErMy+dyTGRJzM5P083OSM1OTszj4EBANGsC1cAAA==') format('woff'),
  url('./iconfont.ttf?t=1534576422697') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1534576422697#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before { content: "\e851"; }

.icon-fangdajing:before { content: "\e617"; }

.icon-Aa:before { content: "\e636"; }

.icon-icon-checkin:before { content: "\e615"; }
`;
