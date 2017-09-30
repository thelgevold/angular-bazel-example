
import { Cmp7204Component } from './cmp';
describe('Cmp7204Component', () => {
  it('should add', () => {
    expect(new Cmp7204Component().add7204(1)).toBe(7205);
  });
});