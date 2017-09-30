
import { Cmp7038Component } from './cmp';
describe('Cmp7038Component', () => {
  it('should add', () => {
    expect(new Cmp7038Component().add7038(1)).toBe(7039);
  });
});