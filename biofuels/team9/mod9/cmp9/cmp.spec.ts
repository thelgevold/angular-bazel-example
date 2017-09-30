
import { Cmp1999Component } from './cmp';
describe('Cmp1999Component', () => {
  it('should add', () => {
    expect(new Cmp1999Component().add1999(1)).toBe(2000);
  });
});