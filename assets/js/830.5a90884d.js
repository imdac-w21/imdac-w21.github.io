(window.webpackJsonp=window.webpackJsonp||[]).push([[830],{1051:function(t,e,i){"use strict";i.r(e);var a=i(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("For this assignment, you will be demonstrating your understanding of using functions, conditional statements, HTTP variables, and PHP includes by creating a simple interactive fishing game.")]),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("The player will perform actions by typing in the commands into the form text box. The response for each command will be displayed in the response box. The old responses will remain on the page even as new ones come in.")]),t._v(" "),i("p",[t._v("Each action may have certain conditions that must be met for the task to be performed. When a condition is not correct, the game must inform the player what they should do to perform the desired task. After an action has been performed, a status message should be present to the player to explain what happened.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("The player can start or stop a fire. The player will start the fire only if:")]),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("The player will stop the fire only if:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),i("p",[t._v("The player can do a check on the inventory status. The inventory status should return a list of how many items the player currently has.")]),t._v(" "),t._m(20),t._v(" "),i("p",[t._v("The player can display the instructions on how to play the game.")]),t._v(" "),t._m(21),t._v(" "),i("p",[t._v("The player can clear the current game data by restarting the game. All inventory should be set back to zero.")]),t._v(" "),t._m(22),t._v(" "),i("p",[t._v("The game data should be stored and retrieved from the session. Each time the player enters a command, the game data should be retrieved from and updated to the session.")]),t._v(" "),t._m(23),t._v(" "),i("p",[t._v("The commands received by the player should be sent using the POST method.")]),t._v(" "),t._m(24),t._v(" "),i("p",[t._v("The following requirement must be met to complete the assignment successfully:")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),i("p",[t._v("Each action or command (see above) will require a function. Create the following functions with the requirements:")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),i("p",[t._v("A completed version of the assignment can be found at the following:")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://functional-fishing.eisenbraun.ca",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://functional-fishing.eisenbraun.ca"),i("OutboundLink")],1)]),t._v(" "),t._m(55),t._v(" "),t._m(56)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"function-fishing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function-fishing","aria-hidden":"true"}},[this._v("#")]),this._v(" Function Fishing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"objective"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"game-play"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#game-play","aria-hidden":"true"}},[this._v("#")]),this._v(" Game Play")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"fishing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fishing","aria-hidden":"true"}},[this._v("#")]),this._v(" Fishing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When the player goes fishing, they have a "),e("em",[this._v("chance")]),this._v(" of catching a fish. But the player may only go fishing if:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The player has at least 1 piece of bait")]),this._v(" "),e("li",[this._v("The fire has been stopped")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"starting-stopping-a-fire"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#starting-stopping-a-fire","aria-hidden":"true"}},[this._v("#")]),this._v(" Starting / Stopping a fire")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The fire has been stopped")]),this._v(" "),e("li",[this._v("The player has at least 1 piece of wood")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The fire has been started")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"searching-for-bait"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-bait","aria-hidden":"true"}},[this._v("#")]),this._v(" Searching for bait")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The player can search for bait, which will increase the player's bait inventory "),e("strong",[this._v("by one")]),this._v(". The player can go searching for bait if:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The fire has been stopped")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"searching-for-wood"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-wood","aria-hidden":"true"}},[this._v("#")]),this._v(" Searching for wood")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The player can search for wood, which will increase the player's wood inventory "),e("strong",[this._v("by one")]),this._v(". The player can go searching for wood if:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The fire has been stopped")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"eating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eating","aria-hidden":"true"}},[this._v("#")]),this._v(" Eating")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The player can eat fish. Each fish will decrease the player's fish inventory "),e("strong",[this._v("by one")]),this._v(". The player can only eat if:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The fire has been started")]),this._v(" "),e("li",[this._v("The player has at least 1 fish")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"checking-inventory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checking-inventory","aria-hidden":"true"}},[this._v("#")]),this._v(" Checking inventory")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#help","aria-hidden":"true"}},[this._v("#")]),this._v(" Help")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"restarting-the-game"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restarting-the-game","aria-hidden":"true"}},[this._v("#")]),this._v(" Restarting the Game")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"game-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#game-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Game Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Commands")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-clone-the-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Clone the Repository")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Clone this repository from GitHub and use the provided file to complete the assignment. "),e("strong",[this._v("Warning: The provided file will throw an error if run as is. The error will be fixed after step 3 is completed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-include-functional-fishing-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-include-functional-fishing-php","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Include "),e("code",[this._v("functional-fishing.php")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Include "),e("code",[this._v("functional-fishing.php")]),this._v(" inside "),e("code",[this._v("index.php")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-create-game-data-in-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-game-data-in-session","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Create Game Data in Session")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("In "),i("code",[t._v("functional-fishing.php")]),t._v(", start a new session")]),t._v(" "),i("li",[t._v("In "),i("code",[t._v("functional-fishing.php")]),t._v(", create the "),i("code",[t._v("createGameData()")]),t._v(" function. The function will create a game data array and store it in session and store it in session under the index "),i("code",[t._v("functional_fishing")]),t._v(". The game data array should contain the following:\n"),i("ol",[i("li",[t._v("The "),i("code",[t._v("response")]),t._v(" array")]),t._v(" "),i("li",[t._v("The number of "),i("code",[t._v("fish")])]),t._v(" "),i("li",[t._v("The number of "),i("code",[t._v("wood")])]),t._v(" "),i("li",[t._v("The number of "),i("code",[t._v("bait")])]),t._v(" "),i("li",[t._v("The status of "),i("code",[t._v("fire")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-send-commands-using-the-post-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-send-commands-using-the-post-method","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Send commands using the POST Method")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In "),e("code",[this._v("index.php")]),this._v(", update the form to submit using the "),e("code",[this._v("POST")]),this._v(" method.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-check-for-the-post-array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-check-for-the-post-array","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. Check for the "),e("code",[this._v("$_POST")]),this._v(" array")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In "),e("code",[this._v("functional-fishing.php")]),this._v(", check for the "),e("code",[this._v("$_POST")]),this._v(" array for a player's command.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("If a player has entered a command, check If the command matches an existing function (HINT: Use "),i("code",[t._v("function_exists()")]),t._v(").\n"),i("ol",[i("li",[t._v("If so, execute the function and pass the results to the "),i("code",[t._v("updateResponse()")]),t._v(" function.")]),t._v(" "),i("li",[t._v("If not, then add a response to the response array in session, using "),i("code",[t._v("updateResponse()")]),t._v(", telling the user that the command is not valid.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6-create-game-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-create-game-functions","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. Create Game Functions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1-the-fish-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-the-fish-function","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. The "),e("code",[this._v("fish()")]),this._v(" function")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("fish()")]),this._v(" function will give the player a chance to catch fish. Each call to the "),e("code",[this._v("fish()")]),this._v(" function will use "),e("strong",[this._v("one")]),this._v(" piece of bait and randomly determine if a fish has been caught. The requirements for fishing are as follows:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("The fire must not be going")]),this._v(" "),e("li",[this._v("The player must have at least 1 piece of bait")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-the-eat-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-the-eat-function","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. The "),e("code",[this._v("eat()")]),this._v(" function")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("eat()")]),this._v(" function will allow the player to eat a fish. Each call to the "),e("code",[this._v("eat()")]),this._v(" function will use "),e("strong",[this._v("one")]),this._v(" fish. The requirements for eating are as follows:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("The fire must be going")]),this._v(" "),e("li",[this._v("The player must have at least 1 fish")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-the-fire-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-the-fire-function","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. The "),e("code",[this._v("fire()")]),this._v(" function")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("fire()")]),this._v(" function will allow the player to start or stop the fire and should have the following requirements:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("If the "),e("code",[this._v("fire()")]),this._v(" function is called when the fire is going, it should be turned off the fire.")]),this._v(" "),e("li",[this._v("If the "),e("code",[this._v("fire()")]),this._v(" function is called when the fire is NOT going AND the player has at least 1 piece of wood, the fire should be turned on.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-the-bait-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-the-bait-function","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. The "),e("code",[this._v("bait()")]),this._v(" function")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("bait()")]),this._v(" function will allow the player to search for bait as long as the fire is not going.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_5-the-wood-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-the-wood-function","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. The "),e("code",[this._v("wood()")]),this._v(" function")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("wood()")]),this._v(" function will allow the player to search for wood as long as the fire is not going.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_6-the-inventory-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-the-inventory-function","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. The "),e("code",[this._v("inventory()")]),this._v(" function")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("inventory()")]),this._v(" function will display the player's current inventory. It should list the amount of fish, bait, wood the player has, and if the fire is going.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_7-the-restart-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-the-restart-function","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. The "),e("code",[this._v("restart()")]),this._v(" function")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("restart()")]),this._v(" function will allow the player to clear the current game data and restart the game.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rubric"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Criteria")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Pts")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Create and store game data to session.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),i("tr",[i("td",[t._v("Allow the player to send commands using the form and retrieve those commands using the "),i("code",[t._v("POST")]),t._v(" method.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),i("tr",[i("td",[t._v("Create a "),i("code",[t._v("fish()")]),t._v(" function that meets all project requirements.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),i("tr",[i("td",[t._v("Create a "),i("code",[t._v("eat()")]),t._v(" function that meets all project requirements.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),i("tr",[i("td",[t._v("Create a "),i("code",[t._v("fire()")]),t._v(" function that meets all project requirements.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),i("tr",[i("td",[t._v("Create a "),i("code",[t._v("bait()")]),t._v(" function that meets all project requirements.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),i("tr",[i("td",[t._v("Create a "),i("code",[t._v("wood()")]),t._v(" function that meets all project requirements.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),i("tr",[i("td",[t._v("Create an "),i("code",[t._v("inventory()")]),t._v(" function that meets all project requirements.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),i("tr",[i("td",[t._v("Create a "),i("code",[t._v("restart()")]),t._v(" function that meets all project requirements.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),i("tr",[i("td",[t._v("Provide comments explaining the code and your thought process.")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("5")])])])])}],!1,null,null,null);e.default=s.exports}}]);