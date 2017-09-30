
import { Cmp7134Component } from './cmp';
describe('Cmp7134Component', () => {
  it('should add', () => {
    expect(new Cmp7134Component().add7134(1)).toBe(7135);
  });
});