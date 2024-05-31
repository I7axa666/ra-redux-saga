import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

export default function Skills() {
  const { skillList, isLoading, error, search } = useSelector((state) => state.skills);
  const { inputValue } = useActions();
  
  const onChange = (e) => {
    const value = e.target.value;
    inputValue(value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} value={search} />
      <ul>
        {search === '' ? (
          <p>Type something to search...</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Skill loading error</p>
        ) : skillList.length === 0 ? (
          <p>No skills found</p>
        ) : (
          skillList.map((skill) => <li key={skill.id}>{skill.name}</li>)
        )}
      </ul>
    </div>
  );
}
