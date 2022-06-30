// assets
import {
  ChromeOutlined,
  QuestionOutlined,
  CommentOutlined
} from "@ant-design/icons";

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  CommentOutlined
};

// ==============================|| MENU ITEMS - SUPPOTY PAGE ||============================== //

const support = {
  id: "support",
  title: "Support",
  type: "group",
  children: [
    {
      id: "help-support",
      title: "Help & Support",
      type: "item",
      url: "/help-suppot",
      icon: icons.ChromeOutlined
    },
    {
      id: "privacy-policy",
      title: "Privacy & Policy",
      type: "item",
      url: "#",
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    },
    {
      id: "feedback",
      title: "Feedback",
      type: "item",
      url: "#",
      icon: icons.CommentOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
