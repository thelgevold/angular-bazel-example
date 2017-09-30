
import { Cmp1801Component } from './cmp';
describe('Cmp1801Component', () => {
  it('should add', () => {
    expect(new Cmp1801Component().add1801(1)).toBe(1802);
  });
});