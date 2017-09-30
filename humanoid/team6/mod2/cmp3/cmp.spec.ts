
import { Cmp7623Component } from './cmp';
describe('Cmp7623Component', () => {
  it('should add', () => {
    expect(new Cmp7623Component().add7623(1)).toBe(7624);
  });
});