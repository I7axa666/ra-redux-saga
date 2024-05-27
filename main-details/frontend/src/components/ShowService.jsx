import { useSelector, useDispatch } from 'react-redux';
import { fetchToService } from '../features/serviceSlice';
import { Link } from 'react-router-dom';

export function ShowService() {
  const { serviceInfo, isLoading, error } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Fetch service"
          onClick={() => dispatch({ type: fetchToService.pending.type })}
        >
          {error ? "Запросить повторно" : "Получить список услуг"}
        </button>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {serviceInfo && serviceInfo.length > 0 && (
          <ul>
            {serviceInfo.map((service) => (
              <li key={service.id}>
                <Link to={`/api/services/${service.id}`} className='service'>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
