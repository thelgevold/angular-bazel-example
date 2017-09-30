
import { Cmp5541Component } from './cmp';
describe('Cmp5541Component', () => {
  it('should add', () => {
    expect(new Cmp5541Component().add5541(1)).toBe(5542);
  });
});