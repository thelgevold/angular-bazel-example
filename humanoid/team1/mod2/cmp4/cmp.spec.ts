
import { Cmp7124Component } from './cmp';
describe('Cmp7124Component', () => {
  it('should add', () => {
    expect(new Cmp7124Component().add7124(1)).toBe(7125);
  });
});