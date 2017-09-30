
import { Cmp7569Component } from './cmp';
describe('Cmp7569Component', () => {
  it('should add', () => {
    expect(new Cmp7569Component().add7569(1)).toBe(7570);
  });
});