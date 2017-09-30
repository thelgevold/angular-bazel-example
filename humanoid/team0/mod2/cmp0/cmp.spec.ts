
import { Cmp7020Component } from './cmp';
describe('Cmp7020Component', () => {
  it('should add', () => {
    expect(new Cmp7020Component().add7020(1)).toBe(7021);
  });
});