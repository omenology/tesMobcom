import { Request, Response } from "express";
import { Op } from "sequelize";
import httpError, { HttpError } from "http-errors";

import modelNews from '../data/model/news'


export const getAllNews = async (req: Request, res: Response) => {
  try {

    const dataNews = await modelNews.findAll()

    res.status(200).json(dataNews);
  } catch (err: any) {
    const error: HttpError = err;
    res.status(error.statusCode || 500).send({ message: error.message });
  }
};

export const getNews = async (req: Request, res: Response) => {
    try {
  
      const dataNews = await modelNews.findByPk(req.params.id)
      if(!dataNews) return res.sendStatus(204)
  
      return res.status(200).json(dataNews);
    } catch (err: any) {
      const error: HttpError = err;
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };


