
import { Cmp9020Component } from './cmp';
describe('Cmp9020Component', () => {
  it('should add', () => {
    expect(new Cmp9020Component().add9020(1)).toBe(9021);
  });
});