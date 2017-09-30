
import { Cmp1164Component } from './cmp';
describe('Cmp1164Component', () => {
  it('should add', () => {
    expect(new Cmp1164Component().add1164(1)).toBe(1165);
  });
});