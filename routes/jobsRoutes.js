import express from 'express'
const router = express.Router()

import { createJob, deleteJob, getAllJobs, updateJob, showStats } from '../controllers/jobsController.js'

router.route('/').get(getAllJobs).post(createJob)
router.route('/state').get(showStats)
router.route('/:id').patch(updateJob).delete(deleteJob)

export default router
