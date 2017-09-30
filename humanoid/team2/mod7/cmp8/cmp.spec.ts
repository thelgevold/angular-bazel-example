
import { Cmp7278Component } from './cmp';
describe('Cmp7278Component', () => {
  it('should add', () => {
    expect(new Cmp7278Component().add7278(1)).toBe(7279);
  });
});