
import { Cmp7281Component } from './cmp';
describe('Cmp7281Component', () => {
  it('should add', () => {
    expect(new Cmp7281Component().add7281(1)).toBe(7282);
  });
});