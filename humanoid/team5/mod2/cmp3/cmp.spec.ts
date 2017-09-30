
import { Cmp7523Component } from './cmp';
describe('Cmp7523Component', () => {
  it('should add', () => {
    expect(new Cmp7523Component().add7523(1)).toBe(7524);
  });
});