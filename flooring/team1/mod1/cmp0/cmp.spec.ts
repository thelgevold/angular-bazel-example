
import { Cmp5110Component } from './cmp';
describe('Cmp5110Component', () => {
  it('should add', () => {
    expect(new Cmp5110Component().add5110(1)).toBe(5111);
  });
});