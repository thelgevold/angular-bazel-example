
import { Cmp8164Component } from './cmp';
describe('Cmp8164Component', () => {
  it('should add', () => {
    expect(new Cmp8164Component().add8164(1)).toBe(8165);
  });
});