
import { Cmp7315Component } from './cmp';
describe('Cmp7315Component', () => {
  it('should add', () => {
    expect(new Cmp7315Component().add7315(1)).toBe(7316);
  });
});