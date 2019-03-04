// @ts-ignore
import Navbar from 'ember-bootstrap/components/bs-navbar';

export default class BsNavbar extends Navbar {
  didInsertElement() {
    const itemsContainer: HTMLElement = document.getElementById("headbar") as HTMLElement;
    const menuItems: HTMLCollection = itemsContainer.getElementsByClassName("menu-button");

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", function () {
        for (let j = 0; j < menuItems.length; j++) {
          menuItems[j].className = menuItems[j].className.replace(" dark-font", "");
        }

        // @ts-ignore
        this.className += " dark-font";
      });
    }
  }
}
