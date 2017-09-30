
import { Cmp2164Component } from './cmp';
describe('Cmp2164Component', () => {
  it('should add', () => {
    expect(new Cmp2164Component().add2164(1)).toBe(2165);
  });
});