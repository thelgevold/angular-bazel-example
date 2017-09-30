
import { Cmp7302Component } from './cmp';
describe('Cmp7302Component', () => {
  it('should add', () => {
    expect(new Cmp7302Component().add7302(1)).toBe(7303);
  });
});