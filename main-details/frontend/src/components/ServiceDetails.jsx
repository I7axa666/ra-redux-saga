import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { serviceById } from '../features/serviceSlice';

export default function ServiceDetails() {
  const { id: serviceId } = useParams();
  const dispatch = useDispatch();
  const { serviceDetails, isLoading, error } = useSelector((state) => state.service);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (serviceId) {
      dispatch({ type: serviceById.pending.type, payload: serviceId });
    }
  }, [dispatch, serviceId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {serviceDetails && (
        <div>
          <h3>{serviceDetails.name}</h3>
          <p>{serviceDetails.price}</p>
          <p>{serviceDetails.content}</p>
          <span onClick={() => navigate('/')}>Back</span>
        </div>
      )}
    </div>
  );
}
