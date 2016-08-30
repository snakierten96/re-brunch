import { ITables, ITable } from './tables.types';
import { tableReducer } from './tables.reducer';
import { deimmutifyTables, reimmifyTables } from './tables.transformers';

export {
  ITables,
  ITable,
  tableReducer,
  deimmutifyTables,
  reimmifyTables
}