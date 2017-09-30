
import { Cmp1581Component } from './cmp';
describe('Cmp1581Component', () => {
  it('should add', () => {
    expect(new Cmp1581Component().add1581(1)).toBe(1582);
  });
});