
import { Cmp7871Component } from './cmp';
describe('Cmp7871Component', () => {
  it('should add', () => {
    expect(new Cmp7871Component().add7871(1)).toBe(7872);
  });
});