
import { Cmp9541Component } from './cmp';
describe('Cmp9541Component', () => {
  it('should add', () => {
    expect(new Cmp9541Component().add9541(1)).toBe(9542);
  });
});