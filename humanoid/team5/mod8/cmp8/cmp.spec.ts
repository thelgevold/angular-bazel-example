
import { Cmp7588Component } from './cmp';
describe('Cmp7588Component', () => {
  it('should add', () => {
    expect(new Cmp7588Component().add7588(1)).toBe(7589);
  });
});