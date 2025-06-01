import AssignedPatients from './AssignedPatients';
import RequestAccess from './RequestAccess';
import ConsentHistory from './ConsentHistory';
import ConsultationNotes from './ConsultationNotes';
import { motion } from 'framer-motion';

export default function DoctorDashboard() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold">Doctor Dashboard</h2>
      <AssignedPatients />
      <RequestAccess />
      <ConsentHistory />
      <ConsultationNotes />
    </motion.div>
  );
} 