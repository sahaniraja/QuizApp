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
      url: "/help-support",
      icon: icons.ChromeOutlined
    },
    {
      id: "privacy-policy",
      title: "Privacy & Policy",
      type: "item",
      url: "/privacy-policy",
      icon: icons.QuestionOutlined,
      external: false,
      target: false
    },
    {
      id: "feedback",
      title: "Feedback",
      type: "item",
      url: "/feed-back",
      icon: icons.CommentOutlined,
      external: false,
      target: false
    }
  ]
};

export default support;
