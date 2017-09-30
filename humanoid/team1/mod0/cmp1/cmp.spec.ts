
import { Cmp7101Component } from './cmp';
describe('Cmp7101Component', () => {
  it('should add', () => {
    expect(new Cmp7101Component().add7101(1)).toBe(7102);
  });
});