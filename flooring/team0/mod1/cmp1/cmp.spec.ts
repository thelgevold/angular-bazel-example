
import { Cmp5011Component } from './cmp';
describe('Cmp5011Component', () => {
  it('should add', () => {
    expect(new Cmp5011Component().add5011(1)).toBe(5012);
  });
});