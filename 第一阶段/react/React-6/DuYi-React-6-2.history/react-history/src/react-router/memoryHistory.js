import { createMemoryHistory } from "history";

window.createMemoryHistory = createMemoryHistory();
window.h = createMemoryHistory({
  initialEntries: ["/", "/123", "/abc"],
  initialIndex: 0,
});
