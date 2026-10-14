import PageShell from '../components/PageShell.jsx';
import { learningCourses } from '../data/mockData.js';

export default function Learning() {
  return (
    <PageShell
      title="Learning and Development"
      subtitle="Support employee growth with learning plans, training programs, and course progress."
      actions={<button className="primary-button">Enroll employee</button>}
    >
      <div className="content-grid two-column">
        {learningCourses.map((course) => (
          <div className="panel learning-card" key={course.course}>
            <div className="panel-header compact-header">
              <h3>{course.course}</h3>
              <span className={`status-badge ${course.status.toLowerCase().replace(/\s+/g, '-')}`}>{course.status}</span>
            </div>
            <ul className="detail-list">
              <li><span>Trainer</span><strong>{course.trainer}</strong></li>
              <li><span>Duration</span><strong>{course.duration}</strong></li>
              <li><span>Progress</span><strong>{course.progress}</strong></li>
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
