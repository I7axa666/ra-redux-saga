import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { inputValue } from '../store/skill/skill.slice';

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators({ inputValue }, dispatch), [dispatch]);
};
