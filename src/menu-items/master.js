// assets
import {
  ChromeOutlined,
  QuestionOutlined,
  CommentOutlined,
  BarsOutlined,
  ShareAltOutlined,
  TagsOutlined
} from "@ant-design/icons";

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  CommentOutlined,
  BarsOutlined,
  ShareAltOutlined,
  TagsOutlined
};

// ==============================|| MENU ITEMS - SUPPOTY PAGE ||============================== //

const master = {
  id: "master",
  title: "Master",
  type: "group",
  children: [
    {
      id: "category",
      title: "Category",
      type: "item",
      url: "/category-details",
      icon: icons.BarsOutlined
    },
    {
      id: "subcategory",
      title: "Sub Category",
      type: "item",
      url: "/subcategory-details",
      icon: icons.ShareAltOutlined,
      external: false,
      target: false
    },
    {
      id: "product",
      title: "Product",
      type: "item",
      url: "/product-details",
      icon: icons.TagsOutlined,
      external: false,
      target: false
    }
  ]
};

export default master;
