
import { Cmp2999Component } from './cmp';
describe('Cmp2999Component', () => {
  it('should add', () => {
    expect(new Cmp2999Component().add2999(1)).toBe(3000);
  });
});