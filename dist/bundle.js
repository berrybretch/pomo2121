/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ (() => {

eval("const pause_play = document.getElementById(\"pause_play\")\nconst study_timer = document.getElementById(\"study_timer\")\nconst break_timer = document.getElementById(\"break_timer\")\nconst form = document.getElementById(\"time_form\")\n\n\nlet pomodoros = 0;\nlet playing = false;\nlet studying = false;\nlet breaking = false;\nlet study_time = 0\nlet break_time = 0\nlet saved_study_time = 0\nlet saved_break_time = 0\n\nconst eve = new Event(\"Pomo_start\")\n\nconst change_study = (newtime) => {\n    study_timer.innerText = newtime\n}\nconst change_break = (newtime) => {\n    break_timer.innerText = newtime\n}\n\n\n\npause_play.addEventListener(\"click\", () => {\n    if (playing) {\n        playing = false\n        pause_play.innerText = \"Play\"\n        console.log(\"pomo is paused\")\n    }\n    else if (!playing && (studying && breaking) || (studying && !breaking) || (!studying && breaking)) {\n        playing = true\n        pause_play.innerText = \"Pause\"\n        console.log(\"pomodoro is running\");\n    }\n    else if (!playing && !studying && !breaking) {\n        window.dispatchEvent(eve)\n    }\n})\n\nform.addEventListener(\"submit\", (e) => {\n    console.log(\"form submitted\");\n    e.preventDefault()\n    playing = false\n    let content = new FormData(form)\n    saved_study_time = content.get(\"study_time\")\n    study_time = saved_study_time\n    change_study(study_time)\n    saved_break_time = content.get(\"break_time\")\n    break_time = saved_break_time\n    change_break(break_time)\n})\n\nwindow.addEventListener(\"Pomo_start\", () => {\n    playing = true\n    studying = true\n    breaking = false\n    if (study_time == 0) {\n        study_time = 25\n    }\n    if (break_time == 0) {\n        break_time = 5\n    }\n    console.log(\"pomo is starting\")\n    study(study_time)\n    brek(break_time)\n})\n\nconst study = (study_time) => {\n    console.log(\"Studying\");\n    console.log(study_time)\n    if (study_time == -1) {\n        studying = false\n        breaking = true\n        study_time = saved_study_time\n        change_study(study_time)\n\n    }\n    if (playing && studying) {\n        study_time -= 1;\n        change_study(study_time)\n        setTimeout(() => {\n            study(study_time)\n        }, 5000);\n    } else if (playing && !studying) {\n        setTimeout(() => {\n            study(study_time)\n        }, 5000);\n    } else if (!playing) {\n        return\n    }\n\n}\nconst brek = (break_time) => {\n    console.log(\"Breaking\");\n    console.log(break_time);\n    if (break_time == -1) {\n        breaking = false\n        studying = true\n        break_time = saved_break_time\n        change_break(break_time)\n\n    }\n    if (playing && breaking) {\n        break_time -= 1\n        change_break(break_time)\n        setTimeout(() => {\n            brek(break_time)\n        }, 5000);\n    } else if (playing && !breaking) {\n        setTimeout(() => {\n            brek(break_time)\n        }, 5000)\n    } else if (!playing) {\n        return\n    }\n\n}\n\n\n//# sourceURL=webpack://pomo/./app/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/main.js"]();
/******/ 	
/******/ })()
;