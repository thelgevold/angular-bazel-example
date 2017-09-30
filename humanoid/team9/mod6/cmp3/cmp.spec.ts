
import { Cmp7963Component } from './cmp';
describe('Cmp7963Component', () => {
  it('should add', () => {
    expect(new Cmp7963Component().add7963(1)).toBe(7964);
  });
});