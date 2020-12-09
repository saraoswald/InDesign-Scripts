/* --- Go to Next Line --- */
/*

Purpose: Selects the next line in the Letterer Buddy dialog window

Usage:
- Install the script 
- Assign the script to a keyboard shortcut (Edit > Keyboard Shortcuts... > Product Area : Scripts)
- Start up Letterer Buddy, and load a script
- Press the keyboard shortcut that you assigned to this script 
- The next line in the listbox will be selected 

Notes: 
- If this script doesn't work, try restarting InDesign

*/

var window = Window.find("palette","Letterer Buddy");
if(window && window.visible){
    var list = window.children[0].children[0].children[0];
    if (list.selection < list.items.length) {
        list.selection = list.selection + 1;
    }
}