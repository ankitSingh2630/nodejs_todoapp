import express from 'express';
import { deleteTask, getAllTask, newTask, updateTask } from '../controllers/task.controller.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router=express.Router();

router.post("/new",isAuthenticated,newTask)

router.get("/getAll",isAuthenticated,getAllTask)

router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)

export default router;