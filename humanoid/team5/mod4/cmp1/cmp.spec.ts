
import { Cmp7541Component } from './cmp';
describe('Cmp7541Component', () => {
  it('should add', () => {
    expect(new Cmp7541Component().add7541(1)).toBe(7542);
  });
});