import Tip from "../../utils/assets/tip.png";
import Flu from "../../utils/assets/flu.png";
import Space from "../../utils/assets/spac.png";
import Refresh from "../../utils/assets/refresh.png";
import Fitness from "../../utils/assets/fitness.png";
import { getTodayDate } from "../../utils/getTodayDate";
import Checklist from "../../utils/assets/checklist.png";

const today = getTodayDate();

const Blogdata = [
  {
    id: 1,
    date: today,
    title: "Refresh Your Space",
    cover: Refresh,
    category: "Refresh",
  },
  {
    id: 2,
    date: today,
    title: "House Cleaning Checklist",
    cover: Checklist,
    category: "Checklist",
  },
  {
    id: 3,
    date: today,
    title: "House Cleaning",
    cover: Space,
    category: "Space",
  },
  {
    id: 4,
    date: today,
    title: "Hygenic Fitness Center",
    cover: Fitness,
    category: "Fitness",
  },
  {
    id: 5,
    date: today,
    title: "House Cleaning Tip",
    cover: Tip,
    category: "Tip",
  },
  {
    id: 6,
    date: today,
    title: "Avoid the Flu",
    cover: Flu,
    category: "Flu",
  },
];

export default Blogdata;
