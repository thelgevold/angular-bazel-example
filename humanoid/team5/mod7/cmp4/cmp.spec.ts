
import { Cmp7574Component } from './cmp';
describe('Cmp7574Component', () => {
  it('should add', () => {
    expect(new Cmp7574Component().add7574(1)).toBe(7575);
  });
});