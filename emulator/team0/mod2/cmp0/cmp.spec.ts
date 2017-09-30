
import { Cmp4020Component } from './cmp';
describe('Cmp4020Component', () => {
  it('should add', () => {
    expect(new Cmp4020Component().add4020(1)).toBe(4021);
  });
});