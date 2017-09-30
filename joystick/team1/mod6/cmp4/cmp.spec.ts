
import { Cmp9164Component } from './cmp';
describe('Cmp9164Component', () => {
  it('should add', () => {
    expect(new Cmp9164Component().add9164(1)).toBe(9165);
  });
});