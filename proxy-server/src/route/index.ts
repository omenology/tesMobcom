import { Router } from "express";
import {getAllNews, getNews} from '../controllers/news'

const route = Router({ mergeParams: true });

route.get("/posts/:id", getNews);
route.get("/posts",getAllNews);

export default route;
