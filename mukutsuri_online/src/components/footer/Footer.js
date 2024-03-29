import React from "react";

function Footer() {
  return (
    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; {new Date().getFullYear()} Mukutsuri Swimsuits</p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <a href="/">Privacy</a>
        </li>
        <li class="list-inline-item">
          <a href="/">Terms</a>
        </li>
        <li class="list-inline-item">
          <a href="/">Support</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
