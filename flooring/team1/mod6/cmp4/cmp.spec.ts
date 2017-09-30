
import { Cmp5164Component } from './cmp';
describe('Cmp5164Component', () => {
  it('should add', () => {
    expect(new Cmp5164Component().add5164(1)).toBe(5165);
  });
});