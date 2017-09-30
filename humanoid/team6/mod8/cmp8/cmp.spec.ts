
import { Cmp7688Component } from './cmp';
describe('Cmp7688Component', () => {
  it('should add', () => {
    expect(new Cmp7688Component().add7688(1)).toBe(7689);
  });
});