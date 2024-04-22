import MainNavbar from './DefaultNavbar';
import ClassmateList from './ClassmateList';

export default function Contact() {
  return (
    <div>
      <MainNavbar />
      <div className="container position-relative pb-3" style={{top: "5.5rem", zIndex: "-1"}}>
        <ClassmateList />
      </div>
    </div>
  );
}
