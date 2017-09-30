
import { Cmp1582Component } from './cmp';
describe('Cmp1582Component', () => {
  it('should add', () => {
    expect(new Cmp1582Component().add1582(1)).toBe(1583);
  });
});