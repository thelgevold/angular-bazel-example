
import { Cmp7208Component } from './cmp';
describe('Cmp7208Component', () => {
  it('should add', () => {
    expect(new Cmp7208Component().add7208(1)).toBe(7209);
  });
});