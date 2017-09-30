
import { Cmp1360Component } from './cmp';
describe('Cmp1360Component', () => {
  it('should add', () => {
    expect(new Cmp1360Component().add1360(1)).toBe(1361);
  });
});