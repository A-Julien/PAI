var div = document.createElement("div");

div.innerHTML =
   " <!--Import jQuery before materialize.js-->\n" +
    "\n" +
    "    <!-- Dropdown Structure -->\n" +
    "    <ul id=\"dropdown1\" class=\"dropdown-content\">\n" +
    "        <li><a href=\"CV_Julien.xhtml\">Julien</a></li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li><a href=\"CV_Quentin.xhtml\">Quentin</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <nav>\n" +
    "        <div class=\"nav-wrapper\">\n" +
    "            <a href=\"index.xhtml\" class='brand-logo left' >Medicine Travel</a>\n" +
    "            <ul class=\"right hide-on-med-and-down\">\n" +
    "                <!-- Dropdown Trigger -->\n" +
    "                <li>\n" +
    "                    <a class=\"dropdown-button\" href=\"#!\" data-activates=\"dropdown1\">\n" +
    "                        CV<i class=\"material-icons right\">arrow_drop_down</i>\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li><a href=\"index.xhtml\"><i class=\"material-icons\">home</i></a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </nav>"

document.body.appendChild(div);