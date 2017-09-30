
import { Cmp9401Component } from './cmp';
describe('Cmp9401Component', () => {
  it('should add', () => {
    expect(new Cmp9401Component().add9401(1)).toBe(9402);
  });
});